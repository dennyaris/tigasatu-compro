ARG NODE_VERSION=18
ARG TAG_VERSION=v0.0.0

FROM node:${NODE_VERSION}-slim AS build

ARG TAG_VERSION
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV TAG_VERSION=${TAG_VERSION}

RUN corepack enable

WORKDIR /src

COPY . /src

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build


FROM node:${NODE_VERSION}-alpine as prod
ARG TAG_VERSION
ENV TAG_VERSION=${TAG_VERSION}

WORKDIR /app

# Copy the built application from the "build" image into the "prod" image
COPY --from=build /src/.output /app/

# Since this image only contains node.js, we do not need to specify the node command and simply pass the path to the index.mjs file!
CMD ["node", "/app/server/index.mjs"]


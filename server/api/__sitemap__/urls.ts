import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { serverQueryContent } from '#content/server'

export default defineSitemapEventHandler(async (e) => {
  const contentList = (await serverQueryContent(e).find()) as ParsedContent[]
  return contentList
    .filter(c => c._path!.startsWith('/career'))
    .map((c) => {
      return asSitemapUrl({
        loc: c._path,
        _i18nTransform: true
      })
    })
})

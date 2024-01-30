#!/bin/bash

git checkout main
git fetch origin main
git reset --hard origin/main

# Delete the local dev branch
# Delete the remote dev branch
git branch -D dev
git push -d origin dev

# Create a new dev branch
# Push the new dev branch to remote
git checkout -b dev
git push -u origin dev

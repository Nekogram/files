#!/usr/bin/env sh

set -e

npm run build

cd src/.vuepress/dist

echo 'nekogram.app' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/tehcneko/nekogram-files.git master:gh-pages

cd -
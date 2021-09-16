#!/bin/bash

git rm -r static
rm -rf static
rsync -a build/ ./;
rm -rf build;
python addSPA.py;
git add static
git commit -am "Update deploy";
git push https://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@github.com/andrewwong97/andrewwong97.github.io.git


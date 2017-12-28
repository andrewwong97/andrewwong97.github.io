#!/bin/bash

rsync -a build/ ./;
rm -rf build;
python addSPA.py;
git commit -am "Update deploy";
git push;

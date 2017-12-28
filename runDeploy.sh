#!/bin/bash

mv build/* ./*;
rmdir build;
python addSPA.py;
git commit -am "Update deploy";
git push;

#!/bin/bash

# Remove static directory both from git and filesystem
git rm -r static
rm -rf static

# Copy build directory contents to current directory
rsync -a build/ ./

# Remove build directory
rm -rf build

# Run Python script (presumably adds Single Page App functionality)
python addSPA.py

# Stage static directory, commit and push changes
git add static
git commit -am "Update deploy"
git push
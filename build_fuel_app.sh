#!/usr/bin/bash
cd fuel-app/ || echo "Could change to dir fuel-app/"
npm run-script build || echo "Error running 'npm run-script build'"
cd ../
cp -r fuel-app/build/ fuel-server/ || echo "Couldn't copy build file"

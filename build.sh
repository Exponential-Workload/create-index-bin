#!/bin/bash
set -eax
esbuild --bundle --platform=node --target=node18 --outfile=out/create.js --format=cjs --packages=external index.js
pkg -t node18-win-x64,node18-linux-x64,node18-macos-x64 -o out/index out/create.js --config package.json --public --no-bytecode --public-packages "*"  > pkg.log 2> pkg.log
rm out/create.js

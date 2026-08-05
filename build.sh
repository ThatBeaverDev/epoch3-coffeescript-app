mkdir -p build dist

npx coffee --output build --compile src

npx rollup -c

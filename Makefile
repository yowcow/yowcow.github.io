all: node_modules index.html dist/index.bundle.js

node_modules: package.json
	npm install
	touch node_modules

index.html: src/index.pug
	node build.js -i $< -o $@

dist/index.bundle.js: src/index.js src/index.css
	node ./node_modules/.bind/webpack --config webpack.config.js

run:
	node server.js

.PHONY: run

all: index.html index.bundle.js

index.html: src/index.js
	npm run build

index.bundle.js: src/index.js src/index.css
	npm run webpack

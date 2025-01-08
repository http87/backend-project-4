install:
	npm ci

start:
	node bin/index.js

publish:
	npm publish --dry-run

setup:
	npm link

lint:
	npx eslint .
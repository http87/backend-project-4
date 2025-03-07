install:
	npm ci

publish:
	npm publish --dry-run

setup:
	npm link

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	npx jest --coverage
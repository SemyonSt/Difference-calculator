install:
	npm install ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
test:
	npm test

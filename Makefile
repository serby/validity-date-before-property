qa: test lint

test:
	@./node_modules/.bin/mocha -R spec

lint-changed:
	@jshint `git status --porcelain | sed -e "s/^...//g"`

lint:
	@jshint

.PHONY: test lint lint-changed
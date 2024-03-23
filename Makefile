.PHONY: install
install:
	yarn install

.PHONY: build
build:
	yarn build

.PHONY: clean
clean:
	yarn clean

.PHONY: test
test:
	yarn test

.PHONY: test_coverage
test_coverage:
	yarn test:coverage

.PHONY: lint
lint:
	yarn lint

.PHONY: lint_text
lint_text:
	yarn lint:text

.PHONY: format
format:
	yarn format

.PHONY: format_check
format_check:
	yarn format:check

.PHONY: before_commit
before_commit: test format lint lint_text

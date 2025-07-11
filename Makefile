
.PHONY: build-protos
build-protos:
	npx buf lint
	npx buf generate
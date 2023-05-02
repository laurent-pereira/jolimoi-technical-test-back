PROJECT = "Jolicode Technical Test"

start: install server

test: install testing

install: ;@echo "Installing ${PROJECT}....."; \
	npm install  \

server: ;@echo "Launching ${PROJECT}....."; \
	npm run start

testing: ;@echo "Testing ${PROJECT}....."; \
	npm run test
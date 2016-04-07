build:
	docker build -t notifyme .
run:
	docker run -p 8500:8500 -e ENV=$(env) notifyme
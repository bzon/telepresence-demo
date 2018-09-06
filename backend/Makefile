build:
	go get ./...
	GOOS=linux GOARCH=amd64 go build -o app
	docker build -t bzon/telepresence-backend .
push:
	docker push bzon/telepresence-backend:latest

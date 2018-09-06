package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	log.Println("Accessed from", r.UserAgent(), r.Host)
	w.Header().Set("Content-Type", "application/json")
	// https://getbootstrap.com/docs/4.0/components/buttons/
	// btn-danger , btn-warning, btn-info
	fmt.Fprint(w, `{"buttonType": "btn-info", "buttonSays": "Kubernetes is awesome!"}`)
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

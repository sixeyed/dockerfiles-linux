package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    path := r.URL.Path[1:]
    if (path == "err") {
        panic(fmt.Sprintf("err!"))
    }
    fmt.Printf("Responding to path: %s\n", path)
    fmt.Fprintf(w, "This is: %s!", path)
}

func main() {
    http.HandleFunc("/", handler)
    fmt.Println("Listening on port 8080")
    http.ListenAndServe(":8080", nil)    
}
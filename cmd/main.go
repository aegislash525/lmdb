package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/aegislash525/lmdb/internal/initializers"
	"github.com/aegislash525/lmdb/internal/routes"
	"github.com/aegislash525/lmdb/pkg/middleware"
)

func init() {
	initializers.LoadEnv()
}

func main() {
	addr := os.Getenv("ADDR")
	port := os.Getenv("PORT")

	mux := http.NewServeMux()
	routes.Api(mux)
	log.Printf("serving on %s:%s.\n", addr, port)
	log.Fatal(http.ListenAndServe(
		fmt.Sprintf("%s:%s", addr, port),
		middleware.SetupCors(mux)),
	)
}
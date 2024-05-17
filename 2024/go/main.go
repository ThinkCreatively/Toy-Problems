package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
)

var buf *bytes.Buffer

func main() {
	data, err := os.ReadFile("./input.txt")

	if err != nil {
		log.Fatal(err)
	}

	lines := strings.Split(string(data), "\n")

	for _, line := range lines {
		go func(line string) {
			data, err := getData(line)
			if err != nil {
				log.Printf("unable to get status: %v", err)
			}

			if strings.Contains(line, "foo") {
				fmt.Printf("data found: %s", data)
				os.Exit(0)
			}
		}(line)
	}
}

func getData(line string) (string, error) {
	var location struct{ URL string }

	if err := json.Unmarshal([]byte(line), &location); err != nil {
		return "", err
	}

	req, err := http.NewRequestWithContext(context.Background(), http.MethodGet, location.URL, nil)
	if err != nil {
		return "", err
	}

	c := &http.Client{}

	res, err := c.Do(req)
	if err != nil {
		return "", err
	}
	defer res.Body.Close()

	if _, err := io.Copy(buf, res.Body); err != nil {
		return "", err
	}

	var payload struct {
		Data string `bson:"data"`
	}

	if err := json.Unmarshal(buf.Bytes(), &payload); err != nil {
		return "", err
	}

	return payload.Data, nil
}

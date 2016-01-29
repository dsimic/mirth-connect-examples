#!/bin/sh


HOST=localhost
PORT=8004
JSON_PATH=msg.json


curl -vX POST http://$HOST:$PORT -d @$JSON_PATH \
    -H "Content-Type: application/json"

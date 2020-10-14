#!/bin/bash

curl -X POST -H 'Content-Type: application/json' -i http://localhost:3333/orphanages --data '{
    "name": "Lar das Meninas",
    "latitude": "-29.7004685",
    "longitude": "-51.1352341",
    "about": "About String",
    "instructions": "Instruction Striing",
    "opening_hours": "Working Hours",
    "open_on_weekends": "true"
}'
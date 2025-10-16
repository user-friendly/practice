#!/usr/bin/env bash

NAME_DIR="$1"
EXT="js"
SOL_FILE="$NAME_DIR/solution.$EXT"
INPUT_FILE="$NAME_DIR/data.input"
OUTPUT_FILE="$NAME_DIR/data.output"

mkdir $NAME_DIR

touch $SOL_FILE $INPUT_FILE $OUTPUT_FILE

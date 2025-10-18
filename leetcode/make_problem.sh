#!/usr/bin/env bash

NAME_DIR="$1"
EXT="js"
SOL_DIR="solutions"
SOL_FILE="$SOL_DIR/$NAME_DIR/solution.$EXT"
INPUT_FILE="$SOL_DIR/$NAME_DIR/data.input"
OUTPUT_FILE="$SOL_DIR/$NAME_DIR/data.output"

mkdir "$SOL_DIR/$NAME_DIR"

touch $SOL_FILE $INPUT_FILE $OUTPUT_FILE

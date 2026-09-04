#!/usr/bin/env bash

NAME_DIR="$1"
EXT="py"
SOL_DIR="solutions"
SOL_FILE="$SOL_DIR/$NAME_DIR/main.$EXT"
TESTCASES="$SOL_DIR/$NAME_DIR/testcases.$EXT"
# INPUT_FILE="$SOL_DIR/$NAME_DIR/data.input"
# OUTPUT_FILE="$SOL_DIR/$NAME_DIR/data.output"

mkdir "$SOL_DIR/$NAME_DIR"

touch $SOL_FILE $TESTCASES

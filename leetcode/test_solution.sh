#!/usr/bin/env bash

INTERP="node"

NAME_DIR="$1"
EXT="js"
SOL_FILE="$NAME_DIR/solution.$EXT"
INPUT_FILE="$NAME_DIR/data.input"

if [ ! "x$2" = "x" ]; then
	INTERP="$2"
	
	if [ ! "x$3" = "x" ]; then
		EXT="$3"
	fi
fi

cat $INPUT_FILE | $INTERP $SOL_FILE

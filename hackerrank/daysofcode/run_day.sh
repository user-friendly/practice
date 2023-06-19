#!/usr/bin/env bash

INTERP="node"
DAY_FILE="day_$1/day_$1"
EXT="js"

if [ ! "x$2" = "x" ]; then
	INTERP="$2"
	
	if [ ! "x$3" = "x" ]; then
		EXT="$3"
	fi
fi

cat $DAY_FILE.input | $INTERP $DAY_FILE.$EXT

#!/usr/bin/env bash

INTERP="node"
DIFFER="diff"

# Fancy?
if command -v colordiff >/dev/null 2>&1; then
    DIFFER="colordiff"
fi

NAME_DIR="$1"
EXT="js"
EXT_TS="ts"
SOL_DIR="solutions"
SOL_FILE=""
SOL_FILE_JS="$SOL_DIR/$NAME_DIR/solution.$EXT"
SOL_FILE_TS="$SOL_DIR/$NAME_DIR/solution.$EXT_TS"
INPUT_FILE="$SOL_DIR/$NAME_DIR/data.input"
# Desired output, i.e. solution answers.
OUTPUT_FILE="$SOL_DIR/$NAME_DIR/data.output"

if [ ! "x$2" = "x" ]; then
	INTERP="$2"
	
	if [ ! "x$3" = "x" ]; then
		EXT="$3"
	fi
fi

# We're dealing with a TypeScript solution.
if [ -f $SOL_FILE_TS ]; then
	INTERP="$INTERP --import tsx"
	SOL_FILE="$SOL_FILE_TS"
else
	SOL_FILE="$SOL_FILE_JS"
fi

cat $INPUT_FILE | $INTERP $SOL_FILE | $DIFFER $OUTPUT_FILE -

passed=$?

echo -e "\n"

if [ $passed -eq 0 ]; then
	echo -e "\x1b[32mAll test cases passed.\x1b[0m"
else
	echo -e "\x1b[31mSome test cases failed!\x1b[0m"
fi

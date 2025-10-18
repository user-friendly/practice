#!/usr/bin/env bash

SOL_DIR="solutions"
SOL_TARGET="$SOL_DIR/$1"

if [ -d $SOL_TARGET ]; then
	echo "folder $1 already exists"
	exit 1
fi

cp -r tpl $SOL_TARGET

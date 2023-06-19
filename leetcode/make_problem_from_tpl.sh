#!/usr/bin/env bash

if [ -d $1 ]; then
	echo "folder $1 already exists"
	exit 1
fi

cp -r tpl $1

#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

import sys
from importlib import import_module

import pylib.config as config
from pylib.helper import testSequences

config.dataFileDir = sys.argv[1]

solution = import_module(sys.argv[1] + ".solution")

testSequences(solution.solve)

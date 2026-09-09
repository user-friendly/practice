#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

import sys
from importlib import import_module

# import pylib.config as config
# from pylib.helper import testSequences
# config.dataFileDir = "solutions/" + sys.argv[1]
# solution = import_module("solutions." + sys.argv[1] + ".main")
# testSequences(solution.problem)

module_path = ".".join(
    sys.argv[1].removesuffix(".py").replace("\\", "/").split("/")[-3::]
)
print(module_path)
solution = import_module(module_path)

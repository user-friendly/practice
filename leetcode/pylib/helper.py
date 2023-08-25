# -*- coding: UTF-8 -*-

import sys
import pylib.config as config
import pylib.termcolors as colors

def readSequences():
    with open(config.dataFileDir + "/data.input", "r", encoding="utf-8") as fp:
        for line in fp:
            # Skip commented lines and empty lines.
            line = line.strip()
            if len(line) == 0 or line[0] == '#':
                continue
            nums = [int(v) for v in line.split(",")]
            expected = int(fp.readline())
            yield [nums, expected]

def testSequences(solver):
    failed = False
    for v in readSequences():
        ans = solver(v[0])
        if ans == v[1]:
            print(f'{colors.GREEN}correct answer `{ans}` for `{v[0]}`{colors.RESET}')
        else:
            print(f'{colors.RED}wrong answer `{ans}` for `{v[0]}`, should be `{v[1]}`{colors.RESET}')
            failed = True
    
    if failed:
        sys.exit(1)

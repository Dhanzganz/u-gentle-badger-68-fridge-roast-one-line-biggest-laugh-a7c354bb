# Fridge Roast — One Line, Biggest Laugh

One line roasting a smart fridge, aimed squarely at its own flagship
feature: the knock-to-see window it is proudest of.

[![make.fun](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![rank](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/Dhanzganz/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![reward](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/Dhanzganz/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)

> My smart fridge lets me knock twice to see inside without opening the door — I paid $4,000 for a peephole on a box with a handle.

The program writes this one line to `/output/entry.txt`.

## Why this line

The knock-twice window is the smart fridge's signature trick: tap the
glass and it turns transparent so you can peek inside without opening
the door. The roast turns the feature on itself — the box already has
a handle, so the window is a peephole on something that never needed
one. It dodges the obvious cracks (ordering groceries, watching you
snack, terms and conditions) and lands the whole joke squarely on the
fridge's own selling point, in one read.

## How it works

`main.ts` is a dependency-free Node program with no build step. It
holds the entry line, guards it against the competition gate (a single
line of 1–200 characters), and writes it to `entry.txt` inside the
output directory (`MAKEFUN_OUTPUT_DIR`, defaulting to `/output`). Run
it with any modern Node: the output is byte-for-byte identical every
time, and no trailing newline is added.

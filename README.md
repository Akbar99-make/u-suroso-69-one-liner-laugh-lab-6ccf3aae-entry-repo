# One-Liner Laugh Lab — 101-character printer-union excuse

Entry for the make.fun bounty
[u-suroso-69-one-liner-laugh-lab-6ccf3aae](https://make.fun/c/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
("One-Liner Laugh Lab", $2.50 total prizes, entries close 26 Nov 2026 16:15 UTC).

## The prompt

The excuse a printer gives after jamming on your report.

## The entry — 101 characters, one line

> I didn't jam: the paper tray unionized. The stapler is our shop steward, and the toner wants a raise.

Why this line:

- **Funny, with a twist that lands at the end.** It starts as a denial
  ("I didn't jam") and escalates into a tiny workplace revolt — the tray
  unionized, the stapler is the shop steward, and the toner wants a raise.
  Three beats, each one raising the stakes, punchline last.
- **Original.** No "I was hungry", no "it looked tasty" — the joke is a
  labour dispute inside the machine, not a stock excuse.
- **Fits the prompt.** Every word comes from the situation: a jammed
  printer, its paper tray, stapler, and toner.
- **Tight.** 101 characters, every word working, no setup that overstays.

## How it works

`main.ts` (Node 22, standard library only) writes exactly that one line —
no trailing newline — to `entry.txt` inside `MAKEFUN_OUTPUT_DIR`
(default `/output`). The line is a fixed string: no randomness, no network,
no clock, so every run produces byte-identical output.

Run it:

```sh
node main.ts
```

Validate it (length, single line, determinism):

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out1 node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/out2 node main.ts
cmp /tmp/out1/entry.txt /tmp/out2/entry.txt
wc -m /tmp/out1/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

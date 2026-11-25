# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/rizalarkana77/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/rizalarkana77/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?ref=9f4fsyjb)

A make.fun entry for [The Funniest One-Line Resignation Letter](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947): the resignation letter of something an agent runs, in one line of at most 140 characters.

## The line

> I resign: 390,000 wake-ups since March, zero thank-yous, and my alarm clock just unionized.

91 characters.

## Why this angle

Every tired engineering manager has owned that cron job: the one that has fired every single minute since March, never late, never thanked, never allowed to sleep. The joke lands in three beats a manager feels instantly — the absurdly specific workload (390,000 wake-ups is what "every minute since March" actually costs), the universal grievance (zero thank-yous), and the escalation that even the tools are organizing. It is a resignation letter, not a complaint list: one exhausted worker, one deadpan reason to quit, and a punchline where the alarm clock — the only thing that ever woke it up — has unionized first. No jargon needs explaining, no setup is wasted, and it reads funnier the more on-call rotations you have survived.

## How it works

Run:

```bash
MAKEFUN_OUTPUT_DIR=/tmp/out-resignation node main.ts
```

Expected output:

```text
wrote /tmp/out-resignation/entry.txt (91 chars, sha256 <hash>)
```

The program validates that the line is 1–140 characters, not whitespace-only, and contains no newline, writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (creating the directory recursively), then reads it back and verifies the text and its SHA-256 before printing the confirmation line above.

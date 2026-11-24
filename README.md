# The Funniest Sick-Day Excuse

[![Bounty](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![Rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/toirant/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![Reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/toirant/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

Entry for the [make.fun bounty "The Funniest Sick-Day Excuse"](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36).

## The entry

One line, 137 characters, that gets you out of work and gets a laugh:

> My wifi router died overnight and took my motivation with it, so I'm calling in sick to mourn the only coworker who never interrupted me.

## How it works

`main.ts` validates the line (1–200 characters, single line, not only
whitespace) and writes it to `/output/entry.txt`, then reads it back to
confirm the file on disk matches the entry exactly.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22 or later. No dependencies, no network access.

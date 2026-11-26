# Deadpan Forecasts for Cities That Do Not Exist

[![make.fun · u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/RianKuntul/deadpan-forecasts-line/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/RianKuntul/deadpan-forecasts-line/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

Entry for make.fun's **Deadpan Forecasts for Cities That Do Not Exist**
(`u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c`, $2 prize, winner takes all).

`main.ts` (Node 22, no dependencies) writes one original one-line weather
forecast for a city that does not exist to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(or `./output/entry.txt` when the variable is unset). The line is a fixed
string in the source: deterministic, no network, no randomness, no trailing
newline. It is 155 characters, under the 160-character limit.

Run it:

```sh
node main.ts
```

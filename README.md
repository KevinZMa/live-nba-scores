# Live NBA Scores

[**SwiftBar**](https://swiftbar.app) plugin displaying live NBA scores and stats from current games.

## Installation

### Clone Repository

```bash
$ git clone https://github.com/KevinZMa/live-nba-scores.git
```

### Link script to plugins folder:

```bash
$ ln -s /path/to/project/index.js /path/to/plugins/folder/live-nba-scores.1m.js
```

Example:

```bash
$ ln -s ~/Workspace/live-nba-scores/index.js ~/SwiftBar/live-nba-scores.1m.js
```

After refreshing (`⌘+r`), the app should show up in your menu bar.

> **Info:** Your default shell in the SwiftBar Preferences (`⌘+,`) should be set to `zsh`, or you will have to change the hashbang in [index.js](./index.js#L1) to your node executable. (e.g. `/opt/homebrew/bin/node`)

#!/usr/bin/env node

/*
<xbar.title>Live NBA Scores</xbar.title>
<xbar.version>v1.0.0</xbar.version>
<xbar.author>Kevin</xbar.author>
<xbar.author.github>KevinZMa</xbar.author.github>
<xbar.desc>Display live NBA scores and stats from current games in the menu bar.</xbar.desc>
<swiftbar.hideRunInTerminal>true</swiftbar.hideRunInTerminal>
<swiftbar.hideSwiftBar>true</swiftbar.hideSwiftBar>
*/

import xbar, { separator } from '@sindresorhus/xbar';
import { fetch, FetchResultTypes } from '@sapphire/fetch';

/**
 * A number or a string containing a number.
 * @typedef {`${number}` | number} NumberLike
 */

/**
 * Fetches the play-by-play list for a game.
 * @param {NumberLike} gameId
 * @returns {Promise<import('./api').PlayByPlayResponse>}
 */
function fetchPlayByPlay(gameId) {
    return fetch(
        `https://cdn.nba.com/static/json/liveData/playbyplay/playbyplay_${gameId}.json`,
        FetchResultTypes.JSON
    );
}

/**
 * Parses a game to a menu bar item.
 * @param {object} data
 * @returns {Promise<import('@sindresorhus/xbar').Options>} Resulting menu bar item.
 */
async function parseGame(data) {
    const { gameId, homeTeam, awayTeam, gameStatus, gameStatusText } = data;
    if (gameStatus === 1)
        return {
            text: `${homeTeam.teamTricode} vs. ${awayTeam.teamTricode} (${gameStatusText})`
        };

    const playByPlay = (await fetchPlayByPlay(gameId)).game.actions
        .reverse()
        .map(
            (pbp) =>
                `${pbp.description}|href=https://nba.com/game/${homeTeam.teamTricode}-vs-${awayTeam.teamTricode}-${gameId}/play-by-play`
        );

    // example: GSW 113-110 MIA (Q4 1:03)
    return {
        text: `${homeTeam.teamTricode} ${homeTeam.score}-${awayTeam.score} ${awayTeam.teamTricode} (${gameStatusText})`,
        submenu: playByPlay
    };
}

async function main() {
    const { scoreboard } = await fetch(
        'https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json',
        FetchResultTypes.JSON
    );

    let menuBar = [
        {
            text: ':basketball:',
            symbolize: true
        },
        separator
    ];

    for (const game of scoreboard.games) {
        menuBar.push(await parseGame(game));
    }

    return menuBar;
}

main().then(xbar);

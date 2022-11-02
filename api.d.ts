export interface PlayByPlayResponse {
    meta: Meta;
    game: Game;
}

export interface Game {
    gameId: string;
    actions: Action[];
}

export interface Action {
    actionNumber: number;
    clock: string;
    timeActual: Date;
    period: number;
    periodType: PeriodType;
    actionType: ActionType;
    subType?: string;
    qualifiers: Qualifier[];
    personId: number;
    x: number | null;
    y: number | null;
    possession: number;
    scoreHome: string;
    scoreAway: string;
    edited: Date;
    orderNumber: number;
    xLegacy: number | null;
    yLegacy: number | null;
    isFieldGoal: number;
    side: Side | null;
    description?: string;
    personIdsFilter: number[];
    teamId?: number;
    teamTricode?: string;
    descriptor?: string;
    jumpBallRecoveredName?: AssistPlayerNameInitial;
    jumpBallRecoverdPersonId?: number;
    playerName?: PlayerName;
    playerNameI?: AssistPlayerNameInitial;
    jumpBallWonPlayerName?: PlayerName;
    jumpBallWonPersonId?: number;
    jumpBallLostPlayerName?: PlayerName;
    jumpBallLostPersonId?: number;
    shotDistance?: number;
    shotResult?: ShotResult;
    pointsTotal?: number;
    shotActionNumber?: number;
    reboundTotal?: number;
    reboundDefensiveTotal?: number;
    reboundOffensiveTotal?: number;
    turnoverTotal?: number;
    stealPlayerName?: PlayerName;
    stealPersonId?: number;
    assistPlayerNameInitial?: AssistPlayerNameInitial;
    assistPersonId?: number;
    assistTotal?: number;
    officialId?: number;
    foulPersonalTotal?: number;
    foulTechnicalTotal?: number;
    foulDrawnPlayerName?: PlayerName;
    foulDrawnPersonId?: number;
    blockPlayerName?: PlayerName;
    blockPersonId?: number;
    value?: string;
}

export type PlayerName = string;
export type AssistPlayerNameInitial = string;

export enum ActionType {
    Block = 'block',
    Foul = 'foul',
    Freethrow = 'freethrow',
    Game = 'game',
    Instantreplay = 'instantreplay',
    Jumpball = 'jumpball',
    Period = 'period',
    Rebound = 'rebound',
    Steal = 'steal',
    Stoppage = 'stoppage',
    Substitution = 'substitution',
    The2Pt = '2pt',
    The3Pt = '3pt',
    Timeout = 'timeout',
    Turnover = 'turnover',
    Violation = 'violation'
}

export enum PeriodType {
    Overtime = 'OVERTIME',
    Regular = 'REGULAR'
}

export enum Qualifier {
    DeadBall = 'deadball',
    DefensiveGoaltending = 'defensivegoaltending',
    FastBreak = 'fastbreak',
    FromTurnover = 'fromturnover',
    InPenalty = 'inpenalty',
    Mandatory = 'mandatory',
    PointsInThePaint = 'pointsinthepaint',
    StartPeriod = 'startperiod',
    Team = 'team',
    OneFreeThrow = '1freethrow',
    TwoFreeThrow = '2freethrow',
    SecondChance = '2ndchance',
    ThreeFreeThrow = '3freethrow'
}

export enum ShotResult {
    Made = 'Made',
    Missed = 'Missed'
}

export enum Side {
    Left = 'left',
    Right = 'right'
}

export interface Meta {
    version: number;
    code: number;
    request: string;
    time: Date;
}

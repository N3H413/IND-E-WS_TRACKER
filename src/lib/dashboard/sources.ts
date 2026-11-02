export interface Source {
  era: string;
  sheetId: string;
  tabPattern: RegExp; // which tabs hold run data
  defaultWs?: string; // used when a tab name has no WS number
}

const WS_TAB = /^WS\s*\d+[AB]?$/i;
const WS_OR_REWORK_TAB = /^(WS\s*\d+[AB]?|Rework)$/i;

export const SOURCES: Source[] = [
  {
    era: "Original",
    sheetId: "12nPsrKLk_fsLSsSVpSz1JFF5J4manQxp5hZsDbyqgVI",
    tabPattern: WS_OR_REWORK_TAB, // WS1-WS15 and Rework
  },
  {
    era: "Pre-midsem",
    sheetId: "1kdhMPlPXsXe0mj0Mw1jPH6p0_Qj0A0PHlKKddsxkWqc",
    tabPattern: WS_TAB, // only WS tabs; other tabs are ignored
  },
  {
    era: "Current",
    sheetId: process.env.GOOGLE_SHEET_ID ?? "1RqO40WOyai3x7jhMnX6JANrPJDD7PipCvbqq2jt0U-0",
    tabPattern: WS_TAB,
  },
];
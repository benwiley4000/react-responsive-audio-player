/* eslint-disable no-console */

const log = console.log.bind(console);

export const logError = console.error ? console.error.bind(console) : log;
export const logWarning = console.warn ? console.warn.bind(console) : log;



type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface Logger {
  debug: (...args: any[]) => void;
  info: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
}

const isDevelopment = __DEV__;


const createLogger = (): Logger => {
  const shouldLog = (level: LogLevel): boolean => {
    if (isDevelopment) {
      return true; // Log everything in development
    }
    // In production, only log errors and warnings
    return level === 'error' || level === 'warn';
  };

  return {
    debug: (...args: any[]) => {
      if (shouldLog('debug')) {
        console.log('[DEBUG]', ...args);
      }
    },
    info: (...args: any[]) => {
      if (shouldLog('info')) {
        console.log('[INFO]', ...args);
      }
    },
    warn: (...args: any[]) => {
      if (shouldLog('warn')) {
        console.warn('[WARN]', ...args);
      }
    },
    error: (...args: any[]) => {
      if (shouldLog('error')) {
        console.error('[ERROR]', ...args);
      }
    },
  };
};

const logger = createLogger();

export default logger;


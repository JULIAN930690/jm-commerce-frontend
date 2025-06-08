export default function ignoreAutolinkerSourcemapWarnings() {
  return {
    name: 'ignore-autolinker-sourcemap-warnings',
    apply: 'serve',
    configureServer(server) {
      const originalWarn = server.config.logger.warn;
      const originalError = server.config.logger.error;

      server.config.logger.warn = (...args) => {
        if (
          typeof args[0] === 'string' &&
          args[0].includes('Sourcemap for') &&
          args[0].includes('autolinker')
        ) {
          return; // Ignorar warnings de sourcemaps de autolinker
        }
        originalWarn(...args);
      };

      server.config.logger.error = (...args) => {
        if (
          typeof args[0] === 'string' &&
          args[0].includes('Sourcemap for') &&
          args[0].includes('autolinker')
        ) {
          return; // Ignorar errores de sourcemaps de autolinker
        }
        originalError(...args);
      };
    },
  };
}


require('ts-node').register({
    project:'./tsconfig.electron.json'
});
require('./src/main/main.ts')
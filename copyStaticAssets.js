const shell = require('shelljs');

// Copy .env file
shell.cp('-R', '.env', 'build/');
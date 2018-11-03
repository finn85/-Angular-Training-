const fse = require('fs-extra');
fse.copySync('server/data', 'build/data');
fse.copySync('server/assets', 'build/assets');

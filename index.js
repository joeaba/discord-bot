const fs = require('fs')

const importAllFiles = (dir, dirName) => {
    fs.readdir(dir, (err, files) => {
      if (err) { console.log(err); return; }
      files.forEach((file) => {
        if (file.endsWith('.js')) {
          require(`${dir}${file}`);
        }
      });
    });
  };

  importAllFiles('./selfbots/', 'selfbots');
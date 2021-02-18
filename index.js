const childProcess = require('child_process');

function run(cmd, label) {
    console.time(label);
    const process = childProcess.exec(cmd, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }
        console.log('Child Process STDOUT: ' + stdout);
        console.log('Child Process STDERR: ' + stderr);
    });

    process.on('exit', function (code) {
        console.timeEnd(label);
    });
}

[['node winston', 'winston'], ['node pino', 'pino']].forEach(([cmd, label]) => run(cmd, label));

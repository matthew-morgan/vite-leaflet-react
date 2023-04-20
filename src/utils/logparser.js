"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function transformLogLines(logLines, id, date) {
    var points = [];
    for (var _i = 0, logLines_1 = logLines; _i < logLines_1.length; _i++) {
        var logLine = logLines_1[_i];
        var latLon = [logLine.latitude, logLine.longitude];
        points.push(latLon);
    }
    var time = logLines[0].hours.toString().padStart(2, '0') + ':' + logLines[0].minutes.toString().padStart(2, '0');
    return {
        id: id,
        date: date,
        points: points,
        time: time,
    };
}
// Example usage
var logLines = [
// ... your LogLine objects
];
function parseLogLine(logLineStr) {
    var parts = logLineStr.split(',');
    var timeParts = parts[0].split(':');
    var logLine = {
        hours: parseInt(timeParts[0], 10),
        minutes: parseInt(timeParts[1], 10),
        seconds: parseInt(timeParts[2], 10),
        timestamp: parseFloat(parts[1]),
        latitude: parseFloat(parts[2]),
        longitude: parseFloat(parts[3]),
        altitude: parseFloat(parts[4]),
        encoderDistance: parseInt(parts[5], 10),
        accelX: parseFloat(parts[6]),
        accelY: parseFloat(parts[7]),
        accelZ: parseFloat(parts[8]),
        gyroX: parseFloat(parts[9]),
        gyroY: parseFloat(parts[10]),
        gyroZ: parseFloat(parts[11]),
    };
    return logLine;
}
function loadLogLinesFromFile(filePath) {
    var logLines = [];
    var fileContent = fs.readFileSync(filePath, 'utf8');
    var lines = fileContent.split('\n');
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        if (line.trim() === '') {
            continue;
        }
        var logLine = parseLogLine(line);
        logLines.push(logLine);
    }
    return logLines;
}
// Example usage
var logFilePath = 'log.txt';
var logLinesArray = loadLogLinesFromFile(logFilePath);
//console.log(logLinesArray);
var id = 3;
var date = '2021-01-03';
var transformedLogLines = transformLogLines(logLines, id, date);
console.log(transformedLogLines);

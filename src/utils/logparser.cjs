"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLogLine = void 0;
function parseLogLine(logLineStr) {
    var parts = logLineStr.split(',');
    var logLine = {
        timestamp: parseFloat(parts[0]),
        latitude: parseFloat(parts[1]),
        longitude: parseFloat(parts[2]),
        altitude: parseFloat(parts[3]),
        encoderDistance: parseInt(parts[4], 10),
        accelX: parseFloat(parts[5]),
        accelY: parseFloat(parts[6]),
        accelZ: parseFloat(parts[7]),
        gyroX: parseFloat(parts[8]),
        gyroY: parseFloat(parts[9]),
        gyroZ: parseFloat(parts[10]),
    };
    return logLine;
}
exports.parseLogLine = parseLogLine;
// Example usage
var exampleLogLine = "162345,37.421998,-122.084097,10.0,25,0.01,0.02,-0.03,1.2,2.3,-0.5";
var parsedLogLine = parseLogLine(exampleLogLine);
console.log(parsedLogLine);

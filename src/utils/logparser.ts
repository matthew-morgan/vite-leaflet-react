interface LogLine {
    hours: number;
    minutes: number;
    seconds: number;
    timestamp: number;
    latitude: number;
    longitude: number;
    altitude: number;
    encoderDistance: number;
    accelX: number;
    accelY: number;
    accelZ: number;
    gyroX: number;
    gyroY: number;
    gyroZ: number;
}

function parseLogLine(logLineStr: string): LogLine {
    const parts = logLineStr.split(',');

    const timeParts = parts[0].split(':');

    const logLine: LogLine = {
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

export { parseLogLine };

// Example usage
const exampleLogLine = "12:34:56,162345,37.421998,-122.084097,10.0,25,0.01,0.02,-0.03,1.2,2.3,-0.5";
const parsedLogLine = parseLogLine(exampleLogLine);
console.log(parsedLogLine);

import * as fs from 'fs';

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

interface TransformedLogLine {
    id: number;
    date: string;
    points: [number, number][];
    time: string;
}

function nmeaToDegrees(nmea: number): number {
    const degrees = Math.floor(nmea / 100);
    const minutes = nmea - (degrees * 100);
    return degrees + minutes / 60;
}

function transformLogLines(logLines: LogLine[], id: number, date: string): TransformedLogLine {
    const points: [number, number][] = [];

    for (const logLine of logLines) {
        const latLon: [number, number] = [
            nmeaToDegrees(logLine.latitude),
            nmeaToDegrees(logLine.longitude)
        ];
        points.push(latLon);
    }


    const time = logLines[0].hours.toString().padStart(2, '0') + ':' + logLines[0].minutes.toString().padStart(2, '0');

    return {
        id,
        date,
        points,
        time,
    };
}

// Example usage
const logLines: LogLine[] = [
    // ... your LogLine objects
];

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

function loadLogLinesFromFile(filePath: string): LogLine[] {
    const logLines: LogLine[] = [];
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');

    for (const line of lines) {
        if (line.trim() === '') {
            continue;
        }

        const logLine = parseLogLine(line);
        logLines.push(logLine);
    }

    return logLines;
}

// Example usage
const logFilePath = 'log.txt';
const logLinesArray = loadLogLinesFromFile(logFilePath);
//console.log(logLinesArray);
const id = 3;
const date = '2021-01-03';
const transformedLogLines = transformLogLines(logLines, id, date);
console.log(transformedLogLines);
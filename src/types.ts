// What's a path?
// A path is an array of points. Each point is an array of two numbers.
// The first number is the latitude, the second number is the longitude.
// The first point is the starting point, the last point is the ending point.
// The points in between are the waypoints.
// A path also has an ID.
// A path also has a date and a time when the path was created.
// A path also has an optional name.
// A path also has an optional description.
// A path also has an optional image.
// A path also has an optional video.

export interface GeoPath {
    id: number;
    date: string;
    time: string;
    name?: string;
    description?: string;
    image?: string;
    video?: string;
    points: Array<[number, number]>; // Array of [latitude, longitude] tuples
}
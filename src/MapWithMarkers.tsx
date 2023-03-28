import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, ScaleControl } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelectedPath } from './SelectedPathContext';
import { GeoPath } from './types';

interface MapBoxWithMarkersProps {
    paths: GeoPath[];
}

const MapBoxWithMarkers: React.FC<MapBoxWithMarkersProps> = ({ paths }) => {
    const firstPath = paths.length > 0 ? paths[0] : null;
    const firstPoint: [number, number] = firstPath && firstPath.points.length > 0 ? firstPath.points[0] : [51.505, -0.09];
    const [mapCenter, setMapCenter] = useState<[number, number]>(firstPoint);
    const [zoom, setZoom] = useState<number>(13);
    const { selectedPath } = useSelectedPath();
    const pathPoints = selectedPath ? selectedPath.points : [];
    //Fly to first point on the selected GeoPath with usemap
    const CenterMap = () => {
        const map = useMap();

        useEffect(() => {
            if (pathPoints.length > 0) {
                const firstPoint = pathPoints[0];
                map.flyTo([firstPoint[0], firstPoint[1]]);
            }
        }, [selectedPath]);

        return null;
    };


    useEffect(() => {
        if (pathPoints.length > 0) {
            const firstPoint = pathPoints[0];
            setMapCenter([firstPoint[0], firstPoint[1]]);
        }
    }, [selectedPath]);

    return (
        <MapContainer center={mapCenter} zoom={zoom} style={{ height: '50vh', width: '50vw' }}>
            <ScaleControl position="bottomleft" />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />
            <CenterMap />
            {pathPoints.map((point: LatLngTuple, index) => (
                <Marker key={index} position={point}>
                    <Popup>
                        Point {index + 1}: {point[0]}, {point[1]}
                    </Popup>
                </Marker>
            ))}
            <Polyline positions={pathPoints} />
        </MapContainer>
    );
};

export default MapBoxWithMarkers;

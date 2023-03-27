import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapBoxProps {
    selectedPath: LatLngTuple[];
}

const MapBoxWithMarkers: React.FC<MapBoxProps> = ({ selectedPath }) => {
    const [mapCenter, setMapCenter] = useState<[number, number]>([51.505, -0.09]);
    const [zoom, setZoom] = useState<number>(13);

    useEffect(() => {
        if (selectedPath.length > 0) {
            const firstPoint = selectedPath[0];
            setMapCenter([firstPoint[0], firstPoint[1]]);
        }
    }, [selectedPath]);

    return (
        <MapContainer center={mapCenter} zoom={zoom} style = {{height: '100vh', width: '100vw'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {selectedPath.map((point: LatLngTuple, index) => (
                <Marker key={index} position={point}>
                    <Popup>
                        Point {index + 1}: {point[0]}, {point[1]}
                    </Popup>
                </Marker>
            ))}
            <Polyline positions={selectedPath} />
        </MapContainer>
    );
};

export default MapBoxWithMarkers;

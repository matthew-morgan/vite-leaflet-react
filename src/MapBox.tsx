import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import tileLayer from './tileLayer';
import { LatLngExpression } from 'leaflet';

const center: LatLngExpression = [25.033, 121.5654];

const MapBox: React.FC<{}> = () => {

  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false} style = {{height: '100vh', width: '100vw'}}>
      <TileLayer {...tileLayer} />
    </MapContainer>
  )
}

export default MapBox;

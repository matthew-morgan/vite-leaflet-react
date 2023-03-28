// PathsList.tsx
import React from 'react';
import { useSelectedPath } from './SelectedPathContext';
import { GeoPath } from './types';
import './PathsList.css'; // Import CSS for styling

interface PathsListProps {
    paths: GeoPath[];
}

const PathsList: React.FC<PathsListProps> = ({ paths }) => {
    const { selectedPath, setSelectedPath } = useSelectedPath();

    return (
        <ul>
            {paths.map((path) => (
                <li
                    key={path.id}
                    onClick={() => setSelectedPath(path)}
                    className={selectedPath && path.id === selectedPath.id ? 'selected' : ''}
                >
                    {path.id}: {path.date}
                </li>
            ))}
        </ul>
    );
};

export default PathsList;

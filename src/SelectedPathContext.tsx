import React, { createContext, useContext, useState } from 'react';
import { GeoPath } from './types';

interface SelectedPathContextType {
    selectedPath: GeoPath | null;
    setSelectedPath: (path: GeoPath) => void;
}

const SelectedPathContext = createContext<SelectedPathContextType>({
    selectedPath: null,
    setSelectedPath: () => {},
});

export const useSelectedPath = () => useContext(SelectedPathContext);

interface SelectedPathProviderProps {
    children: React.ReactNode;
}

export const SelectedPathProvider: React.FC<SelectedPathProviderProps> = ({ children }) => {
    const [selectedPath, setSelectedPath] = useState<GeoPath | null>(null);

    return (
        <SelectedPathContext.Provider value={{ selectedPath, setSelectedPath }}>
            {children}
        </SelectedPathContext.Provider>
    );
};

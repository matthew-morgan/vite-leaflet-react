import {useState} from 'react'
import './App.css'
import MapBoxWithMarkers from "./MapWithMarkers";
import {SelectedPathProvider} from "./SelectedPathContext";
import PathsList from "./PathsList";
import {GeoPath} from "./types";

function App() {

    const [count, setCount] = useState(0);
    const paths: GeoPath[] = [
        {
            id: 1,
            date: '2021-01-01',
            points: [
                [51.505, -0.09],
                [51.51, -0.1],
                [51.51, -0.12],
            ],
            time: '1000'
        },
        {
            id: 2,
            date: '2021-01-02',
            points: [
                [51.505, -0.09],
                [51.51, -0.1],
                [54.51, -0.12],
            ],
            time: '1000'
        }

    ]

    return (
        <div className="App">
            <SelectedPathProvider>
                <div>
                    <MapBoxWithMarkers paths={paths} />
                    <PathsList paths={paths} />
                </div>
            </SelectedPathProvider>
        </div>
    )
}

export default App

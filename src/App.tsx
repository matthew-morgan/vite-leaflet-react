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
        },
        {
            id: 3,
            date: '2021-01-03',
            points: [[51.6195, -3.9405],
                [51.6194, -3.9394],
                [51.6192, -3.9381],
                [51.6191, -3.9369],
                [51.6189, -3.9359],
                [51.6188, -3.9350],
                [51.6187, -3.9340],
                [51.6185, -3.9329],
                [51.6183, -3.9317],
                [51.6181, -3.9305],
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

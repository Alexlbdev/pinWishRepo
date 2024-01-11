import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";


function App() {

    useEffect(() => {
        // TEST API, it might be removed
        fetch('http://localhost:8080/live').then(res => res.json()).then(res => {
            console.log('API CONNECTION IS OK');
        }).catch((e) => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'))
    }, []);

    return (
        <>
            <div className="App">
                <Header/>
                <Body/>
            </div>
        </>
    );
}

export default App;

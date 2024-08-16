import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
    const id = "C0324H1"

    const students = [
        {
            id: 1,
            name: "HaiTT",
            address: "Quảng Nam",
            point: 9
        },
        {
            id: 2,
            name: "HaiTT",
            address: "Quảng Nam",
            point: 9
        },
        {
            id: 3,
            name: "HaiTT",
            address: "Quảng Nam",
            point: 9
        }
    ]

    const helloWorld = (name) => {
        alert(`Hello ${name}!`)
    }

    return (
        <>
            <h1 id={id} className="c0324h1" onClick={() => helloWorld('HaiTT')}>Hello</h1>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Point</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.point}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    );
}

export default App;

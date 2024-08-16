import logo from './logo.svg';
import './App.css';

function App() {
    const id = "C0324H1"

    const students = [
        {
            id: 1,
            name: "HaiTT",
            address: "Quảng Nam",
            point: 3
        },
        {
            id: 2,
            name: "HaiTT",
            address: "Quảng Nam",
            point: 6
        },
        {
            id: 3,
            name: "HaiTT",
            address: "Quảng Nam",
            point: 9
        },
        {
            id: 4,
            name: "HaiTT",
            address: "Quảng Nam",
            point: 2
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
                    <th>Tên</th>
                    <th>Địa chỉ</th>
                    <th>Điểm</th>
                    <th>Học lực</th>
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
                            <td>{
                                item.point >= 8 ? 'Giỏi' : item.point >= 6.5 ? 'Khá' : item.point >= 5.0 ? 'Trung bình' : item.point >= 3.5 ? 'Yếu' : 'Kém'
                            }</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    );
}

export default App;

import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";

function StudentListFunc() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
    //     Call API search name
        const list = [
            {
                id: 1,
                name: "HaiTT1",
                address: "Quảng Nam",
                point: 9
            },
            {
                id: 2,
                name: "HaiTT2",
                address: "Quảng Nam",
                point: 9
            },
            {
                id: 3,
                name: "HaiTT3",
                address: "Quảng Nam",
                point: 9
            }
        ]
        const temp = list.filter(temp => temp.name.includes(name))
        setStudents(temp)
    }, [name])

    useEffect(() => {
        return () => {
            //clean up <=> componentWillUnmount
        }
    }, [])

    return (
        <>

            <Link to="/create">Thêm mới</Link>

            <input value={name} onChange={(e) => setName(e.target.value)}/>
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
    )
}

export default StudentListFunc;
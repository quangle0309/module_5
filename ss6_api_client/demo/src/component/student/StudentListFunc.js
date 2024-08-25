import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import * as studentService from "../../service/StudentService"

function StudentListFunc() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");

    useEffect (() => {
    //     Call API search name
       getAllStudents(name)
    }, [name])

    useEffect(() => {
        return () => {
            //clean up <=> componentWillUnmount
        }
    }, [])

    const getAllStudents = async (name) => {
        let res = await studentService.getAllStudents(name);
        setStudents(res)
    }

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
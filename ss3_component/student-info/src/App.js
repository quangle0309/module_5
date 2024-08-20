import logo from './logo.svg';
import './App.css';
import students from "./component/studentList";

function App() {
    return (
        <>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {students.map(student => (
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default App;

import './App.css';
import React from "react"
import StudentListFunc from "./component/student/StudentListFunc";
import StudentCreate from "./component/student/StudentCreate";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";


function App() {
    return (
        <>
            <BrowserRouter>
                <div>
                    <NavLink to="/student">Danh sách</NavLink>
                    <NavLink to="/create">Thêm mới</NavLink>
                </div>
                <Routes>
                    <Route path="/create" element={<StudentCreate />} />
                    <Route path="/student" element={<StudentListFunc/>} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;

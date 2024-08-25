import axios from "axios";

const URL_STUDENT = "http://localhost:8080/students"

export const getAllStudents = async (name) => {
    try {
        let res = await axios.get(URL_STUDENT+"?name_like="+name);
        return res.data;
    } catch (e) {
        return []
    }
}

export const saveStudent = async (student) => {
    try {
        await  axios.post(URL_STUDENT, student)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}
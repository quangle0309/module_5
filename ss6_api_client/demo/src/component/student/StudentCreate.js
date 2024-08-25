import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as studentService from "../../service/StudentService"

function StudentCreate() {
    const [form, setForm] = useState({
        name: "",
        address: "",
        point: 0
    });
    const navigate = useNavigate();

    const objectValid = {
        name: Yup.string().required("Tên không được để trống")
            .min(3, "Tên không được ngắn hơn 3 ký tự")

    }

    const saveStudent = async (value) => {
        // Check validate
        // useRef
        // console.log(value)
        value.point = +value.point
        let isSuccess = await studentService.saveStudent(value)
        if(isSuccess) {
            toast.success("Thêm mới thành công")
            navigate("/student")
        } else {
            toast.error("Thêm mới thất bại.")
        }

    }

    return (
        <>
            <Formik initialValues={form} onSubmit={saveStudent} validationSchema={Yup.object(objectValid)}>
                <Form>
                    Name: <Field name="name"/>
                    <ErrorMessage name="name" component="p"></ErrorMessage>
                    Address: <Field name="address"/>
                    Point: <Field name="point"/>
                    <button type="submit">Thêm mới</button>
                </Form>
            </Formik>
            {/*<form>*/}
            {/*    ID: <input onChange={(e) => setForm({...form, id: e.target.value})}/>*/}
            {/*    Name: <input onChange={(e) => setForm({...form, name: e.target.value})}/>*/}
            {/*    Address: <input onChange={(e) => setForm({...form, address: e.target.value})}/>*/}
            {/*    Point: <input type="number" onChange={(e) => setForm({...form, point: e.target.value})}/>*/}
            {/*    <button onClick={saveStudent}>Thêm mới</button>*/}
            {/*</form>*/}
        </>
    )
}

export default StudentCreate;
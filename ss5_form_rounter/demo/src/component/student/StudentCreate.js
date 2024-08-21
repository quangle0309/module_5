import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function StudentCreate() {
    const [form, setForm] = useState({
        id: "",
        name: "",
        address: "",
        point: 0
    });
    const navigate = useNavigate();

    const objectValid = {
        id: Yup.number().required("Id không được để trống")
            .min(0, "id không được nhỏ hơn 0")
            .max(1000000000000, "Id không được lớn hơn 1000000000000"),
        name: Yup.string().required("Tên không được để trống")
            .min(3, "Tên không được ngắn hơn 3 ký tự")

    }

    const saveStudent = (value) => {
        // Check validate
        // useRef
        console.log(value)
        toast.success("Thêm mới thành công")
        navigate("/student")
    }

    return (
        <>
            <Formik initialValues={form} onSubmit={saveStudent} validationSchema={Yup.object(objectValid)}>
                <Form>
                    Id: <Field name="id"/>
                    <ErrorMessage name="id" component="p"></ErrorMessage>
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
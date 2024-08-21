import {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";

function FormContact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const contactValid = {
        name: Yup.string()
            .required("Tên không được bỏ trống!")
            .min(3, "Tên phải có ít nhất 3 ký tự!")
            .max(255, "Tên không được dài quá 255 ký tự!"),
        email: Yup.string()
            .required("Email không được bỏ trống")
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Định dạng email không hợp lệ!"
            ),
        phone: Yup.string()
            .required("Số điện thoại không được để trống!")
            .matches(/^(0|\+84)[0-9]{9}$/, "Số điện thoại không hợp lệ!"),
    };

    const formik = useFormik({
        initialValues: form,
        validationSchema: Yup.object(contactValid),
        onSubmit: (values) => {
            console.log(values);
            toast.success("Thêm mới thành công!");
        },
    });

    return (
        <div className="container">
            <div className="w-50 mx-auto p-5 shadow rounded-3 mt-5">
                <h1 className="text-center">Form Contact</h1>
                <form
                    onSubmit={formik.handleSubmit}
                    className="needs-validation"
                    noValidate
                >
                    <label htmlFor="name">Name: </label>
                    <input
                        className={`form-control mb-3 ${
                            formik.touched.name && formik.errors.name ? "is-invalid" :  formik.touched.name ? "is-valid" : ""
                        }`}
                        name="name"
                        id="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <p className="invalid-feedback">{formik.errors.name}</p>
                    ) : null}

                    <label htmlFor="email">Email: </label>
                    <input
                        className={`form-control mb-3 ${
                            formik.touched.email && formik.errors.email ? "is-invalid" :  formik.touched.email ? "is-valid" : ""
                        }`}
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className="invalid-feedback">{formik.errors.email}</p>
                    ) : null}

                    <label htmlFor="phone">Phone: </label>
                    <input
                        className={`form-control mb-3 ${
                            formik.touched.phone && formik.errors.phone ? "is-invalid" : formik.touched.phone ? "is-valid" : ""
                        }`}
                        name="phone"
                        id="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <p className="invalid-feedback">{formik.errors.phone}</p>
                    ) : null}

                    <label htmlFor="message">Message: </label>
                    <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    ></textarea>
                    <button className="btn btn-primary mt-3" type="submit">
                        Thêm
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormContact;

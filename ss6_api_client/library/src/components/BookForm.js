import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import {useNavigate, useParams} from 'react-router-dom';
import * as bookService from "../services/BookService";

const BookForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [initialValues, setInitialValues] = useState({
        title: '',
        quantity: '',
        publicationDate: ''
    });
    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        const fetchBook = async () => {
            if (id) {
                try {
                    const book = await bookService.getBookById(id);
                    if (book) {
                        setInitialValues(book);
                    } else {
                        toast.error("Không tìm thấy sách!");
                        navigate('/');
                    }
                } catch (error) {
                    toast.error("Lỗi khi lấy thông tin sách!");
                    navigate('/');
                }
            }
        };

        fetchBook();
    }, [id, navigate]);

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema: Yup.object({
            title: Yup.string().required('Tên sách không được bỏ trống!'),
            quantity: Yup.number().positive('Số lượng phải lớn hơn 0!').required('Số lượng không được bỏ trống!'),
            publicationDate: Yup.date().max(today, 'Ngày xuất bản không được lớn hơn ngày hiện tại!').required('Ngày xuất bản không được bỏ trống!')
        }),
        onSubmit: values => {
            const request = id
                ? bookService.updateBooks(values, id)
                : bookService.saveBooks(values)

            request
                .then(() => {
                    toast.success(id ? 'Cập nhật sách thành công!' : 'Thêm sách thành công!', {
                        theme: "colored"
                    });
                    navigate('/');
                })
                .catch(error => console.error(error));
        }
    });

    return (
        <div className="container">
            <div className="w-50 mx-auto mt-5">
                <h1 className="text-center mb-4">{id ? 'Chỉnh sửa Sách' : 'Thêm mới Sách'}</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Tên sách</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            className={`form-control ${formik.touched.title && formik.errors.title ? 'is-invalid' : ''}`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div className="invalid-feedback">{formik.errors.title}</div>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Số lượng</label>
                        <input
                            id="quantity"
                            name="quantity"
                            type="number"
                            className={`form-control ${formik.touched.quantity && formik.errors.quantity ? 'is-invalid' : ''}`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.quantity}
                        />
                        {formik.touched.quantity && formik.errors.quantity ? (
                            <div className="invalid-feedback">{formik.errors.quantity}</div>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="publicationDate" className="form-label">Ngày xuất bản</label>
                        <input type="date"
                               id="publicationDate"
                               name="publicationDate"
                               onChange={formik.handleChange}
                               className={`form-control ${formik.touched.publicationDate && formik.errors.publicationDate ? 'is-invalid' : ''}`}
                               onBlur={formik.handleChange}
                               value={formik.values.publicationDate}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">{id ? 'Lưu' : 'Thêm'}</button>
                </form>
            </div>
        </div>
    );
};

export default BookForm;

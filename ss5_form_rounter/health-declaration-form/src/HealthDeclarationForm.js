import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const HealthDeclarationForm = () => {
    // State quản lý giới tính, triệu chứng và tiếp xúc với COVID-19
    const [gioiTinh, setGioiTinh] = useState('');
    const [trieuChung, setTrieuChung] = useState([]);
    const [tiepXucCovid, setTiepXucCovid] = useState([]);

    const formik = useFormik({
        initialValues: {
            hoTen: '',
            soCMND: '',
            namSinh: '',
            quocTich: '',
            congTy: '',
            boPhan: '',
            coBaoHiem: false,
            tinhThanh: '',
            quanHuyen: '',
            phuongXa: '',
            soNha: '',
            dienThoai: '',
            email: '',
            quocGiaDaDen: '',
        },
        validationSchema: Yup.object({
            hoTen: Yup.string().required('Required'),
            soCMND: Yup.string().required('Required'),
            namSinh: Yup.number().min(1900, 'Invalid year').required('Required'),
            quocTich: Yup.string().required('Required'),
            tinhThanh: Yup.string().required('Required'),
            quanHuyen: Yup.string().required('Required'),
            phuongXa: Yup.string().required('Required'),
            soNha: Yup.string().required('Required'),
            dienThoai: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: (values) => {
            values.gioiTinh = gioiTinh;
            values.trieuChung = trieuChung;
            values.tiepXucCovid = tiepXucCovid;
            console.log(values);
        },
    });

    const handleGioiTinhChange = (e) => {
        setGioiTinh(e.target.value);
    };

    const handleTrieuChungChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setTrieuChung([...trieuChung, value]);
        } else {
            setTrieuChung(trieuChung.filter((item) => item !== value));
        }
    };

    const handleTiepXucCovidChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setTiepXucCovid([...tiepXucCovid, value]);
        } else {
            setTiepXucCovid(tiepXucCovid.filter((item) => item !== value));
        }
    };

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit} className="p-4">
                <h2>Tờ khai y tế</h2>

                {/* Thông tin cá nhân */}
                <div className="mb-3">
                    <label htmlFor="hoTen" className="form-label">Họ tên</label>
                    <input
                        id="hoTen"
                        name="hoTen"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.hoTen}
                    />
                    {formik.errors.hoTen && formik.touched.hoTen ? <div className="text-danger">{formik.errors.hoTen}</div> : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="soCMND" className="form-label">Số hộ chiếu/CMND</label>
                    <input
                        id="soCMND"
                        name="soCMND"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.soCMND}
                    />
                    {formik.errors.soCMND && formik.touched.soCMND ? <div className="text-danger">{formik.errors.soCMND}</div> : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="namSinh" className="form-label">Năm sinh</label>
                    <input
                        id="namSinh"
                        name="namSinh"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.namSinh}
                    />
                    {formik.errors.namSinh && formik.touched.namSinh ? <div className="text-danger">{formik.errors.namSinh}</div> : null}
                </div>

                <div className="mb-3">
                    <label className="form-label">Giới tính</label>
                    <div>
                        <input
                            type="radio"
                            id="nam"
                            name="gioiTinh"
                            value="Nam"
                            onChange={handleGioiTinhChange}
                            checked={gioiTinh === 'Nam'}
                        />
                        <label htmlFor="nam" className="form-check-label me-5 ms-1">Nam</label>

                        <input
                            type="radio"
                            id="nu"
                            name="gioiTinh"
                            value="Nữ"
                            onChange={handleGioiTinhChange}
                            checked={gioiTinh === 'Nữ'}
                        />
                        <label htmlFor="nu" className="form-check-label ms-1">Nữ</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="quocTich" className="form-label">Quốc tịch</label>
                    <input
                        id="quocTich"
                        name="quocTich"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.quocTich}
                    />
                    {formik.errors.quocTich && formik.touched.quocTich ? <div className="text-danger">{formik.errors.quocTich}</div> : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="congTy" className="form-label">Công ty làm việc</label>
                    <input
                        id="congTy"
                        name="congTy"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.congTy}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="boPhan" className="form-label">Bộ phận làm việc</label>
                    <input
                        id="boPhan"
                        name="boPhan"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.boPhan}
                    />
                </div>

                <div className="mb-3 form-check">
                    <input
                        id="coBaoHiem"
                        name="coBaoHiem"
                        type="checkbox"
                        className="form-check-input"
                        onChange={formik.handleChange}
                        checked={formik.values.coBaoHiem}
                    />
                    <label htmlFor="coBaoHiem" className="form-check-label">Có thẻ bảo hiểm y tế</label>
                </div>

                {/* Địa chỉ liên lạc tại Việt Nam */}
                <div className="mb-3">
                    <label htmlFor="tinhThanh" className="form-label">Tỉnh thành</label>
                    <input
                        id="tinhThanh"
                        name="tinhThanh"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.tinhThanh}
                    />
                    {formik.errors.tinhThanh && formik.touched.tinhThanh ? <div className="text-danger">{formik.errors.tinhThanh}</div> : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="quanHuyen" className="form-label">Quận/Huyện</label>
                    <input
                        id="quanHuyen"
                        name="quanHuyen"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.quanHuyen}
                    />
                    {formik.errors.quanHuyen && formik.touched.quanHuyen ? <div className="text-danger">{formik.errors.quanHuyen}</div> : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="phuongXa" className="form-label">Phường/Xã</label>
                    <input
                        id="phuongXa"
                        name="phuongXa"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.phuongXa}
                    />
                    {formik.errors.phuongXa && formik.touched.phuongXa ? <div className="text-danger">{formik.errors.phuongXa}</div> : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="soNha" className="form-label">Số nhà, phố, tổ dân phố/thôn/đội</label>
                    <input
                        id="soNha"
                        name="soNha"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.soNha}
                    />
                    {formik.errors.soNha && formik.touched.soNha ? <div className="text-danger">{formik.errors.soNha}</div> : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="dienThoai" className="form-label">Điện thoại</label>
                    <input
                        id="dienThoai"
                        name="dienThoai"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.dienThoai}
                    />
                    {formik.errors.dienThoai && formik.touched.dienThoai ? <div className="text-danger">{formik.errors.dienThoai}</div> : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                </div>

                <div className="mb-3">
                    <label className="form-label">Trong 14 ngày qua, Anh/Chị có xuất hiện triệu chứng nào sau đây
                        không?</label>
                    <div>
                        <input
                            type="checkbox"
                            id="ho"
                            value="Ho"
                            onChange={handleTrieuChungChange}
                        />
                        <label htmlFor="ho" className="form-check-label me-5 ms-1">Ho</label>

                        <input
                            type="checkbox"
                            id="sot"
                            value="Sốt"
                            onChange={handleTrieuChungChange}
                        />
                        <label htmlFor="sot" className="form-check-label me-5 ms-1">Sốt</label>

                        <input
                            type="checkbox"
                            id="khoTho"
                            value="Khó thở"
                            onChange={handleTrieuChungChange}
                        />
                        <label htmlFor="khoTho" className="form-check-label me-5 ms-1">Khó thở</label>

                        <input
                            type="checkbox"
                            id="viemPhoi"
                            value="Viêm phổi"
                            onChange={handleTrieuChungChange}
                        />
                        <label htmlFor="viemPhoi" className="form-check-label me-5 ms-1">Viêm phổi</label>

                        <input
                            type="checkbox"
                            id="dauHong"
                            value="Đau họng"
                            onChange={handleTrieuChungChange}
                        />
                        <label htmlFor="dauHong" className="form-check-label me-5 ms-1">Đau họng</label>

                        <input
                            type="checkbox"
                            id="metMoi"
                            value="Mệt mỏi"
                            onChange={handleTrieuChungChange}
                        />
                        <label htmlFor="metMoi" className="form-check-label ms-1">Mệt mỏi</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Trong 14 ngày qua, Anh/Chị có tiếp xúc với?</label>
                    <div>
                        <input
                            type="checkbox"
                            id="nguoiBenh"
                            value="Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19"
                            onChange={handleTiepXucCovidChange}
                        />
                        <label htmlFor="nguoiBenh" className="form-check-label ms-1 me-5">Người bệnh hoặc nghi ngờ, mắc
                            bệnh COVID-19</label>

                        <input
                            type="checkbox"
                            id="nguoiNuocNgoai"
                            value="Người từ nước có bệnh COVID-19"
                            onChange={handleTiepXucCovidChange}
                        />
                        <label htmlFor="nguoiNuocNgoai" className="form-check-label ms-1 me-5">Người từ nước có bệnh
                            COVID-19</label>

                        <input
                            type="checkbox"
                            id="nguoiCoTrieuChung"
                            value="Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)"
                            onChange={handleTiepXucCovidChange}
                        />
                        <label htmlFor="nguoiCoTrieuChung" className="form-check-label ms-1">Người có biểu hiện (Sốt,
                            ho, khó thở, viêm phổi)</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="quocGiaDaDen" className="form-label">Trong 14 ngày qua, Anh/Chị có đến quốc gia/vùng
                        lãnh thổ nào (Có thể đi qua nhiều quốc gia)?</label>
                    <input
                        id="quocGiaDaDen"
                        name="quocGiaDaDen"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.quocGiaDaDen}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    );
};

export default HealthDeclarationForm;

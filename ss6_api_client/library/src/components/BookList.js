import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bookService from "../services/BookService";
import {format} from 'date-fns';
import moment from "moment";

const BookList = () => {
        const [books, setBooks] = useState([]);
        const [title, setTitle] = useState('');
        const [date, setDate] = useState({
            startDate: '',
            endDate: ''
        });

        useEffect(() => {
            getAllBooks(title);
        }, [title]);

        const getAllBooks = async (title) => {
            let res = await bookService.getAllBooks(title);
            console.log(res);
            setBooks(res);
        }

        const getAllBookByDateRange = () => {
            if (date.startDate && date.endDate) {
                return books.filter((book) => moment(book.publicationDate) > moment(date.startDate) && moment(book.publicationDate) < moment(date.endDate));
            } else {
                return books;
            }
        }

        const handleDelete = async (id) => {
            let res = await bookService.deleteBook(id);
            if (res) {
                toast.success('Xóa sách thành công!', {
                    theme: "colored"
                });
                setBooks(books.filter(book => book.id !== id));
            } else {
                toast.error('Thao tác thất bại!');
            }
        }

        return (
            <div className="container">
                <h1 className="text-center my-4">Quản lý sách</h1>
                <div className="d-flex justify-content-between mb-3">
                    <Link to="/add" className="btn btn-success">Thêm sách</Link>
                    <div className="d-flex">
                        <label className="d-inline-block align-content-center me-3" htmlFor="startDate">Từ</label>
                        <input id="startDate"
                               className="form-control me-3"
                               type="date"
                               value={date.startDate}
                               onChange={(e) => {
                                   setDate({
                                       startDate: e.target.value,
                                       endDate: date.endDate
                                   })
                               }}/>
                        <label className="d-inline-block align-content-center me-3" htmlFor="endDate">Đến</label>
                        <input id="endDate"
                               className="form-control"
                               type="date"
                               value={date.endDate}
                               onChange={(e) => {
                                   setDate({
                                       startDate: date.startDate,
                                       endDate: e.target.value
                                   })
                               }}/>
                    </div>
                    <input className="form-control w-25" type="search" placeholder="Search" aria-label="Search"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <table className="table table-bordered align-middle">
                    <thead>
                    <tr>
                        <th>Tên Sách</th>
                        <th>Số Lượng</th>
                        <th>Ngày xuất bản</th>
                        <th>Hành Động</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getAllBookByDateRange().map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>{format(new Date(book.publicationDate), 'dd/MM/yyyy')}</td>
                            <td>
                                <Link to={`/edit/${book.id}`} className="btn btn-primary me-2">Chỉnh sửa</Link>
                                <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
;

export default BookList;

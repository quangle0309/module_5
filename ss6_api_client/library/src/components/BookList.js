import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bookService from "../services/BookService";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        getAllBooks(title);
    }, [title]);

    const getAllBooks = async (title) => {
        let res = await bookService.getAllBooks(title);
        console.log(res);
        setBooks(res);
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
                <input className="form-control w-25" type="search" placeholder="Search" aria-label="Search" value={title}
                       onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <table className="table table-bordered align-middle">
                <thead>
                <tr>
                    <th>Tên Sách</th>
                    <th>Số Lượng</th>
                    <th>Hành Động</th>
                </tr>
                </thead>
                <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
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
};

export default BookList;

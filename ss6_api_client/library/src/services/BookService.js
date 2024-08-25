    import axios from 'axios';

    const baseURL = "http://localhost:8080/books";

    export const getAllBooks = async (name) => {
        try {
            let res = await axios.get(baseURL+"?title_like="+name);
            return res.data;
        } catch (e) {
            return []
        }
    }

    export const saveBooks = async (book) => {
        try {
            await axios.post(baseURL, book)
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }

    export const updateBooks = async (book, id) => {
        try {
            await axios.put(baseURL + '/' + id, book)
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }

    export const deleteBook = async (id) => {
        try {
            await axios.delete(baseURL+"/"+id)
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }

    export const getBookById = async (id) => {
        try {
            let res = await axios.get(baseURL+"/"+id)
            return res.data;
        } catch (e) {
            console.log(e)
            return null;
        }
    }
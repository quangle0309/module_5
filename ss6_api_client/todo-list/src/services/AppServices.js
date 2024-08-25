import axios from 'axios';


export const getAllTodos = async () => {
    try{
         let res = await axios.get('http://localhost:8080/todos');
         console.log(res)
         return res.data;
    } catch(e){
        console.log(e);
    }

}

export const saveTodo = async (todo) => {
    try {
        let res = await axios.post('http://localhost:8080/todos', todo);
        console.log(res);
        return res.data;
    } catch(e) {
        console.log(e);
    }
}
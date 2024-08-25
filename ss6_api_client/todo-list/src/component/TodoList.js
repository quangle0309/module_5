import { useEffect, useState } from "react";
import * as appService from "../services/AppServices";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [form, setForm] = useState({
        title: '',
        completed: false
    });

    const getAllTodo = async () => {
        let res = await appService.getAllTodos();
        setTodos(res);
    };

    useEffect(() => {
        getAllTodo();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await saveJob(form);
        setForm({ title: '', completed: false });
        getAllTodo();
    };

    const saveJob = async (value) => {
        value.completed = false;
        let isSuccess = await appService.saveTodo(value);
        if (isSuccess) {
            console.log('Todo saved successfully');
        }
    };

    return (
        <>
            <div>
                <h1>Todo List</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        placeholder="Enter todo task"
                    />
                    <button type="submit">Submit</button>
                </form>

                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoList;

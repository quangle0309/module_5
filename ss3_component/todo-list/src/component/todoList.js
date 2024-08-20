import {Component} from "react";

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            item: ''
        }
    }
    handleChange = (event) => {
        this.setState({item: event.target.value})
    }

    handleAddItem = () => {
        if (this.state.item.trim()) {
            this.setState(prevState => ({
                list: [...prevState.list, prevState.item],
                item: ''
            }));
        }
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    value={this.state.item}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;
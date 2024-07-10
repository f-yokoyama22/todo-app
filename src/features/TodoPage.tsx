import { useState } from 'react';

export default function TodoPage() {

    const initialTodos = ["study", "clean"];
    const [todos, setTodos] = useState<string[]>(initialTodos);
    const [input, setInput] = useState("");

    const handleAddTodo = (newAdd: string) => {
        setTodos([...todos, newAdd]);
        setInput("");
    }

    return (
        <>
            <h1>Todo app</h1>
            {todos.map(todo => (
                <p>{todo}</p>
            ))}
            <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={() => handleAddTodo(input)}>Add</button>
        </>
    );
}
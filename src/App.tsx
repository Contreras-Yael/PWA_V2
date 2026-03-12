import { useState, useEffect } from 'react'

interface Task {
  id: number;
  text: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  // Cargar datos (Persistencia)
  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Guardar datos (Persistencia)
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>PWA Task Manager (UTT)</h1>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Nueva tarea..."
      />
      <button onClick={addTask}>Agregar</button>
      <ul>
        {tasks.map(task => <li key={task.id}>{task.text}</li>)}
      </ul>
    </div>
  )
}

export default App
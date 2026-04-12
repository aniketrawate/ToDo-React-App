import { useState, useEffect } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { CheckCircle2, ListTodo } from 'lucide-react';
import { cn } from './utils';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [
      { id: '1', text: 'Learn React', completed: true },
      { id: '2', text: 'Build a premium ToDo app', completed: false },
      { id: '3', text: 'Master Tailwind CSS plugins', completed: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([
      { id: crypto.randomUUID(), text, completed: false },
      ...todos,
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col pt-16 sm:pt-24 pb-12 px-4 selection:bg-zinc-800 selection:text-zinc-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 -z-10" />
      
      <main className="w-full max-w-2xl mx-auto flex-1 flex flex-col">
        {/* Header Section */}
        <header className="mb-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-4 mb-4">
            <div className="p-3 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl shadow-black/50">
              <ListTodo size={32} className="text-zinc-300" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 font-sans">
              Tasks
            </h1>
          </div>
          <p className="text-zinc-400 text-lg flex items-center justify-center sm:justify-start gap-2">
            Let's get things done today.
          </p>
        </header>

        {/* Input */}
        <TodoInput onAdd={addTodo} />

        {/* List Section */}
        <div className="flex-1 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 p-4 sm:p-6 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
            <h2 className="text-xl font-semibold text-zinc-200">Your List</h2>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
                {stats.completed} / {stats.total} done
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            {todos.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-zinc-500 text-center gap-4">
                <CheckCircle2 size={48} strokeWidth={1} className="text-zinc-700" />
                <p>All clear! You have no upcoming tasks.</p>
              </div>
            ) : (
              <div className="space-y-1">
                {todos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-zinc-600">
          Dark minimum viable product 
        </footer>
      </main>
    </div>
  );
}

export default App;

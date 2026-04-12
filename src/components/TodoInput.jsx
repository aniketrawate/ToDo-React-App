import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '../utils';

export function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full mb-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className={cn(
          "w-full bg-zinc-800/80 border border-zinc-700/50 rounded-xl",
          "py-4 pl-6 pr-14 text-zinc-100 placeholder:text-zinc-500",
          "focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent",
          "transition-all duration-200 shadow-sm backdrop-blur-sm"
        )}
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2",
          "p-2 rounded-lg bg-zinc-700 text-zinc-300",
          "hover:bg-zinc-600 hover:text-white hover:scale-105",
          "disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-zinc-700",
          "transition-all duration-200"
        )}
        aria-label="Add Todo"
      >
        <Plus size={20} strokeWidth={2.5} />
      </button>
    </form>
  );
}

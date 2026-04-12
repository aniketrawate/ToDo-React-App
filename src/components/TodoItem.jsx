import { Check, Trash2 } from 'lucide-react';
import { cn } from '../utils';

export function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div
      className={cn(
        "group flex items-center justify-between p-4 mb-3 rounded-xl",
        "bg-zinc-800/40 border border-zinc-700/30",
        "hover:bg-zinc-800/80 hover:border-zinc-700/60",
        "transition-all duration-300 ease-in-out backdrop-blur-sm",
        todo.completed ? "opacity-60 grayscale-[0.5]" : ""
      )}
    >
      <div className="flex items-center gap-4 flex-1 overflow-hidden">
        <button
          onClick={() => onToggle(todo.id)}
          className={cn(
            "flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-md border",
            "transition-colors duration-200 cursor-pointer",
            todo.completed
              ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
              : "bg-zinc-900 border-zinc-600 hover:border-zinc-500 text-transparent"
          )}
          aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          <Check size={14} strokeWidth={3} className={cn("transition-opacity", todo.completed ? "opacity-100" : "opacity-0")} />
        </button>
        <span
          className={cn(
            "text-base transition-all duration-300 truncate",
            todo.completed ? "text-zinc-500 line-through" : "text-zinc-200"
          )}
        >
          {todo.text}
        </span>
      </div>
      
      <button
        onClick={() => onDelete(todo.id)}
        className={cn(
          "flex-shrink-0 p-2 ml-4 rounded-md text-zinc-500",
          "opacity-0 md:group-hover:opacity-100 focus:opacity-100",
          "hover:bg-red-500/10 hover:text-red-400",
          "transition-all duration-200"
        )}
        aria-label="Delete Todo"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

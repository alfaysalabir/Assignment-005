export default function YourStackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="lg:sticky lg:top-[100px] lg:self-start">
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-heading text-base font-bold text-slate-900">
              Your Stack
            </h3>
            <p className="text-xs text-slate-400">
              {stack.length === 0
                ? "No Technology Selected Yet"
                : `${stack.length} Technology${stack.length > 1 ? "ies" : "y"} Selected`}
            </p>
          </div>
          {stack.length > 0 && (
            <button
              onClick={onRemoveAll}
              className="font-heading text-sm font-semibold text-red-600 hover:text-red-700"
            >
              Remove All
            </button>
          )}
        </div>

        {stack.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-center text-sm text-slate-400">
            Your stack is empty.
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3"
              >
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  className="h-8 w-8 object-contain"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {tech.name}
                  </p>
                  <p className="text-xs text-slate-400">{tech.category}</p>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  aria-label={`Remove ${tech.name}`}
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-red-50 hover:text-red-600"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
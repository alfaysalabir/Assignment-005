import { getBadgeClasses } from "../utils/badgeColors";
import { BRAND_GRADIENT_BG } from "../utils/brand";

export default function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div className="animate-fade-in flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Icon + Badge */}
      <div className="mb-4 flex items-start justify-between">
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="h-10 w-10 object-contain"
          loading="lazy"
        />
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${getBadgeClasses(
            tech.badge
          )}`}
        >
          {tech.badge}
        </span>
      </div>

      {/* Name + description */}
      <h3 className="font-heading text-lg font-bold text-slate-900">
        {tech.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {tech.description}
      </p>

      {/* Category chip + difficulty + rating */}
      <div className="mt-4 flex items-center">
        <span className="whitespace-nowrap rounded-md bg-slate-100/80 px-2 py-1 text-xs font-semibold text-slate-600">
          {tech.category}
        </span>
        <span className="mx-auto whitespace-nowrap text-xs font-medium text-slate-500">
          {tech.difficulty}
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap text-xs font-semibold text-slate-600">
          <StarIcon />
          {tech.rating}
        </span>
      </div>

      {/* Add to stack button */}
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`font-heading mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition-opacity ${
          isAdded
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : `${BRAND_GRADIENT_BG} text-white hover:opacity-90`
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="#f59e0b">
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L10 1.5z" />
    </svg>
  );
}

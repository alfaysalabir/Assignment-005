export const BADGE_COLORS = {
  Popular: "bg-sky-50 text-sky-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  "SSR / Edge": "bg-purple-100 text-purple-700",
  Standard: "bg-green-50 text-green-700",
  "Top SQL": "bg-blue-50 text-blue-700",
  Flexible: "bg-teal-50 text-teal-600",
  Cache: "bg-red-50 text-red-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-sky-50 text-sky-600",
  Robust: "bg-sky-50 text-sky-600",
  Modern: "bg-cyan-50 text-cyan-600",
  Containers: "bg-blue-50 text-blue-700",
};

export function getBadgeClasses(badge) {
  return BADGE_COLORS[badge] || "bg-slate-100 text-slate-600";
}

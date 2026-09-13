import { BRAND_GRADIENT_TEXT } from "../utils/brand";

export default function SectionTitle() {
  return (
    <div className="mb-8 text-center sm:text-left">
      <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Explore the <span className={BRAND_GRADIENT_TEXT}>Technologies</span>
      </h2>
      <p className="mt-2 text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>
    </div>
  );
}

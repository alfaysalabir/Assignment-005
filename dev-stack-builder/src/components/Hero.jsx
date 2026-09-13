import bannerImage from "../assets/banner-stack.png";
import { BRAND_GRADIENT_BG, BRAND_GRADIENT_TEXT } from "../utils/brand";

export default function Hero() {
  return (
    <section id="home" className="border-b border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
        {/* Text column */}
        <div>
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[60px]">
            Build Your Ideal
            <br />
            <span className={BRAND_GRADIENT_TEXT}>Development Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#technologies"
              className={`font-heading rounded-lg ${BRAND_GRADIENT_BG} px-6 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-pink-100 transition-opacity hover:opacity-90`}
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="font-heading rounded-lg border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Illustration column */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative flex `h-[320px]` w-[320px] items-center justify-center sm:h-[380px]` sm:w-[380px]`">
            <div
              className={`absolute inset-0 rounded-full ${BRAND_GRADIENT_BG} opacity-10 blur-3xl`}
            />
            <StackIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function StackIllustration() {
  return (
    <img
      src={bannerImage}
      alt="Illustration of a layered development stack"
      className="h-full w-full object-contain drop-shadow-xl"
    />
  );
}

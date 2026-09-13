import { BRAND_GRADIENT_BG, BRAND_GRADIENT_TEXT } from "../utils/brand";
import logo from "../assets/logo-text.png"

const LINK_GROUPS = [
  { title: "PRODUCT", links: ["Home", "Technologies", "Projects"] },
  { title: "COMPANY", links: ["About", "Contact", "Careers"] },
  { title: "LEGAL", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand block */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <span>
                <img src={logo} alt="Logo" />
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <SocialLink label="GitHub">
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.02 3.29 9.28 7.86 10.79.57.1.78-.25.78-.55v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17v3.22c0 .3.21.66.79.55A10.53 10.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
              </SocialLink>
              <SocialLink label="Twitter">
                <path d="M23 4.9c-.8.36-1.66.6-2.56.71a4.48 4.48 0 0 0 1.96-2.48c-.86.51-1.82.88-2.83 1.08a4.45 4.45 0 0 0-7.6 4.06A12.65 12.65 0 0 1 2.9 3.9a4.45 4.45 0 0 0 1.38 5.94c-.73-.02-1.42-.22-2.02-.56v.06a4.46 4.46 0 0 0 3.57 4.37c-.65.18-1.34.2-2 .08a4.46 4.46 0 0 0 4.16 3.1A8.94 8.94 0 0 1 1 19.06a12.6 12.6 0 0 0 6.84 2c8.2 0 12.7-6.8 12.7-12.7l-.02-.58A9.05 9.05 0 0 0 23 4.9Z" />
              </SocialLink>
              <SocialLink label="LinkedIn">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.98h4.96V23H.5V8.98Zm7.6 0h4.76v1.92h.07c.66-1.25 2.28-2.57 4.7-2.57 5.02 0 5.95 3.3 5.95 7.6V23h-4.96v-6.15c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.37 1.6-2.37 3.25V23H8.1V8.98Z" />
              </SocialLink>
            </div>
          </div>

          {/* Link groups */}
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading text-xs font-bold tracking-wide text-slate-400">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-slate-500 hover:text-slate-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-700">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-gradient-to-r hover:from-brand-start hover:via-brand-mid hover:to-brand-end hover:text-white"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}

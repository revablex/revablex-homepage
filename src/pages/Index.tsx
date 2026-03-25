import { useEffect } from "react";
import rxLogo from "@/assets/rx-logo.png";

// SVG Icons
const LogoIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M3 14L7.5 9 3 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 14h6" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M21.35 11.1H12.18v2.73h5.32c-.23 1.34-.95 2.47-2.02 3.22v2.68h3.27c1.91-1.76 3.01-4.36 3.01-7.43 0-.5-.05-.99-.41-1.45l.0001.25z" fill="currentColor" opacity="0.9"/>
    <path d="M12 22c2.73 0 5.02-.91 6.69-2.45l-3.27-2.68c-.91.61-2.07.97-3.42.97-2.63 0-4.86-1.78-5.66-4.17H3.14v2.77C4.8 19.73 8.21 22 12 22z" fill="currentColor" opacity="0.9"/>
    <path d="M6.34 13.67c-.2-.61-.32-1.26-.32-1.93s.12-1.32.32-1.93V7.04H3.14A11.93 11.93 0 0 0 2 12c0 1.78.38 3.47 1.14 4.98l3.2-3.31z" fill="currentColor" opacity="0.9"/>
    <path d="M12 5.36c1.48 0 2.81.51 3.86 1.51l2.89-2.89C17.07 2.29 14.75 1.36 12 1.36 8.21 1.36 4.8 3.63 3.14 6.92l3.2 3.25C7.14 7.66 9.37 5.36 12 5.36z" fill="currentColor" opacity="0.9"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const ChatIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);

const DashboardIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
  </svg>
);

const BoltIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const LockIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const NoShareIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

// Components
const Logo = ({ size = "md" }: { size?: "sm" | "md" }) => (
  <a href="https://revablex.vercel.app" className="flex items-center gap-2 no-underline">
    <img
      src={rxLogo}
      alt="RevableX Logo"
      className={size === "sm" ? "w-7 h-7" : "w-8 h-8"}
      style={{ objectFit: "contain" }}
    />
    <span className={`font-black tracking-tight ${size === "sm" ? "text-base" : "text-lg"}`}
      style={{ color: "hsl(var(--foreground))" }}>
      Revable<span style={{ color: "hsl(var(--primary))" }}>X</span>
    </span>
  </a>
);

const Index = () => {
  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // mobile menu toggle
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const handler = () => {
      mobileMenu?.classList.toggle("rx-menu-open");
      hamburger?.classList.toggle("rx-ham-open");
    };
    hamburger?.addEventListener("click", handler);
    return () => hamburger?.removeEventListener("click", handler);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--background))", fontFamily: "'Inter', sans-serif" }}>

      {/* INLINE STYLES */}
      <style>{`
        .rx-nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid hsl(var(--border));
        }
        .rx-btn-primary {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          border: none; cursor: pointer;
          font-family: inherit; font-weight: 600;
          border-radius: 9999px;
          transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
          display: inline-flex; align-items: center; gap: 6px;
          text-decoration: none; white-space: nowrap;
        }
        .rx-btn-primary:hover {
          background: hsl(var(--primary-glow));
          box-shadow: 0 4px 18px hsl(var(--primary) / 0.35);
          transform: translateY(-1px);
        }
        .rx-btn-primary:active { transform: translateY(0); }
        .rx-btn-ghost {
          background: none; border: none; cursor: pointer;
          font-family: inherit; font-weight: 500;
          color: hsl(var(--body-text)); padding: 8px 16px;
          border-radius: 9999px;
          transition: color 0.15s, background 0.15s;
          text-decoration: none; display: inline-block;
        }
        .rx-btn-ghost:hover {
          color: hsl(var(--foreground));
          background: hsl(var(--soft-bg));
        }
        .rx-btn-secondary {
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          border: 1.5px solid hsl(var(--border));
          cursor: pointer; font-family: inherit; font-weight: 600;
          border-radius: 9999px;
          transition: border-color 0.15s, background 0.15s, transform 0.1s;
          text-decoration: none; display: inline-flex; align-items: center; gap: 6px;
          white-space: nowrap;
        }
        .rx-btn-secondary:hover {
          border-color: hsl(215 16% 60%);
          background: hsl(var(--soft-bg));
          transform: translateY(-1px);
        }
        .rx-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: hsl(var(--badge-bg));
          border: 1px solid hsl(var(--badge-border));
          color: hsl(var(--badge-text));
          font-size: 13px; font-weight: 600;
          padding: 6px 14px; border-radius: 9999px;
        }
        .rx-card {
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 12px;
          transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
          position: relative; overflow: hidden;
        }
        .rx-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)));
          opacity: 0; transition: opacity 0.2s;
        }
        .rx-card:hover { box-shadow: 0 8px 28px hsl(222 47% 6% / 0.1); transform: translateY(-3px); border-color: hsl(215 16% 80%); }
        .rx-card:hover::before { opacity: 1; }
        .rx-step-num {
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)));
          color: white; font-size: 14px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-bottom: 16px;
        }
        .rx-feature-icon {
          width: 44px; height: 44px; border-radius: 10px;
          background: hsl(24 95% 97%);
          color: hsl(var(--primary));
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px; flex-shrink: 0;
        }
        .rx-trust-icon {
          width: 44px; height: 44px; border-radius: 10px;
          background: hsl(var(--trust-bg));
          color: hsl(var(--trust-icon));
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .rx-nav-link {
          text-decoration: none; color: hsl(215 19% 40%);
          font-size: 14px; font-weight: 500; padding: 6px 14px;
          border-radius: 9999px;
          transition: color 0.15s, background 0.15s;
        }
        .rx-nav-link:hover { color: hsl(var(--foreground)); background: hsl(var(--soft-bg)); }
        .rx-trust-line { display: flex; align-items: center; justify-content: center; gap: 6px; flex-wrap: wrap; }
        .rx-dot { width: 5px; height: 5px; border-radius: 50%; background: hsl(var(--muted-foreground)); display: inline-block; }
        /* Mobile menu */
        .rx-mobile-menu {
          display: none; position: fixed; top: 64px; left: 0; right: 0;
          background: hsl(var(--background)); border-bottom: 1px solid hsl(var(--border));
          padding: 16px 24px 24px; z-index: 99;
          box-shadow: 0 8px 24px hsl(222 47% 6% / 0.08);
        }
        .rx-mobile-menu.rx-menu-open { display: block; }
        .rx-mobile-menu a { display: block; padding: 12px 0; font-size: 15px; font-weight: 500; color: hsl(var(--foreground)); text-decoration: none; border-bottom: 1px solid hsl(var(--border)); }
        .rx-mobile-menu a:last-of-type { border-bottom: none; }
        .rx-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 6px; }
        .rx-hamburger span { display: block; width: 22px; height: 2px; background: hsl(var(--foreground)); border-radius: 2px; transition: transform 0.2s, opacity 0.2s; }
        .rx-hamburger.rx-ham-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .rx-hamburger.rx-ham-open span:nth-child(2) { opacity: 0; }
        .rx-hamburger.rx-ham-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        @media (max-width: 768px) {
          .rx-nav-links-desktop { display: none !important; }
          .rx-hamburger { display: flex !important; }
          .rx-nav-actions-desktop .rx-btn-ghost { display: none; }
        }
        @media (max-width: 480px) {
          .rx-nav-actions-desktop .rx-btn-primary { font-size: 13px; padding: 8px 14px; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="rx-nav">
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <Logo />

          <ul className="rx-nav-links-desktop flex items-center gap-1 list-none m-0 p-0">
            <li><a href="#how-it-works" className="rx-nav-link">How it works</a></li>
            <li><a href="#features" className="rx-nav-link">Features</a></li>
            <li><a href="#security" className="rx-nav-link">Security</a></li>
          </ul>

          <div className="rx-nav-actions-desktop flex items-center gap-2.5 flex-shrink-0">
            <a href="https://revablex.vercel.app" className="rx-btn-ghost text-sm">Login</a>
            <a href="https://revablex.vercel.app" className="rx-btn-primary text-sm px-5 py-2.5">Get Started</a>
          </div>

          <button className="rx-hamburger" id="hamburger" aria-label="Open menu">
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className="rx-mobile-menu" id="mobileMenu">
        <a href="#how-it-works">How it works</a>
        <a href="#features">Features</a>
        <a href="#security">Security</a>
        <div className="flex flex-col gap-2.5 mt-4">
          <a href="https://revablex.vercel.app" className="rx-btn-ghost text-center text-sm border border-[hsl(var(--border))] rounded-full py-2.5">Login</a>
          <a href="https://revablex.vercel.app" className="rx-btn-primary text-sm py-3 justify-center">Get Started</a>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-24 pb-20 px-6 text-center max-w-[780px] mx-auto">
        <div className="rx-badge mb-7 inline-flex">
          <StarIcon />
          Built for YouTube creators
        </div>

        <h1 className="font-black leading-[1.07] tracking-[-1.5px] mb-5"
          style={{ fontSize: "clamp(38px, 6vw, 64px)", color: "hsl(var(--foreground))" }}>
          Analyze YouTube Comments.<br />
          <span style={{ color: "hsl(var(--primary))" }}>Discover Audience Questions.</span>
        </h1>

        <p className="text-lg leading-relaxed mx-auto mb-9 max-w-[560px]"
          style={{ color: "hsl(var(--body-text))" }}>
          RevableX connects to your YouTube account and uses AI to analyze comments — surfacing exactly what your viewers are asking, so you never miss what your audience needs.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap mb-6">
          <a href="#" className="rx-btn-primary text-[15px] px-7 py-[14px]">
            <GoogleIcon />
            Get Started with Google
          </a>
          <a href="#how-it-works" className="rx-btn-secondary text-[15px] px-7 py-[14px]">
            Learn More
          </a>
        </div>

        <div className="rx-trust-line text-[13px]" style={{ color: "hsl(var(--muted-foreground))" }}>
          <ShieldIcon />
          Secure Google OAuth
          <span className="rx-dot"/>
          No data stored without your permission
        </div>

        <hr className="border-none border-t mt-12 max-w-[700px] mx-auto"
          style={{ borderTop: "1px solid hsl(var(--border))" }} />
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6" style={{ background: "hsl(var(--soft-bg))" }} id="how-it-works">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <h2 className="font-black leading-tight tracking-[-0.8px] mb-3"
              style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "hsl(var(--foreground))" }}>
              How it works
            </h2>
            <p className="text-[17px] leading-relaxed" style={{ color: "hsl(var(--body-text))" }}>
              Four simple steps to understand exactly what your audience is asking — powered by Google OAuth and AI analysis.
            </p>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {[
              { n: 1, title: "Connect Your YouTube Account", desc: "Sign in securely with Google OAuth. We request read-only access to your YouTube channel — no passwords stored." },
              { n: 2, title: "Select a Video", desc: "Browse your uploaded videos and pick the one you want to analyze. We support any public or unlisted video on your channel." },
              { n: 3, title: "Fetch & Analyze Comments", desc: "RevableX fetches all comments and runs AI analysis to detect patterns, themes, and questions from your audience." },
              { n: 4, title: "Get Audience Insights", desc: "See a clean summary of what your viewers are asking most — sorted by frequency and intent, ready to act on." },
            ].map(step => (
              <div className="rx-card p-7" key={step.n}>
                <div className="rx-step-num">{step.n}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: "hsl(var(--foreground))" }}>{step.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "hsl(var(--body-text))" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6" id="features">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <h2 className="font-black leading-tight tracking-[-0.8px] mb-3"
              style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "hsl(var(--foreground))" }}>
              Everything you need to understand your audience
            </h2>
            <p className="text-[17px] leading-relaxed" style={{ color: "hsl(var(--body-text))" }}>
              Built specifically for YouTube creators who want real signal from their comment sections.
            </p>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {[
              { icon: <ChatIcon />, title: "Comment Analysis", desc: "Process hundreds of comments in seconds. Our AI groups similar feedback and highlights recurring themes your audience cares about." },
              { icon: <SearchIcon />, title: "Audience Question Detection", desc: "Automatically identify which comments are questions — and surface the ones asked most often, so you always know what to address next." },
              { icon: <DashboardIcon />, title: "Clean Dashboard Experience", desc: "A minimal, distraction-free interface that shows you results clearly — no clutter, no overwhelming data, just actionable insights." },
              { icon: <BoltIcon />, title: "Fast Processing", desc: "Get results in seconds, not minutes. RevableX is optimized for speed so you spend less time waiting and more time creating." },
            ].map((f, i) => (
              <div className="rx-card p-7" key={i}>
                <div className="rx-feature-icon">{f.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: "hsl(var(--foreground))" }}>{f.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "hsl(var(--body-text))" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="py-20 px-6" style={{ background: "hsl(var(--soft-bg))" }} id="security">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <h2 className="font-black leading-tight tracking-[-0.8px] mb-3"
              style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "hsl(var(--foreground))" }}>
              Built on trust and transparency
            </h2>
            <p className="text-[17px] leading-relaxed" style={{ color: "hsl(var(--body-text))" }}>
              Your data and your audience's privacy are treated with the highest care. Here's how we keep everything secure.
            </p>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {[
              { icon: <ShieldIcon />, title: "Secure Google OAuth", desc: "We authenticate through Google's official OAuth 2.0 system. We never see, store, or handle your Google password at any point." },
              { icon: <UserIcon />, title: "User-Controlled Access", desc: "You decide what RevableX can access. Revoke permissions at any time from your Google account settings — we respect your control completely." },
              { icon: <NoShareIcon />, title: "No Third-Party Data Sharing", desc: "Your comment data and insights are yours alone. We never sell, share, or expose your data to any third-party services." },
            ].map((t, i) => (
              <div className="rx-card p-7 flex gap-4 items-start" key={i}>
                <div className="rx-trust-icon">{t.icon}</div>
                <div>
                  <h3 className="font-bold text-[15px] mb-1.5" style={{ color: "hsl(var(--foreground))" }}>{t.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "hsl(var(--body-text))" }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, hsl(var(--dark-section)), hsl(var(--dark-section-secondary)))" }}>
        <h2 className="font-black leading-tight tracking-[-0.8px] mb-4 text-white"
          style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
          Ready to understand your audience?
        </h2>
        <p className="text-[17px] mx-auto mb-9 max-w-[480px]" style={{ color: "hsl(215 20% 55%)" }}>
          Join creators who use RevableX to turn YouTube comments into clear, actionable audience insights.
        </p>
        <a href="#" className="rx-btn-primary text-[15px] px-8 py-4">
          <GoogleIcon />
          Get Started with Google
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid hsl(var(--border))", padding: "36px 24px" }}>
        <div className="max-w-[1100px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <Logo size="sm" />
          <div className="flex items-center gap-6 flex-wrap">
            {["Privacy Policy", "Terms of Service", "Launch App"].map(link => (
              <a key={link} href="#"
                className="text-[13px] transition-colors"
                style={{ color: "hsl(var(--muted-foreground))", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--foreground))")}
                onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}>
                {link}
              </a>
            ))}
          </div>
          <p className="text-[13px]" style={{ color: "hsl(var(--muted-foreground))" }}>
            © <span id="year"/> RevableX. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Index;

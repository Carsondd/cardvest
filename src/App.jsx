import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  TrendingUp,
  ShoppingBag,
  ShieldCheck,
  CreditCard,
  LogIn,
  ArrowRight,
  Check,
} from "lucide-react";

const BRAND = "CardVest Capital"; // Change this anytime

export default function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav
        isAuthed={isAuthed}
        onSignIn={() => setShowSignIn(true)}
        onOpen={() => setShowCreate(true)}
        onSignOut={() => setIsAuthed(false)}
      />

      <Hero onGetStarted={() => setShowCreate(true)} onSignIn={() => setShowSignIn(true)} />

      <TrustBar />

      <HowItWorks />

      <WholesalePreview isAuthed={isAuthed} onSignIn={() => setShowSignIn(true)} />

      <Pricing onSelect={() => setShowCreate(true)} />

      <FAQ />

      <Footer />

      {showSignIn && (
        <AuthDialog
          title="Sign in to your account"
          cta="Sign In"
          onClose={() => setShowSignIn(false)}
          onSubmit={() => {
            setIsAuthed(true);
            setShowSignIn(false);
          }}
        />
      )}

      {showCreate && (
        <AuthDialog
          title="Open your investor account"
          subtitle="Membership unlocks access to member-only wholesale pricing."
          cta="Create Account"
          onClose={() => setShowCreate(false)}
          onSubmit={() => {
            setIsAuthed(true);
            setShowCreate(false);
          }}
        />
      )}
    </div>
  );
}

function Nav({ isAuthed, onSignIn, onOpen, onSignOut }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <TrendingUp className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">{BRAND}</span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#how" className="text-sm text-slate-600 hover:text-slate-900">How it works</a>
          <a href="#wholesale" className="text-sm text-slate-600 hover:text-slate-900">Wholesale access</a>
          <a href="#pricing" className="text-sm text-slate-600 hover:text-slate-900">Pricing</a>
          <a href="#faq" className="text-sm text-slate-600 hover:text-slate-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          {!isAuthed ? (
            <>
              <button
                onClick={onSignIn}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50"
              >
                <LogIn className="h-4 w-4" /> Sign in
              </button>
              <button
                onClick={onOpen}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
              >
                Open account
              </button>
            </>
          ) : (
            <button
              onClick={onSignOut}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50"
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

function Hero({ onGetStarted, onSignIn }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Invest with confidence. <span className="text-blue-600">Unlock wholesale</span> pricing on trading cards & collectibles.
          </h1>
          <p className="mt-5 max-w-xl text-slate-600">
            {BRAND} is a private, member-only platform. Open an investment account and gain access to vetted wholesale suppliers and member pricing on popular TCG and collectible products.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              Open an account <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={onSignIn}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium hover:bg-slate-50"
            >
              Preview portal
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            * Access to wholesale pricing is limited to clients with an active investment relationship. Not an offer, solicitation, or advice. See disclosures below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Private Investor Portal</p>
              <p className="text-xs text-slate-500">Clean, simple dashboard for account + member store access.</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { name: "Pokemon Booster Box", msrp: 129.99, member: 102.5 },
              { name: "Basketball Hobby Box", msrp: 299.0, member: 248.0 },
              { name: "TCG Sleeves (100)", msrp: 9.99, member: 6.2 },
              { name: "Magnetic One-Touch", msrp: 4.99, member: 3.15 },
            ].map((p, i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="mt-1 text-xs text-slate-500">MSRP ${p.msrp.toFixed(2)}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">
                    Member ${p.member.toFixed(2)}
                  </span>
                </div>
                <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium hover:bg-slate-50">
                  <ShoppingBag className="h-4 w-4" /> Add to cart
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-6 md:px-6">
        {[
          "PCI-DSS Compliant",
          "Encrypted at Rest",
          "KYC/AML Ready",
          "Supplier-Vetted",
          "Secure Custody",
        ].map((t) => (
          <div key={t} className="text-xs text-slate-500">{t}</div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Open & fund",
      desc: "Create your account, complete KYC, and fund with ACH or wire.",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Get verified access",
      desc: "Once your account is active, the member store unlocks automatically.",
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      title: "Shop wholesale",
      desc: "Purchase cards & supplies at member pricing from vetted distributors.",
    },
  ];

  return (
    <section id="how" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">How it works</h2>
        <p className="mt-3 text-slate-600">Professional and simple from day one.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              {s.icon}
            </div>
            <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WholesalePreview({ isAuthed, onSignIn }) {
  const items = [
    { name: "Pokemon: Stellar Forge Booster Box", msrp: 129.99, member: 101.5 },
    { name: "Basketball 24/25 Hobby Box", msrp: 299.99, member: 244.0 },
    { name: "Baseball Chrome Jumbo Box", msrp: 269.99, member: 219.0 },
    { name: "TCG Card Sleeves (100)", msrp: 9.99, member: 6.25 },
    { name: "Toploaders (25)", msrp: 5.99, member: 3.95 },
    { name: "Magnetic One-Touch 35pt", msrp: 4.99, member: 3.15 },
  ];

  return (
    <section id="wholesale" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Member-only wholesale access</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            We partner with vetted distributors so clients can purchase popular products at member pricing.
          </p>
        </div>
        {!isAuthed && (
          <button
            onClick={onSignIn}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50"
          >
            <Lock className="h-4 w-4" /> Sign in to view prices
          </button>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((p, i) => (
          <div key={i} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="h-28 w-full rounded-xl bg-slate-100" />
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium">{p.name}</p>
                <p className="mt-1 text-xs text-slate-500">MSRP ${p.msrp.toFixed(2)}</p>
              </div>
              <span
                className={
                  "rounded-full px-2 py-1 text-[11px] font-semibold " +
                  (isAuthed ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-400")
                }
              >
                {isAuthed ? `Member $${p.member.toFixed(2)}` : "Members only"}
              </span>
            </div>
            <button
              className={
                "mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-medium " +
                (isAuthed
                  ? "border border-slate-300 hover:bg-slate-50"
                  : "border border-slate-200 text-slate-400")
              }
              disabled={!isAuthed}
            >
              <ShoppingBag className="h-4 w-4" /> {isAuthed ? "Add to cart" : "Sign in required"}
            </button>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-slate-500">
        Product images and pricing shown for illustration. Actual availability may vary. Member store is accessible only to active clients.
      </p>
    </section>
  );
}

function Pricing({ onSelect }) {
  const tiers = [
    {
      name: "Starter",
      price: "$0/mo",
      note: "No platform fee",
      features: ["Wholesale access", "Email support", "Secure checkout"],
    },
    {
      name: "Plus",
      price: "$19/mo",
      badge: "Popular",
      note: "Priority access",
      features: ["All Starter features", "Priority support", "Early product drops"],
    },
    {
      name: "Pro",
      price: "$49/mo",
      note: "For volume buyers",
      features: ["Dedicated support", "Bulk order workflows", "Advanced reporting"],
    },
  ];

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Simple pricing</h2>
        <p className="mt-3 text-slate-600">Choose a plan that fits how you collect and invest.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <div key={i} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {t.badge && (
              <span className="absolute -top-2 right-3 rounded-full bg-blue-600 px-2 py-1 text-[11px] font-semibold text-white">
                {t.badge}
              </span>
            )}
            <h3 className="text-base font-semibold">{t.name}</h3>
            <p className="mt-2 text-3xl font-semibold">{t.price}</p>
            {t.note && <p className="mt-1 text-xs text-slate-500">{t.note}</p>}
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {t.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" /> {f}
                </li>
              ))}
            </ul>
            <button
              onClick={onSelect}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Choose {t.name}
            </button>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-slate-500">
        Pricing does not include transactional fees, taxes, or shipping. Membership fees are separate from any investment services you may receive.
      </p>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Who can access member pricing?",
      a: "Only clients with an active, verified account can view and purchase at member pricing.",
    },
    {
      q: "Is this an investment offer?",
      a: "No. Information on this website is for general purposes only and is not an offer, solicitation, or advice. See Terms & Disclosures.",
    },
    {
      q: "How are products sourced?",
      a: "We work with vetted wholesale distributors and suppliers. Availability varies and may be limited.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes, membership plans can be cancelled anytime. Access to member pricing ends when membership ends.",
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Frequently asked questions</h2>
      </div>

      <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {faqs.map((f, i) => (
          <details key={i} className="group p-6 open:bg-slate-50/50">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-slate-900">
              {f.q}
              <svg
                className="h-4 w-4 transition-transform group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <p className="mt-2 text-sm text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold">{BRAND}</span>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              {BRAND} provides a private member store for verified clients. Not investment advice. All trademarks belong to their owners.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-slate-900" href="#how">How it works</a></li>
              <li><a className="hover:text-slate-900" href="#wholesale">Wholesale access</a></li>
              <li><a className="hover:text-slate-900" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-slate-900" href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-slate-900" href="#">Terms</a></li>
              <li><a className="hover:text-slate-900" href="#">Privacy</a></li>
              <li><a className="hover:text-slate-900" href="#">Disclosures</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>support@yourdomain.com</li>
              <li>Mon–Fri, 9am–5pm ET</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-400">© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
      </div>
    </footer>
  );
}

function AuthDialog({ title, subtitle, cta, onClose, onSubmit }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
            aria-label="Close"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>
        <form
          className="mt-4 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.();
          }}
        >
          <div>
            <label className="text-xs font-medium text-slate-600">Email</label>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="you@domain.com"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">Password</label>
            <input
              type="password"
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {cta}
          </button>
          <p className="text-center text-xs text-slate-500">By continuing, you agree to our Terms & Privacy Policy.</p>
        </form>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import {
  Menu, X, ShoppingBag, Search, ChevronDown,
  Shield, Award, Leaf, Gift, ArrowRight, Instagram, Facebook, Twitter,
  Star, Diamond, Gem, Crown
} from 'lucide-react';

const NAV_LINKS = ['Collections', 'About', 'Craft', 'Contact'];

const COLLECTIONS = [
  {
    name: 'Sovereign Chain',
    category: 'Necklaces',
    price: '₹1,299',
    img: 'https://images.pexels.com/photos/16069407/pexels-photo-16069407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Obsidian Arc',
    category: 'Earrings',
    price: '₹849',
    img: 'https://images.pexels.com/photos/39076755/pexels-photo-39076755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Eternal Band',
    category: 'Bracelets',
    price: '₹999',
    img: 'https://images.pexels.com/photos/31459469/pexels-photo-31459469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Serpent Hoop',
    category: 'Earrings',
    price: '₹749',
    img: 'https://images.pexels.com/photos/39076774/pexels-photo-39076774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

const TRUST_ITEMS = [
  { icon: Shield, label: 'Anti-Tarnish Guarantee', desc: 'Military-grade stainless steel that resists rust, sweat & time.' },
  { icon: Award, label: 'Premium Grade Steel', desc: '316L surgical-grade stainless — durable enough to outlast trends.' },
  { icon: Leaf, label: 'Skin-Safe Always', desc: 'Nickel-free, hypoallergenic finishes for all-day comfort.' },
  { icon: Gift, label: 'Luxury Packaging', desc: 'Every order ships in a signature gift box — ready to impress.' },
];

const MARQUEE_ITEMS = [
  'HOUSE OF ELITE STYLES',
  '·',
  'STAINLESS STEEL JEWELLERY',
  '·',
  'ANTI-TARNISH',
  '·',
  'PREMIUM CRAFTSMANSHIP',
  '·',
  'MADE TO ENDURE',
  '·',
];

const STATS = [
  { value: '12K+', label: 'Happy Customers' },
  { value: '200+', label: 'Unique Designs' },
  { value: '5 Yr', label: 'Anti-Tarnish Warranty' },
  { value: '100%', label: 'Skin Safe' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>

      {/* ── NAVIGATION ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-glass ${
          scrolled
            ? 'py-3 border-b'
            : 'py-5'
        }`}
        style={{
          background: scrolled ? 'rgba(250,248,244,0.97)' : 'transparent',
          borderColor: scrolled ? 'var(--gray-light)' : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Left nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ color: scrolled ? 'var(--charcoal)' : 'white' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Center logo */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Diamond
                size={14}
                className="transition-colors duration-300"
                style={{ color: scrolled ? 'var(--crimson)' : 'var(--gold-light)' }}
              />
              <span
                className="font-serif-display tracking-[0.22em] text-sm font-medium uppercase transition-colors duration-300"
                style={{ color: scrolled ? 'var(--charcoal)' : 'white' }}
              >
                House of Elite
              </span>
              <Diamond
                size={14}
                className="transition-colors duration-300"
                style={{ color: scrolled ? 'var(--crimson)' : 'var(--gold-light)' }}
              />
            </div>
            <span
              className="text-[9px] tracking-[0.35em] uppercase font-light transition-colors duration-300"
              style={{ color: scrolled ? 'var(--gray-warm)' : 'rgba(255,255,255,0.7)' }}
            >
              Styles
            </span>
          </div>

          {/* Right nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.slice(2).map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ color: scrolled ? 'var(--charcoal)' : 'white' }}
              >
                {link}
              </a>
            ))}
            <button
              className="transition-colors duration-200"
              style={{ color: scrolled ? 'var(--charcoal)' : 'white' }}
              aria-label="Search"
            >
              <Search size={17} />
            </button>
            <button
              className="transition-colors duration-200 relative"
              style={{ color: scrolled ? 'var(--charcoal)' : 'white' }}
              aria-label="Cart"
            >
              <ShoppingBag size={17} />
              <span
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-white text-[9px] flex items-center justify-center font-bold"
                style={{ background: 'var(--crimson)' }}
              >
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden transition-colors"
            style={{ color: scrolled ? 'var(--charcoal)' : 'white' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400`}
          style={{
            maxHeight: menuOpen ? '300px' : '0',
            background: 'var(--cream)',
            borderTop: menuOpen ? '1px solid var(--gray-light)' : 'none',
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-medium tracking-widest uppercase py-2"
                style={{ color: 'var(--charcoal)' }}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-end overflow-hidden"
        style={{ background: 'var(--charcoal)' }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/20601212/pexels-photo-20601212.jpeg?auto=compress&cs=tinysrgb&h=1280&w=1920"
            alt="Luxury stainless steel jewellery"
            className="w-full h-full object-cover opacity-60"
            style={{ objectPosition: 'center 20%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.1) 40%, rgba(26,26,26,0.75) 80%, rgba(26,26,26,0.95) 100%)',
            }}
          />
          {/* Side gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(26,26,26,0.5) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Decorative circle */}
        <div
          className="absolute top-32 right-16 w-64 h-64 rounded-full border opacity-10 animate-rotate-slow hidden lg:block"
          style={{ borderColor: 'var(--gold)' }}
        />
        <div
          className="absolute top-40 right-24 w-48 h-48 rounded-full border opacity-10 animate-rotate-slow hidden lg:block"
          style={{ borderColor: 'var(--gold)', animationDirection: 'reverse', animationDuration: '15s' }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-3 mb-6 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <span className="w-8 h-px" style={{ background: 'var(--gold)' }} />
              <span
                className="text-[10px] tracking-[0.3em] uppercase font-medium"
                style={{ color: 'var(--gold-light)' }}
              >
                Premium Stainless Steel Jewellery
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif-display font-light leading-none mb-6 opacity-0 animate-fade-in-up"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                color: 'white',
                animationDelay: '0.4s',
                animationFillMode: 'forwards',
              }}
            >
              Steel That
              <br />
              <span className="shimmer-gold italic">Never</span>
              <br />
              Surrenders.
            </h1>

            <p
              className="text-sm font-light leading-relaxed mb-10 opacity-0 animate-fade-in"
              style={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '420px',
                animationDelay: '0.65s',
                animationFillMode: 'forwards',
                letterSpacing: '0.02em',
              }}
            >
              Jewellery crafted from 316L stainless steel — anti-tarnish, anti-rust, and
              designed to complement your boldest moments.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.85s', animationFillMode: 'forwards' }}
            >
              <button className="btn-crimson">
                <span>Explore Collection</span>
              </button>
              <button className="btn-outline-white">
                <span>Our Story</span>
              </button>
            </div>
          </div>

          {/* Floating product card */}
          <div
            className="hidden lg:block absolute bottom-16 right-6 w-64 p-4 animate-float opacity-0 animate-scale-in"
            style={{
              background: 'rgba(250,248,244,0.96)',
              backdropFilter: 'blur(16px)',
              animationDelay: '1.1s',
              animationFillMode: 'forwards',
            }}
          >
            <div className="flex gap-3 items-start">
              <img
                src="https://images.pexels.com/photos/39076774/pexels-photo-39076774.jpeg?auto=compress&cs=tinysrgb&h=200&w=200"
                alt="Serpent Hoop"
                className="w-16 h-16 object-cover"
              />
              <div>
                <p className="tag mb-1">New Drop</p>
                <p className="font-serif-display font-medium text-sm" style={{ color: 'var(--charcoal)' }}>
                  Serpent Hoop
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--gray-warm)' }}>316L Steel · ₹749</p>
                <div className="flex mt-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={9} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
          style={{ color: 'white' }}
        >
          <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
          <div className="w-px h-12 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.2)' }}>
            <div
              className="absolute top-0 w-full"
              style={{
                background: 'white',
                animation: 'scrollLine 1.8s ease-in-out infinite',
                height: '50%',
              }}
            />
          </div>
        </div>
        <style>{`
          @keyframes scrollLine {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }
        `}</style>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div
        className="py-4 overflow-hidden border-y"
        style={{ background: 'var(--crimson)', borderColor: 'var(--crimson-dark)' }}
      >
        <div className="marquee-inner">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="mx-6 text-xs tracking-[0.25em] uppercase font-medium"
              style={{ color: item === '·' ? 'var(--gold-light)' : 'rgba(255,255,255,0.9)' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── TRUST BADGES ── */}
      <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`reveal flex flex-col gap-4 p-6 border-l-2 group hover:border-crimson transition-colors duration-300`}
                style={{
                  borderLeftColor: 'var(--gold)',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <item.icon size={28} style={{ color: 'var(--crimson)' }} />
                <div>
                  <h3 className="font-medium text-sm tracking-wide mb-2" style={{ color: 'var(--charcoal)' }}>
                    {item.label}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--gray-warm)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      <section id="collections" className="py-24 px-6" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div className="reveal">
              <p className="tag mb-3">The Edit</p>
              <h2
                className="font-serif-display font-light leading-tight"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: 'var(--charcoal)' }}
              >
                Curated for the
                <br />
                <span className="italic" style={{ color: 'var(--crimson)' }}>Bold & Refined.</span>
              </h2>
            </div>
            <div className="reveal-right">
              <p className="text-xs leading-loose max-w-xs" style={{ color: 'var(--gray-warm)' }}>
                Each piece is individually inspected for finish quality, clasp strength, and anti-tarnish coating before it reaches you.
              </p>
              <button className="btn-outline mt-5">
                <span>View All Pieces</span>
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {COLLECTIONS.map((item, i) => (
              <div
                key={i}
                className={`reveal-scale product-card`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="img-zoom aspect-[3/4] relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="overlay">
                    <button className="overlay-btn btn-crimson text-white">
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                <div className="pt-4 pb-2">
                  <p className="tag mb-1">{item.category}</p>
                  <h3 className="font-serif-display font-medium text-base md:text-lg" style={{ color: 'var(--charcoal)' }}>
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-semibold" style={{ color: 'var(--crimson)' }}>
                      {item.price}
                    </span>
                    <div className="flex">
                      {[1,2,3,4,5].map(j => (
                        <Star key={j} size={10} fill="var(--gold)" color="var(--gold)" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND STORY SPLIT ── */}
      <section id="about" className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left – images */}
        <div className="relative overflow-hidden min-h-72 lg:min-h-auto">
          <img
            src="https://images.pexels.com/photos/8041327/pexels-photo-8041327.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
            alt="Woman wearing House of Elite Styles jewellery"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(91,14,14,0.65) 0%, transparent 50%)',
            }}
          />
          {/* Small inset image */}
          <div
            className="absolute bottom-8 right-8 w-36 h-36 shadow-2xl border-2 reveal-scale"
            style={{ borderColor: 'var(--gold)' }}
          >
            <img
              src="https://images.pexels.com/photos/20719544/pexels-photo-20719544.jpeg?auto=compress&cs=tinysrgb&h=300&w=300"
              alt="Silver earrings set"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right – copy */}
        <div
          className="flex flex-col justify-center px-10 md:px-16 py-20"
          style={{ background: 'var(--charcoal)' }}
        >
          <div className="reveal-right max-w-md">
            <p className="tag mb-4" style={{ color: 'var(--gold-light)' }}>Our Philosophy</p>
            <h2
              className="font-serif-display font-light leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'white' }}
            >
              Jewellery Made
              <br />
              to Last a
              <br />
              <span className="italic shimmer-gold">Lifetime.</span>
            </h2>
            <div
              className="w-10 h-px mb-6"
              style={{ background: 'var(--gold)' }}
            />
            <p
              className="text-sm leading-loose mb-5"
              style={{ color: 'rgba(255,255,255,0.65)', letterSpacing: '0.02em' }}
            >
              House of Elite Styles was born from a simple belief — beautiful jewellery shouldn't be a luxury only some can maintain. Stainless steel gave us the canvas: a metal that holds its shine through monsoons, sweat, and the everyday.
            </p>
            <p
              className="text-sm leading-loose mb-10"
              style={{ color: 'rgba(255,255,255,0.65)', letterSpacing: '0.02em' }}
            >
              Every clasp, every finish, every curve is deliberate. We design for women who move through the world with intention — and want jewellery that keeps up.
            </p>
            <button className="btn-outline-white self-start">
              <span>Read Our Story</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section
        className="py-16 px-6 border-y"
        style={{ background: 'var(--cream)', borderColor: 'var(--gray-light)' }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="reveal flex flex-col items-center text-center gap-1"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="stat-number">{stat.value}</span>
              <span
                className="text-[10px] tracking-widest uppercase"
                style={{ color: 'var(--gray-warm)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDITORIAL STRIP ── */}
      <section className="py-28 px-6" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="ornament-divider mb-16 reveal">
            <span
              className="font-serif-display italic text-3xl md:text-4xl font-light text-center"
              style={{ color: 'var(--charcoal)' }}
            >
              Worn with intention. Chosen for life.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: 'https://images.pexels.com/photos/16554912/pexels-photo-16554912.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
                label: 'OUR PHILOSOPHY',
                text: 'Every piece begins with a vision shaped by artisans who transform raw materials into refined expressions of elegance.',
              },
              {
                img: 'https://images.pexels.com/photos/29579377/pexels-photo-29579377.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
                label: 'ATTENTION TO DETAIL',
                text: 'From the first sketch to the final polish, every detail is considered to ensure exceptional quality and timeless design.',
              },
              {
                img: 'https://images.pexels.com/photos/9430468/pexels-photo-9430468.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
                label: 'ENDURING CRAFT',
                text: 'We use the same grade of steel found in surgical instruments. This is jewellery built to outlast trends.',
              },
            ].map((item, i) => (
              <div key={i} className={`reveal-scale`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="img-zoom aspect-[3/4] mb-5">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                </div>
                <p className="tag mb-2">{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--gray-warm)' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="craft"
        className="py-24 px-6"
        style={{ background: 'var(--crimson)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p
              className="text-[10px] tracking-[0.3em] uppercase font-medium mb-3"
              style={{ color: 'var(--gold-light)' }}
            >
              The Process
            </p>
            <h2
              className="font-serif-display font-light"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white' }}
            >
              From Steel to Statement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {[
              {
                icon: Gem,
                step: '01',
                title: 'Source',
                desc: 'We source 316L surgical-grade stainless steel — the same metal used in medical implants for its bio-compatibility and resilience.',
              },
              {
                icon: Crown,
                step: '02',
                title: 'Craft',
                desc: 'Skilled artisans hand-finish every piece with anti-tarnish plating and precision-cut details that catch the light perfectly.',
              },
              {
                icon: Gift,
                step: '03',
                title: 'Deliver',
                desc: 'Each order arrives in our signature luxury box — sealed with a ribbon and accompanied by a care card.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal text-center flex flex-col items-center gap-5"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border"
                  style={{ borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)' }}
                >
                  <item.icon size={24} style={{ color: 'var(--gold-light)' }} />
                </div>
                <div>
                  <p
                    className="font-serif-display text-5xl font-light mb-2 opacity-25"
                    style={{ color: 'white' }}
                  >
                    {item.step}
                  </p>
                  <h3
                    className="font-serif-display text-xl font-medium mb-3"
                    style={{ color: 'white' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs leading-loose" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="tag mb-3">What They Say</p>
            <h2
              className="font-serif-display font-light"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--charcoal)' }}
            >
              Loved by thousands
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Priya M.',
                location: 'Mumbai',
                stars: 5,
                text: '"I\'ve worn my HOES bracelet every single day for 8 months — through the gym, the beach, and monsoon season. Not a single scratch or tarnish. Absolute quality."',
                img: 'https://images.pexels.com/photos/20507408/pexels-photo-20507408.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
              },
              {
                name: 'Ananya R.',
                location: 'Bangalore',
                stars: 5,
                text: '"The packaging alone made me gasp. Then I saw the jewellery. The Serpent Hoops are the most complimented piece I own. I\'ve already ordered three more sets."',
                img: 'https://images.pexels.com/photos/9430468/pexels-photo-9430468.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
              },
              {
                name: 'Kavitha D.',
                location: 'Chennai',
                stars: 5,
                text: '"Finally a brand that understands sensitive skin. My gold allergy means I could never wear fashion jewellery — until these. Completely skin-safe and stunning."',
                img: 'https://images.pexels.com/photos/31459469/pexels-photo-31459469.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="reveal p-7 border flex flex-col gap-4"
                style={{
                  borderColor: 'var(--gray-light)',
                  transitionDelay: `${i * 0.12}s`,
                  background: 'white',
                }}
              >
                <div className="flex">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={12} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <p className="text-xs leading-loose italic" style={{ color: 'var(--charcoal)', opacity: 0.75 }}>
                  {t.text}
                </p>
                <div className="flex items-center gap-3 mt-auto pt-3 border-t" style={{ borderColor: 'var(--gray-light)' }}>
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--charcoal)' }}>{t.name}</p>
                    <p className="text-[10px]" style={{ color: 'var(--gray-warm)' }}>{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section
        className="relative overflow-hidden py-28 px-6"
        style={{ background: 'var(--charcoal)' }}
      >
        {/* BG image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/20647557/pexels-photo-20647557.jpeg?auto=compress&cs=tinysrgb&h=800&w=1400"
            alt="Jewellery background"
            className="w-full h-full object-cover opacity-15"
            style={{ objectPosition: 'center' }}
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center reveal">
          <p
            className="text-[10px] tracking-[0.3em] uppercase font-medium mb-4"
            style={{ color: 'var(--gold-light)' }}
          >
            Join the Inner Circle
          </p>
          <h2
            className="font-serif-display font-light mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white' }}
          >
            First Access. Every Drop.
          </h2>
          <p className="text-xs leading-loose mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Be the first to discover new collections, exclusive members-only prices, and limited drops — straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border px-5 py-4 text-xs text-white focus:outline-none"
              style={{
                borderColor: 'rgba(255,255,255,0.25)',
                letterSpacing: '0.05em',
              }}
            />
            <button
              className="px-7 py-4 text-white text-xs font-semibold tracking-widest uppercase whitespace-nowrap transition-all duration-300 hover:opacity-90"
              style={{ background: 'var(--crimson)' }}
            >
              Subscribe
            </button>
          </div>
          <p className="text-[10px] mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="pt-16 pb-8 px-6 border-t"
        style={{ background: '#0F0F0F', borderColor: '#1F1F1F' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Diamond size={14} style={{ color: 'var(--gold)' }} />
                <span
                  className="font-serif-display tracking-[0.22em] text-sm font-medium uppercase"
                  style={{ color: 'white' }}
                >
                  House of Elite Styles
                </span>
              </div>
              <p className="text-xs leading-loose mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Premium stainless steel jewellery built for the bold. Anti-tarnish. Skin-safe. Made to last.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 border flex items-center justify-center transition-colors duration-200 hover:border-crimson"
                    style={{ borderColor: '#2D2D2D', color: 'rgba(255,255,255,0.5)' }}
                    aria-label="Social media"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              {
                title: 'Collections',
                links: ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Gift Sets'],
              },
              {
                title: 'Company',
                links: ['Our Story', 'Craftsmanship', 'FAQ', 'Contact', 'Shipping & Returns'],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4
                  className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-4"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs transition-colors duration-200 hover:text-white"
                        style={{ color: 'rgba(255,255,255,0.35)' }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t text-center"
            style={{ borderColor: '#1F1F1F' }}
          >
            <p className="text-[10px] tracking-wide" style={{ color: 'rgba(255,255,255,0.25)' }}>
              COPYRIGHT &copy; 2026 HOUSE OF ELITE STYLES &nbsp;·&nbsp; ALL RIGHTS RESERVED
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms', 'Refund Policy'].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-[10px] tracking-wide transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

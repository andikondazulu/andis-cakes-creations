'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Fraunces, Manrope } from 'next/font/google';
import styles from './page.module.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});


const BUSINESS_EMAIL = 'andikondazulu@gmail.com';
const PHONE_DISPLAY = '+260 77 057 8995';
const PHONE_DIGITS = '260770578995';

const FACEBOOK_URL = 'https://www.facebook.com/andiscakescreations/';
const WHATSAPP_URL = `https://wa.me/${PHONE_DIGITS}`;


function ScallopDivider({ flip = false }) {
  return (
    <div
      className={`${styles.scallop} ${flip ? styles.scallopFlip : ''}`}
      aria-hidden="true"
    />
  );
}


function CakeMark() {
  return (
    <svg
      className={styles.cakeMark}
      viewBox="0 0 220 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a three-tier celebration cake"
    >
      <ellipse cx="110" cy="222" rx="70" ry="10" fill="var(--color-plum)" opacity="0.08" />
      <rect x="52" y="150" width="116" height="52" rx="10" fill="var(--color-pink)" stroke="var(--color-plum)" strokeWidth="2.5" />
      <path d="M52 158c8-8 16 8 24 0s16-8 24 0 16 8 24 0 16-8 24 0" stroke="var(--color-plum)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="68" y="102" width="84" height="46" rx="9" fill="var(--color-gold)" opacity="0.55" stroke="var(--color-plum)" strokeWidth="2.5" />
      <path d="M68 110c6-7 13 7 21 0s13-7 21 0 13 7 21 0 13-7 21 0" stroke="var(--color-plum)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="84" y="58" width="52" height="42" rx="8" fill="var(--color-lavender)" opacity="0.65" stroke="var(--color-plum)" strokeWidth="2.5" />
      <path d="M84 66c5-6 11 6 18 0s11-6 18 0 11 6 18 0" stroke="var(--color-plum)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M110 58v-18" stroke="var(--color-plum)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="110" cy="32" r="6" fill="var(--color-gold)" stroke="var(--color-plum)" strokeWidth="2.5" />
      <circle cx="76" cy="128" r="3" fill="var(--color-plum)" opacity="0.5" />
      <circle cx="144" cy="128" r="3" fill="var(--color-plum)" opacity="0.5" />
      <circle cx="96" cy="180" r="3" fill="var(--color-plum)" opacity="0.4" />
      <circle cx="128" cy="180" r="3" fill="var(--color-plum)" opacity="0.4" />
    </svg>
  );
}

const SERVICES = [
  {
    title: 'Custom Cakes',
    desc: 'Wedding, birthday,kitchen parties and celebration cakes designed around your flavours, colours and story.',
    icon: (
      <path d="M6 20h20v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6Zm0-6h20v6H6v-6Zm4-8c1-2 3-2 4 0 1-2 3-2 4 0 .8 1.4.2 3-.6 4h-6.8c-.8-1-1.4-2.6-.6-4Z" />
    ),
  },
  {
    title: 'Pastries & Desserts',
    desc: 'Cupcakes,charcuterie boards, tarts, cookies and dessert tables baked fresh for every occasion, big or small.',
    icon: (
      <path d="M16 6c2.2 0 4 1.8 4 4 0 .7-.2 1.3-.5 1.9C21 12.6 22 14.2 22 16c0 3-2.7 4-6 4s-6-1-6-4c0-1.8 1-3.4 2.5-4.1A4 4 0 0 1 12 10c0-2.2 1.8-4 4-4Zm-4.5 16h9a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1 0-3Z" />
    ),
  },
  {
    title: 'Event Catering',
    desc: 'Full catering for weddings,birthdays,anniversaries, corporate functions and private parties, plated or grazing-style.',
    icon: (
      <path d="M9 4v9a3 3 0 0 0 3 3v10M9 4v6M12 4v6M15 4v6M15 4v9a3 3 0 0 1-3 3M24 4c-3 2-3 6-3 9 0 2 1 3 3 3v10" />
    ),
  },
  {
    title: 'Event Planning',
    desc: 'Start to Finish  event planning and coordination so the day runs exactly as you have always imagined it.',
    icon: (
      <path d="M8 5h16v22H8V5Zm0 6h16M12 3v4M20 3v4M12 17h2M18 17h2M12 21h2M18 21h2" />
    ),
  },
  {
    title: 'Event Decoration',
    desc: 'Table styling, backdrops,ceiling decor,traditional decor and floral accents in soft, considered colour palettes of your choice.',
    icon: (
      <path d="M16 4c2 3 2 6 0 8-2-2-2-5 0-8ZM7 14c3-1 6 0 7 2-3 1-6 0-7-2Zm18 0c-3-1-6 0-7 2 3 1 6 0 7-2ZM16 12c4 4 6 9 6 14H10c0-5 2-10 6-14Z" />
    ),
  },
];


const GALLERY = [
  {
    label: 'Wedding cake', tone: 'pink', image: '/images/gallery-wedding-cake.jpg',
    slides: [
      '/images/gallery-wedding-cake-2.jpg',
      '/images/gallery-wedding-cake-3.jpg',
      '/images/gallery-wedding-cake-4.jpg',
      '/images/gallery-wedding-cake-5.jpg',
    ],
  },
  {
    label: 'Custom cakes', tone: 'gold', image: '/images/gallery-custom-cakes.jpg',
    slides: [
      '/images/gallery-custom-cakes-2.jpg',
      '/images/gallery-custom-cakes-3.jpg',
      '/images/gallery-custom-cakes-4.jpg',
      '/images/gallery-custom-cakes-5.jpg',
    ],
  },
  {
    label: 'Wedding deco', tone: 'lavender', image: '/images/gallery-wedding-deco.jpg',
    slides: [
      '/images/gallery-wedding-deco-2.jpg',
      '/images/gallery-wedding-deco-3.jpg',
      '/images/gallery-wedding-deco-4.jpg',
      '/images/gallery-wedding-deco-5.jpg',
    ],
  },
  {
    label: 'Event catering', tone: 'plum', image: '/images/gallery-event-catering.jpg',
    slides: [
      '/images/gallery-event-catering-2.jpg',
      '/images/gallery-event-catering-3.jpg',
      '/images/gallery-event-catering-4.jpg',
      '/images/gallery-event-catering-5.jpg',
    ],
  },
  {
    label: 'Pastry making', tone: 'gold', image: '/images/gallery-pastries.jpg',
    slides: [
      '/images/gallery-pastries-2.jpg',
      '/images/gallery-pastries-3.jpg',
      '/images/gallery-pastries-4.jpg',
      '/images/gallery-pastries-5.jpg',
    ],
  },
  {
    label: ' Snack Table', tone: 'pink', image: '/images/gallery-snack-table.jpg',
    slides: [
      '/images/gallery-snack-table-2.jpg',
      '/images/gallery-snack-table-3.jpg',
      '/images/gallery-snack-table-4.jpg',
      '/images/gallery-snack-table-5.jpg',
    ],
  },
];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  const [orderForm, setOrderForm] = useState({
    name: '', email: '', phone: '', service: 'Custom Cake',
    date: '', guests: '', budget: 'K500 – K1,500', details: '',
  });
  const [orderStatus, setOrderStatus] = useState('idle');

  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [enquiryStatus, setEnquiryStatus] = useState('idle');

  const [lightbox, setLightbox] = useState(null);

  function openLightbox(item) {
    setLightbox({ label: item.label, images: item.slides, index: 0 });
  }
  function closeLightbox() {
    setLightbox(null);
  }
  function nextSlide() {
    setLightbox((prev) => prev && { ...prev, index: (prev.index + 1) % prev.images.length });
  }
  function prevSlide() {
    setLightbox((prev) => prev && { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length });
  }

  useEffect(() => {
    if (!lightbox) return;
    function handleKey(e) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  function updateOrder(field, value) {
    setOrderForm((prev) => ({ ...prev, [field]: value }));
  }
  function updateEnquiry(field, value) {
    setEnquiryForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleOrderSubmit(e) {
    e.preventDefault();
    setOrderStatus('sending');
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderForm),
      });
      if (!res.ok) throw new Error('Request failed');
      setOrderStatus('sent');
      setOrderForm({ name: '', email: '', phone: '', service: 'Custom Cake', date: '', guests: '', budget: 'K500 – K1,500', details: '' });
    } catch {
      setOrderStatus('error');
    }
  }

  async function handleEnquirySubmit(e) {
    e.preventDefault();
    setEnquiryStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiryForm),
      });
      if (!res.ok) throw new Error('Request failed');
      setEnquiryStatus('sent');
      setEnquiryForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setEnquiryStatus('error');
    }
  }

  return (
    <div className={`${styles.page} ${fraunces.variable} ${manrope.variable}`}>
     
      <header className={styles.nav}>
        <a href="#home" className={styles.brand}>
          Andi&rsquo;s <span className={styles.brandAccent}>Cakes &amp; Creations</span>
        </a>

        <nav className={styles.navLinks} aria-label="Primary">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#order">Order</a>
          <a href="#enquire">Enquire</a>
          <a href="#footer" className={styles.navCta}>Find us</a>
        </nav>

        <button
          className={`${styles.navToggle} ${navOpen ? styles.navToggleOpen : ''}`}
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </header>

      <div className={`${styles.mobileMenu} ${navOpen ? styles.mobileMenuOpen : ''}`}>
        <nav aria-label="Mobile" onClick={() => setNavOpen(false)}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#order">Order a service</a>
          <a href="#enquire">Send an enquiry</a>
          <a href="#footer">Find us</a>
        </nav>
      </div>

     
      <section id="home" className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Lusaka, Zambia &middot; Baking &amp; Events</p>
          <h1 className={styles.heroTitle}>
            Cakes and celebrations, <em>the secret is always love </em>
          </h1>

           

          <p className={styles.heroSub}>
            Custom cakes, pastries and full event styling for the moments
            that matter the most,from your intimate birthday celebrations to your big wedding day,
            made and planned right here in Lusaka.
          </p>
          <div className={styles.heroActions}>
            <a href="#order" className={styles.btnPrimary}>Book us for an event</a>
            <a href="#services" className={styles.btnGhost}>See what we do</a>
          </div>
        </div>
        <div className={styles.heroArt} aria-hidden="true">
          <div className={styles.heroBlob}>
            <Image
              src="/images/hero.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 320px, 320px"
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      <ScallopDivider />


      <section id="about" className={styles.about}>
        <div className={styles.ownerImageWrap}>
          
          <div className={styles.ownerImage}>
            <Image
              src="/images/owner.jpg"
              alt="Portrait of Andikonda, founder of Andi's Cakes & Creations"
              fill
              sizes="(max-width: 860px) 280px, 280px"
              className={styles.ownerImagePic}
            />
          </div>
        </div>
        <div className={styles.ownerText}>
          <p className={styles.eyebrow}>The founder</p>
          <h2 className={styles.sectionTitle}>Meet Andi</h2>
          <p className={styles.passion}>
            I started Andi&rsquo;s Cakes &amp; Creations because I believe
            the best celebrations are the ones that are filled with love, where
            the cakes,pastries and food taste as good as they look, and every detail of the day
            has been thought through with care. Every order, big or small,
            gets the same attention."From mine to yours."
          </p>
          <p className={styles.ownerSign}>&mdash; Andikonda, Founder &amp; Head Baker</p>
        </div>
      </section>

      

      <ScallopDivider flip />

      <section id="services" className={styles.services}>
        <p className={styles.eyebrow}>What we offer</p>
        <h2 className={styles.sectionTitle}>Services made for your occasion</h2>

        <div className={styles.serviceGrid}>
          {SERVICES.map((s) => (
            <article key={s.title} className={styles.serviceCard}>
              <svg className={styles.serviceIcon} viewBox="0 0 32 32" fill="none" stroke="var(--color-plum)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {s.icon}
              </svg>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <ScallopDivider />

      <section id="gallery" className={styles.gallery}>
        <p className={styles.eyebrow}>A peek at our creations</p>
        <h2 className={styles.sectionTitle}>Recent bakes &amp; events</h2>

        <div className={styles.galleryGrid}>
          {GALLERY.map((g) => (
            <button
              key={g.label}
              type="button"
              className={styles.galleryTile}
              onClick={() => openLightbox(g)}
              aria-label={`View more photos of ${g.label.trim()}`}
            >
              <Image
                src={g.image}
                alt={g.label}
                fill
                sizes="(max-width: 700px) 50vw, 33vw"
                className={styles.galleryImg}
              />
              <span className={styles.galleryCaption}>{g.label}</span>
            </button>
          ))}
        </div>
      </section>

      <ScallopDivider flip />


      <section id="order" className={styles.order}>
        <div className={styles.formIntro}>
          <p className={styles.eyebrow}>Ready to book?</p>
          <h2 className={styles.sectionTitle}>Order a service</h2>
          <p className={styles.formLead}>
            Tell us what you need and a rough sense of your event, and
            we&rsquo;ll get back to you with pricing and the next steps.
          </p>
        </div>

        <form className={styles.formCard} onSubmit={handleOrderSubmit}>
          <div className={styles.formRow}>
            <label>
              Full name
              <input required type="text" value={orderForm.name}
                onChange={(e) => updateOrder('name', e.target.value)} />
            </label>
            <label>
              Email
              <input required type="email" value={orderForm.email}
                onChange={(e) => updateOrder('email', e.target.value)} />
            </label>
          </div>

          <div className={styles.formRow}>
            <label>
              Phone number
              <input required type="tel" value={orderForm.phone}
                onChange={(e) => updateOrder('phone', e.target.value)} />
            </label>
            <label>
              Service needed
              <select value={orderForm.service} onChange={(e) => updateOrder('service', e.target.value)}>
                <option>Custom Cake</option>
                <option>Wedding Cake</option>
                <option>Pastries &amp; Desserts</option>
                <option>Event Catering</option>
                <option>Event Planning</option>
                <option>Event Decoration</option>
                <option>Full Package (cake + pastries/desserts(optional) + catering + decor + event planner)</option>
              </select>
            </label>
          </div>

          <div className={styles.formRow}>
            <label>
              Event date
              <input type="date" value={orderForm.date}
                onChange={(e) => updateOrder('date', e.target.value)} />
            </label>
            <label>
              Number of guests
              <input type="number" min="1" placeholder="e.g. 60" value={orderForm.guests}
                onChange={(e) => updateOrder('guests', e.target.value)} />
            </label>
          </div>

          <label className={styles.formFull}>
            Budget range
            <select value={orderForm.budget} onChange={(e) => updateOrder('budget', e.target.value)}>
              <option>Under K500</option>
              <option>K500 – K1,500</option>
              <option>K1,500 – K4,000</option>
              <option>K4,000 – K10,000</option>
              <option>K10,000+</option>
              <option>Not sure yet</option>
            </select>
          </label>

          <label className={styles.formFull}>
            Tell us about your order
            <textarea rows={4} placeholder="Flavours, theme, colours, venue, anything else we should know..."
              value={orderForm.details} onChange={(e) => updateOrder('details', e.target.value)} />
          </label>

          <button type="submit" className={styles.btnPrimary} disabled={orderStatus === 'sending'}>
            {orderStatus === 'sending' ? 'Sending…' : 'Send order request'}
          </button>

          {orderStatus === 'sent' && (
            <p className={styles.formSuccess} role="status">
              Thank you! Your order request has been sent &mdash; we&rsquo;ll be in touch shortly.
            </p>
          )}
          {orderStatus === 'error' && (
            <p className={styles.formError} role="alert">
              Something went wrong sending your request. Please try again, or reach us directly using the contact details below.
            </p>
          )}
        </form>
      </section>

      <ScallopDivider />


      <section id="enquire" className={styles.enquire}>
        <div className={styles.formIntro}>
          <p className={styles.eyebrow}>Not ready to order yet?</p>
          <h2 className={styles.sectionTitle}>Send us an enquiry</h2>
          <p className={styles.formLead}>
            Got a question about flavours, availability or pricing?
            Send a message and we will reply by email or phone call.
          </p>
        </div>

        <form className={styles.formCard} onSubmit={handleEnquirySubmit}>
          <div className={styles.formRow}>
            <label>
              Name
              <input required type="text" value={enquiryForm.name}
                onChange={(e) => updateEnquiry('name', e.target.value)} />
            </label>
            <label>
              Email
              <input required type="email" value={enquiryForm.email}
                onChange={(e) => updateEnquiry('email', e.target.value)} />
            </label>
          </div>

          <label className={styles.formFull}>
            Subject
            <input type="text" placeholder="e.g. Wedding cake availability for June"
              value={enquiryForm.subject} onChange={(e) => updateEnquiry('subject', e.target.value)} />
          </label>

          <label className={styles.formFull}>
            Message
            <textarea required rows={4} value={enquiryForm.message}
              onChange={(e) => updateEnquiry('message', e.target.value)} />
          </label>

          <button type="submit" className={styles.btnPrimary} disabled={enquiryStatus === 'sending'}>
            {enquiryStatus === 'sending' ? 'Sending…' : 'Send enquiry'}
          </button>

          {enquiryStatus === 'sent' && (
            <p className={styles.formSuccess} role="status">
              Thanks for reaching out! We&rsquo;ll reply to your email soon.
            </p>
          )}
          {enquiryStatus === 'error' && (
            <p className={styles.formError} role="alert">
              Something went wrong sending your message. Please try again, or use the contact details below.
            </p>
          )}
        </form>
      </section>


      <footer id="footer" className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <p className={styles.footerBrand}>Andi&rsquo;s Cakes &amp; Creations</p>
            <p className={styles.footerTagline}>Baking, catering, pastries &amp; events in Lusaka, Zambia.</p>
          </div>

          <div>
            <h3>Find us</h3>

            <p>Lusaka along Munali Road, Zambia</p>
            <p>Orders by delivery &amp; collection</p>
          </div>

          <div>
            <h3>Contact</h3>
            <p><a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a></p>
            <p><a href={`tel:+${PHONE_DIGITS}`}>{PHONE_DISPLAY}</a></p>
          </div>

          <div>
            <h3>Hours</h3>
            <p>Mon &ndash; Fri: 08:00 &ndash; 18:00</p>
            <p>Sat: 09:00 &ndash; 16:00</p>
            <p>Sun: Closed (events by arrangement)</p>
          </div>

          <div>
            <h3>Follow Our Socials</h3>
            <div className={styles.socials}>
              <span className={styles.socialIcon} aria-label="Instagram (coming soon)" title="Instagram page coming soon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>
              </span>
              <a className={styles.socialIcon} href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.5c0-.6.4-1 .9-1H16V8Z" /></svg>
              </a>
              <a className={styles.socialIcon} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 17l-2 4 4-2c1.6.9 3.3 1.4 5 1.4 5 0 9-4 9-9s-4-9-9-9-9 4-9 9c0 1.9.6 3.6 1.7 5Z" /><path d="M9 10.5c0 3 2.5 5.5 5.5 5.5" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Andi&rsquo;s Cakes &amp; Creations. All rights reserved.</p>
        </div>
      </footer>

      {lightbox && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div
            className={styles.lightboxContent}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.label} photo gallery`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              &times;
            </button>

            <div className={styles.lightboxImageWrap}>
              <Image
                key={lightbox.images[lightbox.index]}
                src={lightbox.images[lightbox.index]}
                alt={`${lightbox.label} photo ${lightbox.index + 1} of ${lightbox.images.length}`}
                fill
                sizes="(max-width: 900px) 90vw, 800px"
                className={styles.lightboxImg}
                priority
              />

              <button
                type="button"
                className={`${styles.lightboxArrow} ${styles.lightboxArrowLeft}`}
                onClick={prevSlide}
                aria-label="Previous photo"
              >
                &#8249;
              </button>
              <button
                type="button"
                className={`${styles.lightboxArrow} ${styles.lightboxArrowRight}`}
                onClick={nextSlide}
                aria-label="Next photo"
              >
                &#8250;
              </button>
            </div>

            <div className={styles.lightboxFooter}>
              <span>{lightbox.label.trim()}</span>
              <span>{lightbox.index + 1} / {lightbox.images.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
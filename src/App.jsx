// src/App.jsx
import React, { useEffect, useState } from "react";
import { I18nProvider, useI18n, AVAILABLE_LANGS } from "./i18n";

import Hero from "./components/Hero";
import Products from "./components/Products";
import Quality from "./components/Quality";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

// стили
import "./styles/header.css";
import "./styles/sections.css";
import "./styles/hero.css";
import "./styles/quality.css";
import "./styles/certificates.css";

const LANG_LABEL = {
  en: "EN",
  ru: "RU",
  de: "DE",
  es: "ES",
  fr: "FR",
  it: "IT",
};


function AppInner() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { t, lang, setLang } = useI18n();

  useEffect(() => {
    const ids = ["hero", "products", "quality", "certificates", "about"];

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const links = Array.from(document.querySelectorAll(".nav .nav-link"));

    sections.forEach((section) => {
      section.classList.add("section-anim");
    });

    const setActive = (id) => {
      if (!id) return;
      links.forEach((a) => a.classList.remove("active"));
      const link = links.find((a) => a.getAttribute("href") === `#${id}`);
      if (link) link.classList.add("active");
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    sections.forEach((s) => io.observe(s));

    const headerEl = document.getElementById("site-header");

    const handleScroll = () => {
      if (headerEl) {
        if (window.scrollY > 10) {
          headerEl.classList.add("header-scrolled");
        } else {
          headerEl.classList.remove("header-scrolled");
        }
      }

      const headerOffset = headerEl ? headerEl.offsetHeight + 12 : 0;

      let currentId = null;
      let bestDelta = Infinity;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();

        if (rect.bottom <= headerOffset || rect.top >= window.innerHeight) {
          return;
        }

        const delta = Math.abs(rect.top - headerOffset);

        if (delta < bestDelta) {
          bestDelta = delta;
          currentId = sec.id;
        }
      });

      if (currentId) {
        setActive(currentId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const initialHash = window.location.hash.replace("#", "");
    if (initialHash) {
      const target = document.getElementById(initialHash);
      if (target) {
        target.classList.add("section-visible");
        setActive(initialHash);
      }
    }

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
    setLangOpen(false);
  };

  const handleLangSelect = (code) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <>
      <header
        id="site-header"
        className={`header ${menuOpen ? "header--menu-open" : ""}`}
      >
        <div className="header-inner">
          {/* ЛОГОТИП */}
          <a href="#hero" className="logo" aria-label="Umbrella Shop">
            <img
              src="/umbrella-logo.png"
              alt="Umbrella logo"
              className="logo-img"
            />
            <span className="logo-title">
              <span className="logo-red">UMBRELLA</span>&nbsp;SHOP
            </span>
          </a>

          {/* ЯЗЫКОВОЙ СВИЧЕР ДЛЯ МОБИЛКИ — в правом верхнем углу бургера */}
          {menuOpen && (
            <div className="nav-lang-floating-mobile">
              <button
                type="button"
                className="lang-btn-main lang-btn-main--mobile"
                onClick={() => setLangOpen((v) => !v)}
              >
                <span className="lang-flag">
                  <img
                    src={`/img/flags/${lang}.svg`}
                    alt={LANG_LABEL[lang] || lang.toUpperCase()}
                  />
                </span>
                <span className="lang-label">
                  {LANG_LABEL[lang] || lang.toUpperCase()}
                </span>
                <span className="lang-caret">▾</span>
              </button>

              {langOpen && (
                <div className="lang-dropdown lang-dropdown--mobile">
                  {AVAILABLE_LANGS.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      className={
                        l.code === lang
                          ? "lang-option lang-option--active"
                          : "lang-option"
                      }
                      onClick={() => handleLangSelect(l.code)}
                    >
                      <span className="lang-option-flag">
                        <img
                          src={`/img/flags/${l.code}.svg`}
                          alt={LANG_LABEL[l.code] || l.label}
                        />
                      </span>
                      <span className="lang-option-label">
                        {LANG_LABEL[l.code] || l.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* НАВИГАЦИЯ */}
          <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
            <a href="#hero" className="nav-link" onClick={handleNavClick}>
              {t("nav.main") ?? "Main"}
            </a>
            <a href="#products" className="nav-link" onClick={handleNavClick}>
              {t("nav.products") ?? "Products"}
            </a>
            <a href="#quality" className="nav-link" onClick={handleNavClick}>
              {t("nav.quality") ?? "Quality"}
            </a>
            <a
              href="#certificates"
              className="nav-link"
              onClick={handleNavClick}
            >
              {t("nav.certificates") ?? "Certificates"}
            </a>
            <a href="#about" className="nav-link" onClick={handleNavClick}>
              {t("nav.about") ?? "About us"}
            </a>
          </nav>

          {/* БУРГЕР */}
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? "nav-toggle--open" : ""}`}
            aria-label="Toggle navigation"
            onClick={() => {
              setMenuOpen((v) => !v);
              setLangOpen(false);
            }}
          >
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
          </button>

          {/* ДЕСКТОПНЫЙ ЯЗЫКОВОЙ СВИЧЕР (право хедера) */}
          <div className="header-lang-floating">
            <button
              type="button"
              className="lang-btn-main"
              onClick={() => setLangOpen((v) => !v)}
            >
              <span className="lang-flag">
                <img
                  src={`/img/flags/${lang}.svg`}
                  alt={LANG_LABEL[lang] || lang.toUpperCase()}
                />
              </span>
              <span className="lang-label">
                {LANG_LABEL[lang] || lang.toUpperCase()}
              </span>
              <span className="lang-caret">▾</span>
            </button>

            {langOpen && (
              <div className="lang-dropdown">
                {AVAILABLE_LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    className={
                      l.code === lang
                        ? "lang-option lang-option--active"
                        : "lang-option"
                    }
                    onClick={() => handleLangSelect(l.code)}
                  >
                    <span className="lang-option-flag">
                      <img
                        src={`/img/flags/${l.code}.svg`}
                        alt={LANG_LABEL[l.code] || l.label}
                      />
                    </span>
                    <span className="lang-option-label">
                      {LANG_LABEL[l.code] || l.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Products />
        <Quality />
        <Certificates />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppInner />
    </I18nProvider>
  );
}

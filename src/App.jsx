import React, { useEffect } from "react";

import Hero from "./components/Hero";
import Products from "./components/Products";
import Quality from "./components/Quality";
import Certificates from "./components/Certificates";
import About from "./components/About";
import Footer from "./components/Footer";

// стили
import "./styles/header.css";
import "./styles/sections.css";
import "./styles/hero.css";
import "./styles/quality.css";
import "./styles/certificates.css";

export default function App() {
  useEffect(() => {
    const ids = ["hero", "products", "quality", "certificates", "about"];

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const links = Array.from(document.querySelectorAll(".nav .nav-link"));

    // базовый класс для анимации секций
    sections.forEach((section) => {
      section.classList.add("section-anim");
    });

    const setActive = (id) => {
      if (!id) return;
      links.forEach((a) => a.classList.remove("active"));
      const link = links.find((a) => a.getAttribute("href") === `#${id}`);
      if (link) link.classList.add("active");
    };

    // ------------------------------
    // IntersectionObserver: только анимация появления
    // ------------------------------
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

    // ------------------------------
    // Живой header + логика активного пункта меню по скроллу
    // ------------------------------
    const headerEl = document.getElementById("site-header");

    const handleScroll = () => {
      // тень / blur у хедера
      if (headerEl) {
        if (window.scrollY > 10) {
          headerEl.classList.add("header-scrolled");
        } else {
          headerEl.classList.remove("header-scrolled");
        }
      }

      // расчет, какая секция сейчас "главная" в вьюпорте
      const headerOffset = headerEl ? headerEl.offsetHeight + 12 : 0;

      let currentId = null;
      let bestDelta = Infinity;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();

        // игнорируем секции, которые вообще вне экрана
        if (rect.bottom <= headerOffset || rect.top >= window.innerHeight) {
          return;
        }

        // чем ближе верх секции к низу хедера — тем "активнее" она
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

    // Если зашли сразу по якорю (#products и т.п.) — подсветим пункт
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

  return (
    <>
      <header id="site-header" className="header">
        <div className="header-inner">
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

          <nav className="nav">
            <a href="#hero" className="nav-link">
              Main
            </a>
            <a href="#products" className="nav-link">
              Products
            </a>
            <a href="#quality" className="nav-link">
              Quality
            </a>
            <a href="#certificates" className="nav-link">
              Certificates
            </a>
            <a href="#about" className="nav-link">
              About us
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Products />
        <Quality />
        <Certificates />
        <About />
      </main>

      <Footer />
    </>
  );
}

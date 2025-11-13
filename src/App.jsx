import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";

// стили
import "./styles/header.css";
import "./styles/sections.css";
import "./styles/hero.css";

export default function App() {
  // Автоподсветка активного пункта меню
  useEffect(() => {
    const ids = ["hero", "products", "quality", "certificates", "about"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const links = Array.from(
      document.querySelectorAll(".nav .nav-link")
    );

    const setActive = (id) => {
      links.forEach((a) => a.classList.remove("active"));
      const link = links.find(
        (a) => a.getAttribute("href") === `#${id}`
      );
      if (link) link.classList.add("active");
    };

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        threshold: 0.5,
        rootMargin: "-10% 0px -40% 0px",
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header id="site-header" className="header">
        <div className="header-inner">
          <a
            href="#hero"
            className="logo"
            aria-label="Umbrella Shop"
          >
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

        {/* заглушки под будущие секции, чтобы меню работало */}
        <section id="quality"></section>
        <section id="certificates"></section>

        <About />
      </main>

      <Footer />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { portfolio as p } from "@/data/portfolio";
import { Icon } from "@/components/icon";
import { ScrollButton } from "@/components/scroll-button";

export function SiteHeader() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = ["top", ...p.nav.map((item) => item.id), "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.2, 0.5] },
    );
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return <header className="site-header">
    <div className="container header-inner">
      <ScrollButton to="top" className="brand">
        <span className="brand-mark">{p.initials}<span>.</span></span>
        <span className="brand-name">{p.name}</span>
      </ScrollButton>
      <nav aria-label={p.ui.navigation}>
        <div className="nav-items">
          {p.nav.map((item) => <ScrollButton key={item.id} to={item.id} className={active === item.id ? "is-active" : ""} ariaCurrent={active === item.id ? "location" : undefined} onActivate={() => setActive(item.id)}>{item.label}</ScrollButton>)}
        </div>
        <ScrollButton to="contact" className={`nav-contact ${active === "contact" ? "is-active" : ""}`} ariaCurrent={active === "contact" ? "location" : undefined} onActivate={() => setActive("contact")}>
          {p.ui.contact}<Icon name="arrow"/>
        </ScrollButton>
      </nav>
    </div>
  </header>;
}

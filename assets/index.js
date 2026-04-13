/* ─── SINGLE-SOURCE NAVIGATION CONFIG ───────────────────── */
const NAV_CONFIG = {
  logo: {
    src: "./assets/National_University_of_Singapore-Logo.png",
    href: "index.html",
    alt: "NUS Logo",
  },

  items: [
    {
      label: "Home",
      href: "index.html",
      matchPages: ["index"],
    },
    {
      label: "Contents",
      href: "Table_of_Contents.html",
      matchPages: ["Table_of_Contents"],
      subs: [
        {
          num: "—",
          label: "Table of Contents",
          href: "Table_of_Contents.html",
        },
        {
          num: "1",
          label: "Introduction",
          href: "Section_1.html",
        },
        {
          num: "2",
          label: "Development of Case Study",
          href: "Section_2.html",
        },
        {
          num: "3",
          label: "Experimental Data Collection",
          href: "Section_3.html",
        },
        {
          num: "4",
          label: "Architectural Design for PIML",
          href: "Section_4.html",
        },
        {
          num: "5",
          label: "Physics Guided Enhancements",
          href: "Section_5.html",
        },
        {
          num: "6",
          label: "Current Limitations &amp; Future Works",
          href: "Section_6.html",
        },
        {
          num: "7",
          label: "Conclusion",
          href: "Section_7.html",
        },
        {
          num: "A",
          label: "Appendix",
          href: "Appendix.html",
        },
      ],
    },
    {
      label: "Introduction",
      href: "Section_1.html",
      matchPages: ["Section_1"],
      subs: [
        { num: "—", label: "Abstract", href: "Section_1.html#abstract" },
        {
          num: "1.1",
          label: "First Principle Modelling (FPM)",
          href: "Section_1.html#1-1",
        },
        {
          num: "1.2",
          label: "Machine Learning (ML)",
          href: "Section_1.html#1-2",
        },
        {
          num: "1.3",
          label: "Physics-Informed Machine Learning (PIML)",
          href: "Section_1.html#1-3",
        },
        {
          num: "1.4",
          label: "Objective &amp; Scope",
          href: "Section_1.html#1-4",
        },
      ],
    },
    {
      label: "Development of Case Study",
      href: "Section_2.html",
      matchPages: ["Section_2"],
      subs: [
        {
          num: "2.1",
          label: "Case Study Selection",
          href: "Section_2.html#2-1",
        },
        {
          num: "2.2",
          label: "Case Study",
          href: "Section_2.html#2-2",
          subsubs: [
            {
              num: "2.2.1",
              label: "Working Principles",
              href: "Section_2.html#2-2-1",
            },
            {
              num: "2.2.2",
              label: "Industrial Applications in Control Systems",
              href: "Section_2.html#2-2-2",
            },
          ],
        },
      ],
    },
    {
      label: "Experimental Data Collection",
      href: "Section_3.html",
      matchPages: ["Section_3"],
      subs: [
        {
          num: "3.1",
          label: "Experimental Set-up",
          href: "Section_3.html#3-1",
        },
        {
          num: "3.2",
          label: "Sampling of Data Points",
          href: "Section_3.html#3-2",
        },
      ],
    },
    {
      label: "Architectural Design for PIML",
      href: "Section_4.html",
      matchPages: ["Section_4"],
      subs: [
        {
          num: "4.1",
          label: "Overview",
          href: "Section_4.html#4-1",
        },
        {
          num: "4.2",
          label: "Recurrent Neural Network",
          href: "Section_4.html#4-2",
          subsubs: [
            {
              num: "4.2.1",
              label: "Gated Recurrent Units",
              href: "Section_4.html#4-2-1",
            },
            {
              num: "4.2.2",
              label: "Long Short Term Memory",
              href: "Section_4.html#4-2-2",
            },
          ],
        },
        {
          num: "4.3",
          label: "Neural Ordinary Differential Equation (NODE)",
          href: "Section_4.html#4-3",
          subsubs: [
            {
              num: "4.3.1",
              label: "NODE-ED",
              href: "Section_4.html#4-3-1",
            },
            {
              num: "4.3.2",
              label: "NODE-ED-Uncoupled",
              href: "Section_4.html#4-3-2",
            },
            {
              num: "4.3.3",
              label: "NODE-Context",
              href: "Section_4.html#4-3-3",
            },
            {
              num: "4.3.4",
              label: "NODE-Context-Uncoupled",
              href: "Section_4.html#4-3-4",
            },
          ],
        },
        {
          num: "4.4",
          label: "Performance Metric & Statistical Significance",
          href: "Section_4.html#4-4",
        },
        {
          num: "4.5",
          label: "Training Methodology",
          href: "Section_4.html#4-5",
          subsubs: [
            {
              num: "4.5.1",
              label: "Hyperparameter Optimisation",
              href: "Section_4.html#4-5-1",
            },
            {
              num: "4.5.2",
              label: "K-fold Cross-validation",
              href: "Section_4.html#4-5-2",
            },
            {
              num: "4.5.3",
              label: "100 repeated K-fold",
              href: "Section_4.html#4-5-3",
            },
            {
              num: "4.5.4",
              label: "Bagging",
              href: "Section_4.html#4-5-4",
            },
          ],
        },
        {
          num: "4.6",
          label: "Analysis of results for RNN Variants",
          href: "Section_4.html#4-6",
        },
        {
          num: "4.7",
          label: "Analysis of results for NODE variants",
          href: "Section_4.html#4-7",
        },
        {
          num: "4.8",
          label: "Comparison between RNN and NODE",
          href: "Section_4.html#4-8",
        },
      ],
    },
    {
      label: "Physics Guided Enhancements",
      href: "Section_5.html",
      matchPages: ["Section_5"],
      subs: [
        {
          num: "5.1",
          label: "Steady State Constraint with Parameter Discovery (SS-PD)",
          href: "Section_5.html#5-1",
        },
        {
          num: "5.2",
          label: "Steady State Collocation with Parameter Discovery (SS-C-PD)",
          href: "Section_5.html#5-2",
        },
        {
          num: "5.3",
          label: "Analysis of results for Physics Guided Enhancements",
          href: "Section_5.html#5-3",
        },
      ],
    },
    {
      label: "Current Limitations & Future Works",
      href: "Section_6.html",
      matchPages: ["Section_6"],
      subs: [
        {
          num: "6.1",
          label: "Overview",
          href: "Section_6.html#future-works",
        },
      ],
    },
    {
      label: "Conclusion",
      href: "Section_7.html",
      matchPages: ["Section_7"],
      subs: [
        {
          num: "7.1",
          label: "Overview",
          href: "Section_7.html#conclusion",
        },
      ],
    },
    {
      label: "Appendix",
      href: "Appendix.html",
      matchPages: ["Appendix"],
      subs: [
        {
          num: "A",
          label: "Details of Different Zones",
          href: "Appendix.html#appendix-a",
        },
        {
          num: "B",
          label: "Experimental Procedure",
          href: "Appendix.html#appendix-b",
        },
        {
          num: "C",
          label: "Full Derivation of Governing Equation",
          href: "Appendix.html#appendix-c",
        },
      ],
    },
  ],

  cta: { label: "Source Code", href: "Source_Code.html" },
};

(function () {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  const page = (
    window.location.pathname.split("/").pop() || "index.html"
  ).replace(".html", "");

  function isActive(item) {
    if (item.href && item.href.replace(".html", "") === page) return true;
    if (item.matchPages) return item.matchPages.some((p) => page.startsWith(p));
    return false;
  }

  /* ── Logo ────────────────────────────────────────────── */
  const logo = document.createElement("a");
  logo.className = "nav-logo";
  logo.href = NAV_CONFIG.logo.href;
  logo.innerHTML = `<img src="${NAV_CONFIG.logo.src}" alt="${NAV_CONFIG.logo.alt}">`;

  /* ── Desktop links ───────────────────────────────────── */
  const linksWrap = document.createElement("div");
  linksWrap.className = "nav-links";

  NAV_CONFIG.items.forEach((item) => {
    const active = isActive(item);

    if (item.subs && item.subs.length) {
      /* Item with dropdown */
      const wrap = document.createElement("div");
      wrap.className = "nav-item-wrap";

      const link = document.createElement("a");
      link.className = "nav-link" + (active ? " active" : "");
      link.href = item.href;
      link.innerHTML = `${item.label}<span class="nav-chevron">▾</span>`;
      wrap.appendChild(link);

      const dd = document.createElement("div");
      dd.className = "nav-dropdown";
      dd.setAttribute("role", "menu");

      item.subs.forEach((s) => {
        /* Sub row */
        const sub = document.createElement("a");
        sub.className = "dd-sub";
        sub.href = s.href;
        sub.innerHTML = `<span class="dd-sub-num">${s.num}</span><span>${s.label}</span>`;
        dd.appendChild(sub);

        /* Sub-sub rows (third level, indented) */
        if (s.subsubs && s.subsubs.length) {
          const ssWrap = document.createElement("div");
          ssWrap.className = "dd-subsub-wrap";

          s.subsubs.forEach((ss) => {
            const ssLink = document.createElement("a");
            ssLink.className = "dd-subsub";
            ssLink.href = ss.href;
            ssLink.innerHTML = `<span class="dd-subsub-num">${ss.num}</span><span>${ss.label}</span>`;
            ssWrap.appendChild(ssLink);
          });

          dd.appendChild(ssWrap);
        }
      });

      /*
       * Append dropdown to <body> so it escapes any overflow:hidden parent.
       * Position it via getBoundingClientRect each time it opens.
       */
      document.body.appendChild(dd);

      function positionDropdown() {
        const rect = wrap.getBoundingClientRect();
        const ddW = dd.offsetWidth || 240;
        let left = rect.left + rect.width / 2 - ddW / 2;

        /* Keep within viewport */
        if (left < 8) left = 8;
        if (left + ddW > window.innerWidth - 8)
          left = window.innerWidth - ddW - 8;

        dd.style.position = "fixed";
        dd.style.top = rect.bottom + 10 + "px";
        dd.style.left = left + "px";
        dd.style.width = ddW + "px";
        dd.style.zIndex = "9999";
      }

      /* Show on hover */
      let hideTimer = null;

      function showDd() {
        clearTimeout(hideTimer);
        positionDropdown();
        dd.classList.add("open");
      }

      function hideDd() {
        hideTimer = setTimeout(() => dd.classList.remove("open"), 120);
      }

      wrap.addEventListener("mouseenter", showDd);
      dd.addEventListener("mouseenter", () => {
        clearTimeout(hideTimer);
      });
      wrap.addEventListener("mouseleave", hideDd);
      dd.addEventListener("mouseleave", hideDd);

      /* Reposition on scroll/resize */
      window.addEventListener("scroll", positionDropdown, { passive: true });
      window.addEventListener("resize", positionDropdown, { passive: true });

      wrap.appendChild(link);
      linksWrap.appendChild(wrap);
    } else {
      const link = document.createElement("a");
      link.className = "nav-link" + (active ? " active" : "");
      link.href = item.href;
      link.textContent = item.label;
      linksWrap.appendChild(link);
    }
  });

  /* ── CTA + Hamburger ─────────────────────────────────── */
  const cta = document.createElement("a");
  cta.className = "nav-cta";
  cta.href = NAV_CONFIG.cta.href;
  cta.textContent = NAV_CONFIG.cta.label;

  const ham = document.createElement("button");
  ham.className = "nav-hamburger";
  ham.setAttribute("aria-label", "Toggle menu");
  ham.setAttribute("aria-expanded", "false");
  ham.innerHTML = "<span></span><span></span><span></span>";

  nav.appendChild(logo);
  nav.appendChild(linksWrap);
  nav.appendChild(cta);
  nav.appendChild(ham);

  /* ── < > scroll arrows for overflowing desktop nav ─────── */
  function setupNavScrollArrows(linksContainer, navbar) {
    if (window.innerWidth <= 768) return;

    const STEP = 200;

    const btnPrev = document.createElement("button");
    btnPrev.className = "nav-scroll-btn";
    btnPrev.setAttribute("aria-label", "Scroll navigation left");
    btnPrev.innerHTML = "&#8249;";

    const btnNext = document.createElement("button");
    btnNext.className = "nav-scroll-btn";
    btnNext.setAttribute("aria-label", "Scroll navigation right");
    btnNext.innerHTML = "&#8250;";

    /* Insert as grid siblings: logo | btnPrev | linksWrap | btnNext | cta | ham */
    navbar.insertBefore(btnPrev, linksContainer);
    linksContainer.insertAdjacentElement("afterend", btnNext);

    /* Expand grid to accommodate the two extra columns */
    navbar.style.gridTemplateColumns = "auto auto minmax(0,1fr) auto auto auto";

    function updateButtons() {
      if (window.innerWidth <= 768) return;

      const sl = Math.round(linksContainer.scrollLeft);
      const maxScroll = linksContainer.scrollWidth - linksContainer.clientWidth;
      const overflows = maxScroll > 4;

      btnPrev.classList.toggle("visible", overflows);
      btnNext.classList.toggle("visible", overflows);
      linksContainer.classList.toggle("is-overflowing", overflows);

      btnPrev.classList.toggle("hidden", overflows && sl <= 0);
      btnNext.classList.toggle("hidden", overflows && sl >= maxScroll - 1);

      btnPrev.disabled = sl <= 0;
      btnNext.disabled = sl >= maxScroll - 1;

      linksContainer.classList.toggle("fade-left", overflows && sl > 2);
      linksContainer.classList.toggle(
        "fade-right",
        overflows && sl < maxScroll - 2,
      );
    }

    btnPrev.addEventListener("click", () => {
      linksContainer.scrollLeft -= STEP;
    });
    btnNext.addEventListener("click", () => {
      linksContainer.scrollLeft += STEP;
    });

    linksContainer.addEventListener("scroll", updateButtons, { passive: true });

    const ro = new ResizeObserver(() => {
      if (window.innerWidth > 768) updateButtons();
    });
    ro.observe(navbar);

    requestAnimationFrame(() => requestAnimationFrame(updateButtons));
  }

  setupNavScrollArrows(linksWrap, nav);

  /* ── Mobile drawer ───────────────────────────────────── */
  const backdrop = document.createElement("div");
  backdrop.className = "nav-backdrop";

  const drawer = document.createElement("nav");
  drawer.className = "nav-mobile-menu";
  drawer.setAttribute("aria-label", "Mobile navigation");

  const inner = document.createElement("div");
  inner.className = "nav-mobile-inner";

  NAV_CONFIG.items.forEach((item) => {
    const active = isActive(item);

    if (item.subs && item.subs.length) {
      const acc = document.createElement("div");
      acc.className = "mob-accordion";

      const toggle = document.createElement("button");
      toggle.className = "nav-mobile-link" + (active ? " active" : "");
      toggle.innerHTML = `${item.label} <span class="mob-chevron">▾</span>`;
      acc.appendChild(toggle);

      const body = document.createElement("div");
      body.className = "mob-accordion-body";

      item.subs.forEach((s) => {
        /* Sub row */
        const row = document.createElement("a");
        row.className = "mob-sub-row";
        row.href = s.href;
        row.innerHTML = `<span class="mob-num">${s.num}</span>${s.label}`;
        body.appendChild(row);

        /* Sub-sub rows */
        if (s.subsubs && s.subsubs.length) {
          s.subsubs.forEach((ss) => {
            const ssRow = document.createElement("a");
            ssRow.className = "mob-subsub-row";
            ssRow.href = ss.href;
            ssRow.innerHTML = `<span class="mob-num">${ss.num}</span>${ss.label}`;
            body.appendChild(ssRow);
          });
        }
      });

      acc.appendChild(body);
      inner.appendChild(acc);
      toggle.addEventListener("click", () => acc.classList.toggle("open"));
    } else {
      const a = document.createElement("a");
      a.className = "nav-mobile-link" + (active ? " active" : "");
      a.href = item.href;
      a.textContent = item.label;
      inner.appendChild(a);
    }
  });

  const mobDivider = document.createElement("div");
  mobDivider.className = "mob-divider";
  inner.appendChild(mobDivider);

  const mobCta = document.createElement("a");
  mobCta.className = "nav-mobile-cta";
  mobCta.href = NAV_CONFIG.cta.href;
  mobCta.textContent = NAV_CONFIG.cta.label;
  inner.appendChild(mobCta);

  drawer.appendChild(inner);
  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);

  function openMenu() {
    nav.classList.add("menu-open");
    drawer.classList.add("open");
    backdrop.classList.add("open");
    ham.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    nav.classList.remove("menu-open");
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    ham.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  ham.addEventListener("click", () =>
    nav.classList.contains("menu-open") ? closeMenu() : openMenu(),
  );
  backdrop.addEventListener("click", closeMenu);
  drawer
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 768) closeMenu();
    },
    { passive: true },
  );
})();

/* ─── NAVBAR SCROLL BEHAVIOUR ────────────────────────────── */
(function () {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  const hasHero = !!document.querySelector(".hero");
  let lastY = window.scrollY;
  const TOP_SHOW_Y = 20;
  const HIDE_START_Y = 120;
  const DELTA = 6;

  if (!hasHero) nav.classList.add("scrolled");
  window.addEventListener(
    "scroll",
    () => {
      if (hasHero) nav.classList.toggle("scrolled", window.scrollY > 50);

      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY + DELTA;
      const scrollingUp = currentY < lastY - DELTA;

      if (currentY <= TOP_SHOW_Y || nav.classList.contains("menu-open")) {
        nav.classList.remove("nav-hidden");
      } else if (scrollingDown && currentY > HIDE_START_Y) {
        nav.classList.add("nav-hidden");
      } else if (scrollingUp) {
        nav.classList.remove("nav-hidden");
      }

      lastY = currentY;
    },
    { passive: true },
  );
})();

/* ─── BACK TO TOP ────────────────────────────────────────── */
(function () {
  if (document.querySelector(".hero")) return;
  const btn = document.createElement("button");
  btn.id = "back-to-top";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML =
    '<svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>';
  document.body.appendChild(btn);
  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 320);
    },
    { passive: true },
  );
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
})();

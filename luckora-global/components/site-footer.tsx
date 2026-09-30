export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <a aria-label="Luckora home" className="logo" href="/">
            <span>L U C K</span>
            <span className="orbital-o">O</span>
            <span>R A</span>
          </a>
          <p>
            Luckora is an independent self-discovery website built around
            personality, relationship and growth-oriented insight content.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="site-footer__links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/methodology">Methodology</a>
          <a href="/tests">Tests</a>
        </nav>

        <div className="site-footer__meta">
          <a href="/sitemap.xml">Sitemap</a>
          <a href="/ads.txt">ads.txt</a>
          <span>hello@luckora.online</span>
        </div>
      </div>
    </footer>
  );
}

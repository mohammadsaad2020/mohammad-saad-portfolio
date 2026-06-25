export default function Footer() {
  return (
    <footer className="bg-bg-footer py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-5 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <div>
          <p className="font-display font-medium text-text-primary">
            <span className="text-accent">M</span>ohammad <span className="text-accent">S</span>aad
          </p>
          <p className="text-sm text-text-muted">
            Senior Data Engineer and AI Engineer, Dubai, United Arab Emirates
          </p>
        </div>
        <p className="text-sm text-text-muted">2025 Mohammad Saad. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-bg">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-10 md:px-12 lg:px-[120px]">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <span className="text-lg font-bold text-accent">Runrait</span>
          <a
            href="mailto:hello@runrait.ai"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            hello@runrait.ai
          </a>
        </div>
        <p className="text-[13px] text-text-tertiary">
          &copy; {new Date().getFullYear()} Runrait. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

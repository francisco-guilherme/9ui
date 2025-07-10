const footerLinks = [
  {
    href: "https://twitter.com/borabalogluu",
    label: "borabalogluu",
  },
  {
    href: "https://github.com/borabaloglu/9ui",
    label: "source code",
  },
] as const;

export const Footer = () => (
  <footer className="border-t">
    <div className="container p-4">
      <div className="text-balance text-center text-sm text-muted-foreground md:text-left">
        Built by{" "}
        {footerLinks.map(({ href, label }, index) => (
          <span key={href}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
            >
              {label}
            </a>
            {index < footerLinks.length - 1 && " • "}
          </span>
        ))}
        .
      </div>
    </div>
  </footer>
);

import Image from "next/image";

const stores = {
  "app-store": {
    src: "/badges/app-store.svg",
    alt: "Download on the App Store",
    width: 120,
    height: 40,
  },
  "google-play": {
    src: "/badges/google-play.svg",
    alt: "Get it on Google Play",
    width: 135,
    height: 40,
  },
} as const;

type StoreBadgeProps = { store: keyof typeof stores; href: string };

export function StoreBadge({ store, href }: StoreBadgeProps) {
  const { src, alt, width, height } = stores[store];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-lg transition-opacity hover:opacity-90"
    >
      <Image src={src} alt={alt} width={width} height={height} className="h-12 w-auto" />
    </a>
  );
}
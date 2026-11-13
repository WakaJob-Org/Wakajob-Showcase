export function CameroonFlag({ className = "h-4 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 3 2"
      className={className}
      role="img"
      aria-label="Flag of Cameroon"
    >
      <rect width="1" height="2" fill="#007a5e" />
      <rect x="1" width="1" height="2" fill="#ce1126" />
      <rect x="2" width="1" height="2" fill="#fcd116" />
      <path
        d="M1.5 0.72l0.09 0.27h0.29l-0.23 0.17 0.09 0.27-0.24-0.17-0.24 0.17 0.09-0.27-0.23-0.17h0.29z"
        fill="#fcd116"
      />
    </svg>
  );
}
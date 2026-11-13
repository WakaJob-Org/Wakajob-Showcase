import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  variant?: "default" | "white";
  priority?: boolean;
};

export function Logo({ className, variant = "default", priority = false }: LogoProps) {
  return (
    <Link href="/" aria-label="Wakajob, go to homepage" className={cn("inline-flex", className)}>
      <Image
        src={variant === "white" ? "/images/logo-white.svg" : "/images/logo.svg"}
        alt="Wakajob"
        width={170}
        height={44}
        priority={priority}
        className="h-9 w-auto sm:h-11"
      />
    </Link>
  );
}
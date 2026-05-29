import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/lodge-data";

type Props = {
  message: string;
  variant?: "solid" | "outline";
  size?: "md" | "lg";
  className?: string;
  label?: string;
};

export function ReserveButton({
  message,
  variant = "solid",
  size = "md",
  className,
  label = "Reserve",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const sizes = size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm";
  const styles =
    variant === "solid"
      ? "bg-whatsapp text-whatsapp-foreground hover:brightness-110 shadow-md shadow-whatsapp/25"
      : "border border-whatsapp text-whatsapp bg-transparent hover:bg-whatsapp hover:text-whatsapp-foreground";

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, sizes, styles, className)}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

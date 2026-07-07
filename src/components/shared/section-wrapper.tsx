import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  id,
  children,
  className,
  containerClassName,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28 lg:py-32", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-text md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

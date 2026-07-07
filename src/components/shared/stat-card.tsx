import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-soft-md",
        className,
      )}
    >
      <p className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-text">{label}</p>
    </div>
  );
}

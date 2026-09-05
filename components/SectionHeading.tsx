import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="text-cyan text-xs sm:text-sm tracking-[0.2em] mb-2.5 uppercase font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="font-[var(--font-display)] text-balance text-2xl sm:text-3xl lg:text-4xl text-pearl leading-tight">
        {title}
      </h2>
      {description && <p className="mt-3 sm:mt-4 text-sm sm:text-base text-seafoam leading-relaxed">{description}</p>}
    </div>
  );
}

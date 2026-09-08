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
        <p className="text-aqua text-xs sm:text-sm tracking-[0.25em] mb-2.5 uppercase font-semibold flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-aqua opacity-60" />
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

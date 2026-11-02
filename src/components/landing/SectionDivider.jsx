export default function SectionDivider({ className = "" }) {
  return (
    <div
      className={`mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-primary/50 to-transparent ${className}`}
    />
  );
}

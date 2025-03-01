interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 animate-fade-in-up">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 font-light max-w-lg mx-auto animate-fade-in-up delay-100">
          {subtitle}
        </p>
      )}
    </div>
  );
}

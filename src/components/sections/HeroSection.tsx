import React, { useEffect, useRef, useState } from "react";
import Wave from "../../assets/wave.svg?react";

const TerminalText: React.FC<{
  type?: "command" | "string" | "directory" | "comment";
  children: string;
}> = ({ type, children }) => {
  const colors = {
    command: "text-green-400",
    string: "text-yellow-300",
    directory: "text-blue-400",
    comment: "text-zinc-500",
    default: "text-zinc-300",
  };

  return <span className={colors[type || "default"]}>{children}</span>;
};

const TerminalContent = () => {
  const [activeLine, setActiveLine] = useState(0);
  const lines = [
    <>
      <TerminalText type="command">git</TerminalText> add
    </>,
    <>
      <TerminalText type="directory">A</TerminalText>{" "}
      src/components/HeroSection.tsx
    </>,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLine((prev) => (prev < lines.length - 1 ? prev + 1 : prev));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {lines.map((line, index) => (
        <div
          key={index}
          className={`flex items-center transition-opacity duration-500 ${index <= activeLine ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-zinc-500 mr-2">$</span>
          <div
            className={`${index === activeLine ? "animate-typing" : ""} overflow-hidden whitespace-nowrap`}
          >
            {line}
          </div>
          {index === activeLine && (
            <div className="w-2 h-5 bg-blue-500 ml-1 animate-blink" />
          )}
        </div>
      ))}
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Text Content */}
        <div className="md:w-1/2 md:mr-8 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-6xl font-open-sans font-bold flex items-center mb-2">
            <span className="bg-gradient-to-r from-blue-400 to-violet-700 bg-clip-text text-transparent">
              Hey, there
            </span>
            <Wave className="inline-block w-12 h-12 ml-2 animate-wave" />
          </h1>
          <h2 className="text-6xl font-open-sans mb-2">
            <span className="font-bold bg-gradient-to-r from-zinc-400 to-zinc-200 bg-clip-text text-transparent">
              I'm{" "}
            </span>
            <span className="font-bold bg-gradient-to-r from-blue-400 to-violet-700 bg-clip-text text-transparent">
              Pavel Sahapov.
            </span>
          </h2>
          <p className="text-5xl font-bold font-open-sans bg-gradient-to-r from-zinc-400 to-zinc-200 bg-clip-text text-transparent pb-2">
            a Software Engineer
          </p>
          <p className="text-3xl font-open-sans bg-gradient-to-r from-zinc-600 to-zinc-400 bg-clip-text text-transparent">
            focused on providing an enjoyable web experience.
          </p>
        </div>

        {/* Terminal */}
        <div className="md:w-1/2 w-full max-w-2xl md:ml-8">
          <div className="bg-zinc-900 rounded-lg shadow-xl overflow-hidden h-80">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-2 bg-zinc-800">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <span className="text-zinc-300 text-sm ml-4">pashagames@dev</span>
            </div>

            {/* Terminal Content */}
            <div className="p-4 text-sm font-mono">
              <TerminalContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

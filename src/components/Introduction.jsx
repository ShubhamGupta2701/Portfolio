import { useState } from 'react';
import fluterIcon from "../assets/images/flutter.png";
import reactIcon from "../assets/images/react.png";
import nodeIcon from "../assets/images/node.png";
import expressIcon from "../assets/images/express.png";
import postgresIcon from "../assets/images/postgres.png";
import tsIcon from "../assets/images/ts.png";
import dockerIcon from "../assets/images/docker.png";
import gitIcon from "../assets/images/git.png";
import cppIcon from "../assets/images/cpp.png";
import nextjsIcon from "../assets/images/nextjs.png";
import pythonIcon from "../assets/images/python.png";
import dartIcon from "../assets/images/dart.png";
import rustIcon from "../assets/images/rust.png";
import linkedinIcon from "../assets/images/Linkedin.png";
import githubIcon from "../assets/images/github.png";
import leetcodeIcon from "../assets/images/leetcode.png";

export const Introduction = () => {
  const techStack = [
    { src: fluterIcon, alt: "flutter", link: "https://docs.flutter.dev/", name: "Flutter" },
    { src: reactIcon, alt: "reactjs", link: "https://react.dev/learn", name: "React" },
    { src: nodeIcon, alt: "nodejs", link: "https://nodejs.org/docs/latest/api/", name: "Node.js" },
    { src: expressIcon, alt: "expressjs", link: "https://expressjs.com/en/starter/installing.html", name: "Express" },
    { src: postgresIcon, alt: "postgresql", link: "https://www.postgresql.org/docs/", name: "PostgreSQL" },
    { src: tsIcon, alt: "typescript", link: "https://www.typescriptlang.org/docs/", name: "TypeScript" },
    { src: dockerIcon, alt: "docker", link: "https://docs.docker.com/", name: "Docker" },
    { src: gitIcon, alt: "git", link: "https://git-scm.com/doc", name: "Git" },
    { src: cppIcon, alt: "cpp", link: "https://www.w3schools.com/cpp/", name: "C++" },
    { src: pythonIcon, alt: "python", link: "https://www.python.org/doc/", name: "Python" },
    { src: nextjsIcon, alt: "nextjs", link: "https://nextjs.org/docs", name: "Next.js" },
    { src: dartIcon, alt: "dart", link: "https://dart.dev/guides", name: "Dart" },
    { src: rustIcon, alt: "rust", link: "https://www.rust-lang.org/learn", name: "Rust" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center font-mono bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12">
      <div className="text-center px-6 max-w-4xl mx-auto">
        
        {/* Main Content Card */}
        <div className="backdrop-blur-lg bg-gray-800/40 rounded-3xl p-8 md:p-10 border border-purple-500/20 shadow-2xl shadow-purple-500/10 mb-8">
          
          {/* Name & Title */}
          <div className="text-2xl md:text-3xl font-bold text-gray-300 mb-3">
            Hi, I'm Shubham Gupta
          </div>
          
          <div className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
            Software Developer
          </div>
          
          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            I create modern, responsive web experiences with clean code and attention to detail. 
            Passionate about blending design and technology to build engaging digital products.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 md:gap-6 mb-8">
            <SocialIcon
              src={linkedinIcon}
              alt="linkedIn"
              onClick={() => window.open("https://www.linkedin.com/in/shubham-gupta-2a5128232/", "_blank")}
            />
            <SocialIcon
              src={githubIcon}
              alt="github"
              onClick={() => window.open("https://github.com/ShubhamGupta2701", "_blank")}
            />
            <SocialIcon
              src={leetcodeIcon}
              alt="leetcode"
              onClick={() => window.open("https://leetcode.com/u/ShubhamG27/", "_blank")}
            />
          </div>

          {/* Tech Stack Section */}
          <div className="mb-6">
            <div className="text-xl md:text-2xl text-gray-300 font-semibold mb-6">
              Tech Stack
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {techStack.map((tech) => (
                <TechIconWithTooltip
                  key={tech.alt}
                  src={tech.src}
                  alt={tech.alt}
                  link={tech.link}
                  name={tech.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Social Icon Component
const SocialIcon = ({ src, alt, onClick }) => (
  <div 
    className="h-10 w-10 md:h-12 md:w-12 cursor-pointer transition-all duration-300 hover:scale-110 bg-gray-800/50 rounded-xl p-2 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20"
    onClick={onClick}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain filter brightness-0 invert"
    />
  </div>
);

// Tech Icon with Animated Tooltip
const TechIconWithTooltip = ({ src, alt, link, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tech Icon */}
      <div 
        className={`h-10 w-10 md:h-12 md:w-12 cursor-pointer transition-all duration-300 ${
          isHovered ? 'scale-110 bg-purple-500/20' : 'scale-100 bg-gray-800/50'
        } rounded-xl p-2 backdrop-blur-sm border ${
          isHovered ? 'border-purple-400/40 shadow-lg shadow-purple-500/20' : 'border-purple-500/10'
        }`}
        onClick={() => window.open(link, "_blank")}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Animated Tooltip */}
      <div className={`
        absolute left-1/2 -translate-x-1/2 -top-10
        bg-gray-900/95 backdrop-blur-sm
        text-purple-300 text-xs font-semibold
        px-3 py-2 rounded-lg
        border border-purple-500/30
        shadow-lg shadow-purple-500/20
        pointer-events-none
        transition-all duration-300 ease-out
        z-20
        ${isHovered 
          ? 'opacity-100 transform -translate-y-1 scale-100' 
          : 'opacity-0 transform translate-y-2 scale-95'
        }
      `}>
        {name}
        
        {/* Tooltip Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900/95"></div>
      </div>
    </div>
  );
};
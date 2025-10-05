export const ProjectCard = ({ title, desc, image, isReversed, techStack, liveLink, githubLink }) => {
    return (
        <div className={`font-mono flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} gap-6 md:gap-8 py-6 md:py-8 my-4 backdrop-blur-lg bg-gray-800/40 border border-purple-500/20 rounded-2xl px-6 md:px-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 ease-in-out hover:-translate-y-1`}>
            {/* Project Image */}
            <div className="w-full lg:w-2/5">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-48 md:h-64 object-cover rounded-xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300" 
                />
            </div>
            
            {/* Project Content */}
            <div className="flex flex-col justify-center lg:w-3/5">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent py-4 md:py-6">
                    {title}
                </div>
                <div className="text-base md:text-lg font-normal text-gray-300 leading-relaxed">
                    {desc}
                </div>
                
                {/* Tech Stack Tags */}
                {techStack && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {techStack.map((tech, index) => (
                            <span key={index} className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
                
                {/* Project Links */}
                {(liveLink || githubLink) && (
                    <div className="flex gap-4 mt-6">
                        {liveLink && (
                            <button 
                                onClick={() => window.open(liveLink, "_blank")}
                                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5"
                            >
                                Live Demo
                            </button>
                        )}
                        {githubLink && (
                            <button 
                                onClick={() => window.open(githubLink, "_blank")}
                                className="backdrop-blur-sm bg-gray-700/50 hover:bg-purple-500/20 text-gray-300 font-semibold px-6 py-2 rounded-lg border border-purple-500/20 hover:border-purple-400/30 transition-all duration-300"
                            >
                                Source Code
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
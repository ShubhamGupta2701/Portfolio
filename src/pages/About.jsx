export const About = () => {
    return (
        <div className="font-mono px-4 md:px-10 lg:px-20 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-6">
            {/* Header */}
            <div className="text-3xl flex justify-center font-semibold p-4 mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                    About Me
                </span>
            </div>

            {/* Personal Info */}
            <div className="mb-6">
                <div className="text-lg md:text-xl font-semibold p-3 text-gray-300">
                    Personal Info
                </div>
                <div className="backdrop-blur-lg bg-gray-800/40 border border-purple-500/20 rounded-2xl p-5 shadow-lg">
                    <div className="space-y-3">
                        <div className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">
                            Shubham Gupta
                        </div>
                        <div className="text-sm text-gray-400">Software Engineer</div>
                        <div className="text-sm text-gray-400">Patiala, Punjab</div>
                        <div className="text-sm text-gray-400">shubham272101@gmail.com</div>
                    </div>
                </div>
            </div>

            {/* Education */}
            <div className="mb-6">
                <div className="text-lg md:text-xl font-semibold p-3 text-gray-300">
                    Education
                </div>
                <div className="backdrop-blur-lg bg-gray-800/40 border border-purple-500/20 rounded-2xl p-5 shadow-lg">
                    <div className="space-y-4">
                        <div>
                            <div className="text-base md:text-lg font-semibold text-purple-300">
                                Master's in Computer Application - 7.4 CGPA
                            </div>
                            <div className="text-sm text-gray-400 mt-1">
                                Thapar Institute of Engineering and Technology, Patiala
                            </div>
                        </div>
                        <div>
                            <div className="text-base md:text-lg font-semibold text-purple-300">
                                Bachelor's in Computer Application - 7.7 CGPA
                            </div>
                            <div className="text-sm text-gray-400 mt-1">
                                Multani Mal Modi College, Patiala
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-6">
                <div className="text-lg md:text-xl font-semibold p-3 text-gray-300">
                    Technical Skills
                </div>
                <div className="backdrop-blur-lg bg-gray-800/40 border border-purple-500/20 rounded-2xl p-5 shadow-lg">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm text-gray-300">
                        {[
                            "Flutter", "React Js", "Express Js", "PostgreSQL",
                            "Prisma", "Docker", "Git / GitHub", "C++",
                            "Python", "DSA", "JavaScript", "TypeScript",
                            "Next Js", "Node Js", "Salesforce", "Playwrite"
                        ].map((skill, index) => (
                            <div 
                                key={index}
                                className="p-2 rounded-lg bg-gray-700/30 text-center hover:bg-purple-500/20 transition-colors duration-300"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
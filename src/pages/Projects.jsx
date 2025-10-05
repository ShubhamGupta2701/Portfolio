import { ProjectCard } from "../components/ProjectCard";
import studyAppImg from "../assets/images/study-app.png";
import placementPortalImg from "../assets/images/placement-portal.png";
import mediumImg from '../assets/images/medium.png';

export const Projects = () => {
    const projects = [
        {
            title: "Medium-Blog",
            desc: "This Project was developed using Cloudflare workers and postgreSQL also use typescript for type safety, this web-app let users to signup and signin and let them post their blogs as well as let all the other users to see everyone's blog post",
            image: mediumImg,
            isReversed: true,
            techStack: ["Cloudflare Workers", "PostgreSQL", "TypeScript", "HTML/CSS"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Study-app",
            desc: "This Project was developed using Flutter which use dart and firebase as backend, we also use firebase auth0 for authentication as we need google authentication for our application, our app provide basic to intermediate MCQ's for various Topics and Subjects.",
            image: studyAppImg,
            isReversed: false,
            techStack: ["Flutter", "Dart", "Firebase", "Firebase Auth"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Placement-Portal",
            desc: "This Project was developed using React as frontend and Firebase as backend here we use JWT authentication for secure login and this webapp let our college students to login and setup their profile and let companies to register themself and post job-post so that student can apply for them in a single click.",
            image: placementPortalImg,
            isReversed: true,
            techStack: ["React", "Firebase", "JWT", "JavaScript"],
            liveLink: "#",
            githubLink: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-8">
            {/* Header */}
            <div className="text-center mb-12 px-4">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent py-4 font-mono">
                    Projects
                </div>
                <div className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and experience
                </div>
            </div>

            {/* Projects Container */}
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        desc={project.desc}
                        image={project.image}
                        isReversed={project.isReversed}
                        techStack={project.techStack}
                        liveLink={project.liveLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 px-4">
                <div className="text-lg text-gray-400 mb-4">
                    Interested in working together?
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1">
                    Get In Touch
                </button>
            </div>
        </div>
    );
};
import {ProjectCard} from "../components/ProjectCard";
import studyAppImg from "../assets/images/study-app.png";
import placementPortalImg from "../assets/images/placement-portal.png";
import mediumImg from '../assets/images/medium.png'

export const Projects= ()=>{
    return (
        <div>
            <div className="text-4xl flex items-center justify-center p-4 font-extrabold font-mono">
                Projects
            </div>
            <div className="container mx-auto px-20 ">
                <ProjectCard 
                    title = {"Medium-Blog"}
                    desc = {"This Project was developed using Cloudflare workers and postgreSQL also use typeescript for type safety, this web-app let users to signup and signin and let them post their blogs as well as let all the other users to see everyone's blog post"}
                    image = {mediumImg}
                    isReversed={true}
                />
                <ProjectCard 
                    title = {"Study-app"} 
                    desc = {"This Project was developed using Flutter which use dart and firebase as backend  , we also use firebase auth0 for authentication as we need google authentication for our application, our app provide basic to intermediate MCQ's for various Topics and Subjects."}
                    image = {studyAppImg}
                    isReversed={false}
                />
                <ProjectCard 
                    title = {"Placement-Portal"} 
                    desc = {"This Project was developed using React as frontend and Firebase as backend here we use JWT authentication for secure login and this webapp let our college students to login and setup their profile and let companies to register themself and post job-post so that student can applyy for them in a single click."}
                    image = {placementPortalImg}
                    isReversed={true}
                />
            </div>
        </div>
    )
}
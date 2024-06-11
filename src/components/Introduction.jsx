
import fluterIcon from "../assets/images/flutter.png"
import reactIcon from "../assets/images/react.png"
import nodeIcon from "../assets/images/node.png"
import expressIcon from "../assets/images/express.png"
import postgresIcon from "../assets/images/postgres.png"
import tsIcon from "../assets/images/ts.png"
import dockerIcon from "../assets/images/docker.png"
import gitIcon from "../assets/images/git.png"
import cppIcon from "../assets/images/cpp.png"
import nextjsIcon from "../assets/images/nextjs.png"
import pythonIcon from "../assets/images/python.png"
import dartIcon from "../assets/images/dart.png"
import rustIcon from "../assets/images/rust.png"

export const Introduction = () => {
    return (
    <div className="h-screen flex items-center justify-center font-mono ">
        <div className="text-center">
        <div className="text-4xl font-bold text-gray-500 py-3">
            Hi, I'm Shubham
        </div>
        <div className="text-7xl font-black py-3">
            Software Developer.
        </div>
        <div>
            <button className="text-3xl border-4 border-black rounded-2xl px-2 py-2 mt-4 mb-4 bg-black text-white text-center" onClick={toResume}>Resume</button>
        </div>
        <div className='flex justify-center gap-4 mb-4 mt-4'>
            <img 
                src={fluterIcon} 
                alt="flutter" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://docs.flutter.dev/", '_blank')} 
            />
            <img 
                src={reactIcon} 
                alt="reactjs" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://react.dev/learn", '_blank')} 
            />
            <img 
                src={nodeIcon} 
                alt="ndoejs" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://nodejs.org/docs/latest/api/", '_blank')} 
            />
            <img 
                src={expressIcon} 
                alt="expressjs" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://expressjs.com/en/starter/installing.html", '_blank')} 
            />
            <img 
                src={postgresIcon} 
                alt="postgresql" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://www.postgresql.org/docs/", '_blank')} 
            />
            <img 
                src={tsIcon} 
                alt="typescript" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://www.typescriptlang.org/docs/", '_blank')} 
            />
            <img 
                src={dockerIcon} 
                alt="docker" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://docs.docker.com/", '_blank')} 
            />
            <img 
                src={gitIcon} 
                alt="git" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://git-scm.com/doc", '_blank')} 
            />
            <img 
                src={cppIcon} 
                alt="cpp" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://www.w3schools.com/cpp/", '_blank')} 
            />
            <img 
                src={pythonIcon} 
                alt="python" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://www.python.org/doc/", '_blank')} 
            />
            <img 
                src={nextjsIcon} 
                alt="nextjs" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://nextjs.org/docs", '_blank')} 
            />
            <img 
                src={dartIcon} 
                alt="dart" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://dart.dev/guides", '_blank')} 
            />
            <img 
                src={rustIcon} 
                alt="rust" 
                className="h-10 w-10 cursor-pointer"
                onClick={() => window.open("https://www.rust-lang.org/learn", '_blank')} 
            />
            </div>
        <div className="text-xl font-semibold text-gray-500">
            Building digital wonders, one line of code at a time. Let's create something extraordinary!
        </div>
        </div>
    </div>
    );
};


function toResume(){
    window.open("https://drive.google.com/file/d/1O9DYT9bFAeToF3i-zUzyeBnTrMYM_Teh/view?usp=sharing", '_blank'); // Replace 'https://example.com' with the URL you want to redirect to
}
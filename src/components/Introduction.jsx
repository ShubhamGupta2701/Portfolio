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

export const Introduction = () => {
    return (
        <div className="h-screen flex items-center justify-center font-mono bg-neutral-50">
            <div className="text-center px-4">
                <div className="text-2xl md:text-4xl font-bold text-gray-500 py-3">
                    Hi, I'm Shubham
                </div>
                <div className="text-4xl md:text-7xl font-black py-3">
                    Software Developer.
                </div>
                <div>
                    <button
                        className="text-lg md:text-3xl border-4 border-black rounded-2xl px-2 py-2 mt-4 mb-4 bg-black text-white text-center"
                        onClick={toResume}
                    >
                        Resume
                    </button>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4 mt-4">
                    <Icon src={fluterIcon} alt="flutter" link="https://docs.flutter.dev/" />
                    <Icon src={reactIcon} alt="reactjs" link="https://react.dev/learn" />
                    <Icon src={nodeIcon} alt="nodejs" link="https://nodejs.org/docs/latest/api/" />
                    <Icon src={expressIcon} alt="expressjs" link="https://expressjs.com/en/starter/installing.html" />
                    <Icon src={postgresIcon} alt="postgresql" link="https://www.postgresql.org/docs/" />
                    <Icon src={tsIcon} alt="typescript" link="https://www.typescriptlang.org/docs/" />
                    <Icon src={dockerIcon} alt="docker" link="https://docs.docker.com/" />
                    <Icon src={gitIcon} alt="git" link="https://git-scm.com/doc" />
                    <Icon src={cppIcon} alt="cpp" link="https://www.w3schools.com/cpp/" />
                    <Icon src={pythonIcon} alt="python" link="https://www.python.org/doc/" />
                    <Icon src={nextjsIcon} alt="nextjs" link="https://nextjs.org/docs" />
                    <Icon src={dartIcon} alt="dart" link="https://dart.dev/guides" />
                    <Icon src={rustIcon} alt="rust" link="https://www.rust-lang.org/learn" />
                </div>
                <div className="text-sm md:text-xl font-semibold text-gray-500">
                    Building digital wonders, one line of code at a time. Let's create something extraordinary!
                </div>
            </div>
        </div>
    );
};

const Icon = ({ src, alt, link }) => (
    <img
        src={src}
        alt={alt}
        className="h-8 w-8 md:h-10 md:w-10 cursor-pointer"
        onClick={() => window.open(link, '_blank')}
    />
);

function toResume() {
    window.open("https://drive.google.com/file/d/1O9DYT9bFAeToF3i-zUzyeBnTrMYM_Teh/view?usp=sharing", '_blank');
}

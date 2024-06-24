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
    import youtubeIcon from "../assets/images/youtube.png";

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
            <div className="mb-10">
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 p-2">
                    <img
                    src={linkedinIcon}
                    className="h-8 w-8 md:h-12 md:w-12"
                    alt="linkedIn"
                    style = {{cursor:'pointer'}}
                    onClick={() =>
                        window.open(
                        "https://www.linkedin.com/in/shubham-gupta-2a5128232/",
                        "_blank"
                        )
                    }
                    />
                    <img
                    src={githubIcon}
                    className="h-8 w-8 md:h-12 md:w-12"
                    alt="github"
                    style = {{cursor:'pointer'}}
                    onClick={() =>
                        window.open(
                        "https://github.com/ShubhamGupta2701",
                        "_blank"
                        )
                    }
                    />
                    <img
                    src={leetcodeIcon}
                    className="h-8 w-8 md:h-12 md:w-12"
                    alt="leetcode"
                    style = {{cursor:'pointer'}}
                    onClick={() =>
                    window.open(
                        "https://leetcode.com/u/ShubhamG27/",
                        "_blank"
                    )
                    }
                    />
                    <img
                    src={youtubeIcon}
                    className="h-8 w-8 md:h-12 md:w-12"
                    alt="youtube"
                    style = {{cursor:'pointer'}}
                    onClick={() =>
                        window.open(
                        "https://www.youtube.com/channel/UCq3P0xK54t-AGkV1IFDXbMg",
                        "_blank"
                        )
                    }
                    />
                </div>
            </div>
            <div className="text-2xl md:text-3xl text-slate-500 font-semibold underline underline-offset-4 px-4">
                Techstack
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4 mt-4 p-2">
                <Icon
                src={fluterIcon}
                alt="flutter"
                link="https://docs.flutter.dev/"
                />
                <Icon
                src={reactIcon}
                alt="reactjs"
                link="https://react.dev/learn"
                />
                <Icon
                src={nodeIcon}
                alt="nodejs"
                link="https://nodejs.org/docs/latest/api/"
                />
                <Icon
                src={expressIcon}
                alt="expressjs"
                link="https://expressjs.com/en/starter/installing.html"
                />
                <Icon
                src={postgresIcon}
                alt="postgresql"
                link="https://www.postgresql.org/docs/"
                />
                <Icon
                src={tsIcon}
                alt="typescript"
                link="https://www.typescriptlang.org/docs/"
                />
                <Icon
                src={dockerIcon}
                alt="docker"
                link="https://docs.docker.com/"
                />
                <Icon src={gitIcon} alt="git" link="https://git-scm.com/doc" />
                <Icon
                src={cppIcon}
                alt="cpp"
                link="https://www.w3schools.com/cpp/"
                />
                <Icon
                src={pythonIcon}
                alt="python"
                link="https://www.python.org/doc/"
                />
                <Icon
                src={nextjsIcon}
                alt="nextjs"
                link="https://nextjs.org/docs"
                />
                <Icon src={dartIcon} alt="dart" link="https://dart.dev/guides" />
                <Icon
                src={rustIcon}
                alt="rust"
                link="https://www.rust-lang.org/learn"
                />
            </div>
            </div>
            <div className="text-sm md:text-xl font-semibold text-gray-500">
                Building digital wonders, one line of code at a time. Let's create
                something extraordinary!
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
        onClick={() => window.open(link, "_blank")}
    />
    );

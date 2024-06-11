export const ProjectCard = ({ title, desc, image, isReversed }) => {
    return (
        <div className={`font-mono flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} gap-8 py-8 my-4 border-4 px-8 rounded-3xl bg-white`}>
            <img src={image} alt={title} className="w-full lg:w-1/3 h-auto rounded-3xl" />
            <div className="flex flex-col justify-center lg:w-2/3">
                <div className="text-3xl font-extrabold py-8">
                    {title}
                </div>
                <div className="text-md font-semibold text-slate-600">
                    {desc}
                </div>
            </div>
        </div>
    );
}

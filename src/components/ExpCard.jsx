export const ExpCard = ({ CmpName, sDate, eDate, role, desc }) => {
    return (
        <div className="border-4 font-mono bg-white rounded-3xl py-8 px-8 mx-4 md:mx-16 mt-4 mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="text-xl md:text-2xl font-semibold">
                {role} | {CmpName}
            </div>
            <div className="text-sm md:text-base text-gray-600">
                {sDate} to {eDate}
            </div>
            <div className="text-sm md:text-base text-gray-800">
                {desc}
            </div>
        </div>
    )
}

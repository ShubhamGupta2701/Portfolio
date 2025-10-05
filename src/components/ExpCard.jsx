export const ExpCard = ({ CmpName, sDate, eDate, role, desc }) => {
    return (
        <div className="font-mono bg-gradient-to-br from-gray-800/50 to-purple-900/30 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 mx-4 md:mx-8 mt-3 mb-3 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 ease-in-out">
            {/* Compact Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">
                    {role}
                </div>
                <div className="text-base md:text-lg font-medium text-gray-300 mt-1 md:mt-0">
                    {CmpName}
                </div>
            </div>
            
            {/* Compact Date */}
            <div className="inline-block bg-purple-600/20 text-purple-300 text-xs md:text-sm px-3 py-1 rounded-full mb-3 border border-purple-500/20">
                {sDate} to {eDate}
            </div>
            
            {/* Compact Description */}
            <div className="text-gray-300 text-sm leading-relaxed">
                {desc}
            </div>
        </div>
    )
}
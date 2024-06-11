export const ExpCard = ({CmpName,sDate,eDate,role,desc}) => {
    return (
        <div className="border-4 font-mono bg-white rounded-3xl py-8 p-8 mx-16">
            <div className="text-2xl font-semibold">
                {role} | {CmpName}
            </div>
            <div className="text-base text-gray-600 ">
                {sDate} to {eDate}
            </div>
            <div>
                {desc}
            </div>
        </div>
    )
}
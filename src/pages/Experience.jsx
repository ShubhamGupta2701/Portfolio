import { ExpCard } from "../components/ExpCard";

export const Experience = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-6">
            {/* Compact Header */}
            <div className="text-center mb-8 px-4">
                <div className="font-mono text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent py-4">
                    Experience
                </div>
            </div>

            {/* Compact Experience Cards */}
            <div className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto space-y-4">
                <ExpCard 
                    CmpName={"Labra.io"} 
                    sDate={"March-2025"} 
                    eDate={"Present"} 
                    role={"SDET"} 
                    desc={
                        <div className="space-y-2">
                            <div className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <p className="font-normal">Conduct testing and debugging to ensure the functionality and reliability of the software.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <p className="font-normal">Recieved Employee of the Quarter Award.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <p className="font-normal">Optimize Automation scripts running time by 12% in jenkins.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <p className="font-normal">Performing Automation Testing using Typescript, Python</p>
                            </div>
                        </div>
                    }
                />
                
                <ExpCard 
                    CmpName={"Pine Labs Pvt. Ltd."} 
                    sDate={"Feb-2024"} 
                    eDate={"April-2024"} 
                    role={"Engineer"} 
                    desc={
                        <div className="space-y-2">
                            <div className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <p className="font-normal">Perform Unit testing on API's as well as creating API's</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <p className="font-normal">Performs operational activities as defined by Configuration Management policies and procedures.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <p className="font-normal">Works to fulfil Configuration Management Service Requests as assigned.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <p className="font-normal">Engages with strategic projects to ensure Configuration Management are delivered as per requirements within project timeframes.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <p className="font-normal">Ability to manage multiple projects and clients simultaneously.</p>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    );
};
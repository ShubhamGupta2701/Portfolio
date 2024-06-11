import { ExpCard } from "../components/ExpCard";

export const Experience = () => {
    return (
        <div>
            <div className="font-mono text-3xl font-bold flex justify-center p-6">
                Experience
            </div>
            <div className="px-4 md:px-10 lg:px-20 py-4">
                <ExpCard 
                    CmpName={"Pine Labs Pvt. Ltd. "} 
                    sDate={"06-01-2024"} 
                    eDate={"05-04-2024"} 
                    role={"Engineer"} 
                    desc={
                        <div className="text-base font-semibold py-4 gap-2">
                            <p>• Perform Unit testing on API's as well as creating API's</p>
                            <p>• Performs operational activities as defined by Configuration Management policies and procedures.</p>
                            <p>• Works to fulfil Configuration Management Service Requests as assigned.</p>
                            <p>• Engages with strategic projects to ensure Configuration Management are delivered as per requirements within project timeframes.</p>
                            <p>• Ability to manage multiple projects and clients simultaneously.</p>
                        </div>
                    }
                />
            </div>
        </div>
    );
};

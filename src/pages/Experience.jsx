import { ExpCard } from "../components/ExpCard";

export const Experience = () => {
    return (
        <div>
            <div className="font-mono text-3xl font-bold flex justify-center p-6">
                Experience
            </div>
            <div className="px-4 md:px-10 lg:px-20 py-4">
                <ExpCard 
                    CmpName={"Labra.io"} 
                    sDate={"March-2025"} 
                    eDate={"Present"} 
                    role={"SDET"} 
                    desc={
                        <div className="text-base font-semibold py-4 gap-2">
                            <p>• Perform Regresstion testing on API's as well as creating API's</p>
                            <p>• Ensure that Products always meet the desired quality</p>
                            <p>• Use Playwrite to perform Automation Testing</p>
                            <p>• Ability to manage multiple projects and clients simultaneously.</p>
                        </div>
                    }
                />
                <ExpCard 
                    CmpName={"Pine Labs Pvt. Ltd. "} 
                    sDate={"Feb-2024"} 
                    eDate={"April-2024"} 
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

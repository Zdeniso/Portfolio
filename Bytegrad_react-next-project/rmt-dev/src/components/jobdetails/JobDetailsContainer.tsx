import type { TJobItem } from "../../lib/types";
import JobDetailsContent from "./JobDetailsContent";
import JobDetailsHeader from "./JobDetailsHeader";

type JobDetailsContainerProps = {
    jobHighligthed: TJobItem | undefined,
};

export default function JobDetailsContainer({ jobHighligthed }: JobDetailsContainerProps) {

    const content = jobHighligthed ?
        <>
            <JobDetailsHeader jobHighligthed={jobHighligthed}/>
            <JobDetailsContent jobHighligthed={jobHighligthed} />
            <button className="apply">Apply</button>
        </>
        : <>
            <div>Empty lol</div>
        </>   
    
    return (
        <div className="job-details-container">
            {content}
        </div>
     )
}

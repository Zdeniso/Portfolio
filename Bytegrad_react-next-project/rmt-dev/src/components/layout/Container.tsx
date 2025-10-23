import { useState } from "react";
import type { TJobItem } from "../../lib/types";
import JobDetailsContainer from "../jobdetails/JobDetailsContainer";
import JobsListContainer from "../joblist/JobsListContainer";

type ContainerProps = {
    jobItems: TJobItem[],
};

export default function Container({ jobItems }: ContainerProps) {
    const [ jobItemClicked, setJobItemClicked] = useState(0);

    const jobHighligthed: TJobItem | undefined = jobItems.find(jobItem => jobItem.id === jobItemClicked);

    const handleJobItemClicked = (index: number) => {
        setJobItemClicked(index)
    }
    return (
        <main className="container">
            <JobsListContainer 
                jobItems={jobItems}
                jobItemClicked={jobItemClicked}
                onJobItemClicked={handleJobItemClicked}/>

            <JobDetailsContainer jobHighligthed={jobHighligthed} />

        </main>
    )
}

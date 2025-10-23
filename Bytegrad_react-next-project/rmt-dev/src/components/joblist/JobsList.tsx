import type { TJobItem } from "../../lib/types";
import JobItem from "./JobItem";

type JobsListProps = {
    showedItems: TJobItem[],
    jobItemClicked: number,
    onJobItemClicked: (id: number) => void
};

export default function JobsList({ showedItems, jobItemClicked, onJobItemClicked }: JobsListProps) {

    return (
        <div className="jobs-list">
            {showedItems.map(jobItem => (
                <JobItem 
                    key={jobItem.id}
                    jobItem={jobItem}
                    active={jobItem.id === jobItemClicked}
                    onClick={() => onJobItemClicked(jobItem.id)}
                />
            ))}     
        </div>
    )
} 
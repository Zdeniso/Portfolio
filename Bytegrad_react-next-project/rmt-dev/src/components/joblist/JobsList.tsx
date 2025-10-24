import type { TJobItem } from "../../lib/types";
import JobItem from "./JobItem";

type JobsListProps = {
    showedItems: TJobItem[],
    jobItemClicked: number,
    bookmarkedJobItems: number[],
    onJobItemClicked: (id: number) => void,
};

export default function JobsList({ 
    showedItems, 
    jobItemClicked, 
    bookmarkedJobItems, 
    onJobItemClicked }: JobsListProps) {  

    return (
        <div className="jobs-list">
            {showedItems.map(jobItem => (
                <JobItem 
                    key={jobItem.id}
                    jobItem={jobItem}
                    active={jobItem.id === jobItemClicked}
                    isBookmarked={bookmarkedJobItems.some(bookmarkedJobItem => bookmarkedJobItem === jobItem.id)}
                    onClick={() => onJobItemClicked(jobItem.id)}
                />
            ))}     
        </div>
    )
} 
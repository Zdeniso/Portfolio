import type { TJobItem } from "../../lib/types";
import EmptyDetailsContainer from "./EmptyDetailsContainer";
import JobDetailsContent from "./JobDetailsContent";
import JobDetailsHeader from "./JobDetailsHeader";

type JobDetailsContainerProps = {
    jobHighligthed: TJobItem | undefined,
    bookmarkedJobItems: number[],
    onDeleteBookmarkedJobItem: (id: number) => void,
    onAddBookmarkedJobItem: (id: number) => void,
};

export default function JobDetailsContainer({ 
    jobHighligthed,
    bookmarkedJobItems,
    onDeleteBookmarkedJobItem,
    onAddBookmarkedJobItem }: JobDetailsContainerProps) {

    const content = jobHighligthed ?
        <>
            <JobDetailsHeader jobHighligthed={jobHighligthed}/>
            <JobDetailsContent 
                jobHighligthed={jobHighligthed}
                bookmarkedJobItems={bookmarkedJobItems}
                onDeleteBookmarkedJobItem={onDeleteBookmarkedJobItem}
                onAddBookmarkedJobItem={onAddBookmarkedJobItem}
            />
            <button className="apply">Apply</button>
        </>
        : <>
            <EmptyDetailsContainer />
        </>   
    
    return (
        <div className="job-details-container">
            {content}
        </div>
     )
}

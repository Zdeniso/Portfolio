import { useState } from "react"
import type { TJobItem } from "../../lib/types"
import JobsList from "./JobsList"
import JobsListContainerTop from "./JobsListContainerTop"
import Pagination from "./Pagination"

type JobsListContainerProps = {
    jobItems: TJobItem[],
    jobItemClicked: number,
    bookmarkedJobItems: number[],
    onJobItemClicked: (id: number) => void,
};

export default function JobsListContainer({ 
    jobItems, 
    jobItemClicked, 
    bookmarkedJobItems, 
    onJobItemClicked }: JobsListContainerProps) {

    const [actualPage, setActualPage] = useState(1);
    const [isRelevantFilter, setIsRelevantFilter] = useState(true);

    // DERIVED VARIABLE
    const sortedJobItems = isRelevantFilter ?
        [...jobItems].sort((a, b) => b.relevanceScore - a.relevanceScore)
        : [...jobItems].sort((a, b) => a.daysAgo - b.daysAgo);
    
    const showedItems = sortedJobItems.slice((actualPage - 1) * 7, actualPage * 7);

    // EVENT HANDLER
    const handlePageIncrement = () => setActualPage(p => ++p);
    const handlePageDecrement = () => setActualPage(p => --p);
    const handleRelevantFilter = () => setIsRelevantFilter(true);
    const handleRecentFilter = () => setIsRelevantFilter(false);    

    return (
        <div className="jobs-list-container">
            <JobsListContainerTop 
                jobItems={jobItems}
                isRelevantFilter={isRelevantFilter}
                onRelevantFilter={handleRelevantFilter}
                onRecentFilter={handleRecentFilter}/>
            <JobsList 
                showedItems={showedItems}
                jobItemClicked={jobItemClicked}
                bookmarkedJobItems={bookmarkedJobItems}
                onJobItemClicked={onJobItemClicked}
            />
            <Pagination
                showedItems={showedItems}
                actualPage={actualPage}                 
                onPageIncrement={handlePageIncrement}
                onPageDecrement={handlePageDecrement}/>              
        </div>
     )
}

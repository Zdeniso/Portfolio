import { useState } from "react"
import type { TJobItem } from "../../lib/types"
import JobsList from "./JobsList"
import JobsListContainerTop from "./JobsListContainerTop"
import Pagination from "./Pagination"

type JobsListContainerProps = {
    jobItems: TJobItem[],
    jobItemClicked: number,
    onJobItemClicked: (id: number) => void
}

export default function JobsListContainer({ jobItems, jobItemClicked, onJobItemClicked }: JobsListContainerProps) {
    const [actualPage, setActualPage] = useState(1);

    // DERIVED VARIABLE
    const showedItems = jobItems.slice(0 + actualPage * 7, 7 + actualPage * 7)

    // EVENT HANDLER
    const handlePageIncrement = () => {
        setActualPage(p => ++p)
    };

    const handlePageDecrement = () => {
        setActualPage(p => --p)
    };

    return (
        <div className="jobs-list-container">
            <JobsListContainerTop />
            <JobsList 
                showedItems={showedItems}
                jobItemClicked={jobItemClicked}
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

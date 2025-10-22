import JobsList from "./JobsList"
import JobsListContainerTop from "./JobsListContainerTop"
import Pagination from "./Pagination"

export default function JobsListContainer() {
    return (
        <div className="jobs-list-container">
            <JobsListContainerTop />
            <JobsList />
            <Pagination />              
        </div>
     )
}

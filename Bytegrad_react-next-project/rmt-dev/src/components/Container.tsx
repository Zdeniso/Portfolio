import JobDetailsContainer from "./JobDetailsContainer";
import JobsListContainer from "./JobsListContainer";

export default function Container() {
    return (
        <main className="container">
            <JobsListContainer />
            <JobDetailsContainer />
        </main>
    )
}

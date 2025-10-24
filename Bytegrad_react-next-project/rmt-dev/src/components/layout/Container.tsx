import type { TJobItem } from "../../lib/types";
import JobDetailsContainer from "../jobdetails/JobDetailsContainer";
import JobsListContainer from "../joblist/JobsListContainer";

type ContainerProps = {
    jobItems: TJobItem[],
    jobItemClicked: number,
    bookmarkedJobItems: number[],
    onJobItemClicked: (id: number) => void,
    onDeleteBookmarkedJobItem: (id: number) => void,
    onAddBookmarkedJobItem: (id: number) => void,
};

export default function Container({ 
    jobItems,
    jobItemClicked,
    bookmarkedJobItems,
    onJobItemClicked,
    onDeleteBookmarkedJobItem,
    onAddBookmarkedJobItem }: ContainerProps) {

    const jobHighligthed: TJobItem | undefined = jobItems.find(jobItem => jobItem.id === jobItemClicked);

    return (
        <main className="container">
            <JobsListContainer 
                jobItems={jobItems}
                jobItemClicked={jobItemClicked}
                bookmarkedJobItems={bookmarkedJobItems}
                onJobItemClicked={onJobItemClicked}
                />

            <JobDetailsContainer 
                jobHighligthed={jobHighligthed}
                bookmarkedJobItems={bookmarkedJobItems}
                onDeleteBookmarkedJobItem={onDeleteBookmarkedJobItem}
                onAddBookmarkedJobItem={onAddBookmarkedJobItem}
            />

        </main>
    )
}
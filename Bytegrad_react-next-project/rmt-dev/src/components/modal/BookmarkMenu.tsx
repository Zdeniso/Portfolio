import type { TJobItem } from "../../lib/types";
import JobItem from "../joblist/JobItem";
import EmptyBookmarkMenu from "./EmptyBookmarkMenu";

type BookmarkMenuProps = {
    bookmarkedJobs: TJobItem[],
    onJobItemClicked: (id: number) => void,
};

export default function BookmarkMenu({ bookmarkedJobs, onJobItemClicked }: BookmarkMenuProps) { 

    return (
        <div className="bookmark-menu">
            {bookmarkedJobs.length > 0 ? 
                bookmarkedJobs.map(bookmarkedJob => (
                    <JobItem
                        key={bookmarkedJob.id}
                        jobItem={bookmarkedJob}
                        active={false}
                        isBookmarked={true}
                        onClick={() => onJobItemClicked(bookmarkedJob.id)}
                    />
                ))
            : <EmptyBookmarkMenu />
            }
        </div>
    )
}
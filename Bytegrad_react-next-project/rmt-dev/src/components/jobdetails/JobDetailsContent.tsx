import type { TJobItem } from "../../lib/types"
import JobDetailsContentCaracteristics from "./JobDetailsContentCaracteristics"
import JobDetailsContentDaysAndDescription from "./JobDetailsContentDaysAndDescription"
import JobDetailsContentQualifications from "./JobDetailsContentQualifications"
import JobDetailsContentReviews from "./JobDetailsContentReviews"
import JobDetailsContentTitle from "./JobDetailsContentTitle"
import JobDetailsFooter from "./JobDetailsFooter"

type JobDetailsContentProps = {
    jobHighligthed: TJobItem,
    bookmarkedJobItems: number[],
    onDeleteBookmarkedJobItem: (id: number) => void,
    onAddBookmarkedJobItem: (id: number) => void,
};

export default function JobDetailsContent({ 
    jobHighligthed,
    bookmarkedJobItems,
    onDeleteBookmarkedJobItem,
    onAddBookmarkedJobItem }: JobDetailsContentProps) {

    return (       
        <div className="job-details__content">
            <JobDetailsContentTitle jobHighligthed={jobHighligthed} />
            <JobDetailsContentDaysAndDescription 
                jobHighligthed={jobHighligthed}
                bookmarkedJobItems={bookmarkedJobItems}
                onDeleteBookmarkedJobItem={onDeleteBookmarkedJobItem}
                onAddBookmarkedJobItem={onAddBookmarkedJobItem}
            />
            <JobDetailsContentCaracteristics jobHighligthed={jobHighligthed} />
            <JobDetailsContentQualifications jobHighligthed={jobHighligthed} />
            <JobDetailsContentReviews jobHighligthed={jobHighligthed} />
            <JobDetailsFooter />
        </div>
    )
}


// export type TJobItem = {
//     id: number,
//     description: string,
//     qualifications: string[],
//     reviews: string[],
//     title: string,
//     badgeLetters: string,
//     company: string,
//     duration: string,
//     salary: string,
//     location: string,
//     relevanceScore: number,
//     daysAgo: number,
//     coverImgURL: string,
//     companyURL: string
// }

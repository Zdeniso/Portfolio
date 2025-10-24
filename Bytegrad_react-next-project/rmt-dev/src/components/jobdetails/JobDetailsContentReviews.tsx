import type { TJobItem } from "../../lib/types";

type JobDetailsContentReviewsProps = {
    jobHighligthed: TJobItem,
};

export default function JobDetailsContentReviews({ jobHighligthed }: JobDetailsContentReviewsProps) {
    const reviews = jobHighligthed.reviews
    return (
        <div className="content__reviews">
            <div>
                <h3>Company Reviews</h3>
                <p>Recent things people are saying</p>
            </div>
            <div>
                {reviews.map(review => <p key={review}>{review}</p>)}
            </div>                    
        </div>
    )
}

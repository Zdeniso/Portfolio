import { TriangleUpIcon } from "@radix-ui/react-icons";
import type { TFeedbackItem } from "../../utils/types";
import { useState, type MouseEvent } from "react";

type FeedbackItemProps = {
    feedbackItem: TFeedbackItem
};

export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
    const [open, setOpen] = useState(false);
    const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount)

    const handleFeedbackItemClick = () => {
        setOpen(o => !o)
    };

    const handleUpvoteClick = (e: MouseEvent<HTMLButtonElement>) => {
        setUpvoteCount(u => ++u);
        e.currentTarget.disabled = true;
        e.stopPropagation();

    };

    return (
        <li 
            onClick={handleFeedbackItemClick}
            className={`feedback ${open ? 'feedback--expand' : ''}`}
        >
            <button onClick={handleUpvoteClick}>
                <TriangleUpIcon />
                <span>{upvoteCount}</span>
            </button>

            <div>
                <p>{feedbackItem.badgeLetter}</p>
            </div>

            <div>
                <p>{feedbackItem.company}</p>
                <p>{feedbackItem.text}</p>
            </div>

            <p>{feedbackItem.daysAgo === 0 ? 'NEW' : `${feedbackItem.daysAgo}d`}</p>
        </li>
    )
}

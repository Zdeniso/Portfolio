import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import type { TFeedbackItem } from "../../utils/types";

type FeedbackListProps = {
    feedbackItems: TFeedbackItem[],
    isLoading: boolean,
    errorMessage: string
};

export default function FeedbackList({ feedbackItems, isLoading, errorMessage }: FeedbackListProps) {
    return (
        <ol className="feedback-list">
            {isLoading && <Spinner />}
            {errorMessage && <ErrorMessage message={errorMessage} />}
            {feedbackItems.map(feedbackItem => 
                <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />)}
        </ol>
    )
}

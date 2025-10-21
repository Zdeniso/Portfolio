import type { TFeedbackItem } from "../../utils/types";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

type ContainerProps = {
    feedbackItems: TFeedbackItem[],
    isLoading: boolean,
    errorMessage: string,
    onAddToList: (text: string) => void
};

export default function Container({ 
    feedbackItems, 
    isLoading, 
    errorMessage, 
    onAddToList}: ContainerProps) {   
    return (
        <main className="container">
            <Header onAddToList={onAddToList}/>
            <FeedbackList 
                feedbackItems={feedbackItems}
                isLoading={isLoading}
                errorMessage={errorMessage}
                />
        </main>
    )
}

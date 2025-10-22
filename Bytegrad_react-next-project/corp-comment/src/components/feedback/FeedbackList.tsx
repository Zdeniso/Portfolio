import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

export default function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const feedbackItems = useFeedbackItemsStore((state) => state.feedbackItems);
  const selectedCompany = useFeedbackItemsStore((state) => state.selectedCompany);

  // Calcul du filtrage directement dans le composant
  const filteredFeedbackItems = selectedCompany
    ? feedbackItems.filter((f) => f.company === selectedCompany)
    : feedbackItems;

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

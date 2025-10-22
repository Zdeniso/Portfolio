import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  // récupère directement feedbackItems depuis le store
  const feedbackItems = useFeedbackItemsStore((state) => state.feedbackItems);
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  // calcule les compagnies uniques
  const companyList = [...new Set(feedbackItems.map((f) => f.company))];

  if (!companyList.length) return <p>...</p>;

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={selectCompany}
        />
      ))}
    </ul>
  );
}

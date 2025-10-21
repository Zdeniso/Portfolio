import { useEffect, useMemo, useState } from "react";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
import type { TFeedbackItem } from "../utils/types";

export default function App() {
    const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedCompany, setSelectedCompany] = useState('');

    // DERIVED VARIABLE
    const companyList = useMemo(() => 
        feedbackItems.map(feedbackItem => feedbackItem.company)
        .filter((company, index, array) => {
            return array.indexOf(company) === index
        }),
        [feedbackItems]
    );

    const filteredFeedbackItems = useMemo( () => 
        selectedCompany ? 
        feedbackItems.filter(feedbackItem => feedbackItem.company === selectedCompany)
        : feedbackItems,
        [feedbackItems, selectedCompany]
    );

    // EVENT HANDLER
    const handleAddToList = async (text: string) => {
        const companyName = text
            .split(' ')
            .find((word: string) => word.includes('#'))!
            .substring(1);

        const newItem: TFeedbackItem = {
            id: new Date().getTime(),
            upvoteCount: 0,
            company: companyName,
            badgeLetter: companyName[0].toUpperCase(),
            text,
            daysAgo: 0
        };
        setFeedbackItems([...feedbackItems, newItem]);

        await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks", {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json",
            }
        })
    };

    const handleSelectCompany = (company: string) => {
        setSelectedCompany(company)
    };

    // useEffect after rendering
    useEffect(() => {
        const fetchFeedbackItems = async () => {
            setIsLoading(true);
            try {
                const res = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks");
                if (!res.ok) {
                    throw new Error()
                };

                const data = await res.json();
                setFeedbackItems(data.feedbacks)

            } catch (error) {
                setErrorMessage(`Something went wrong : ${error}`);
            };
            setIsLoading(false)
        };

        fetchFeedbackItems();
    }, []);

    return (
        <div className="app">
            <Footer />
            <Container 
                feedbackItems={filteredFeedbackItems}
                isLoading={isLoading}
                errorMessage={errorMessage}
                onAddToList={handleAddToList}/>
            <HashtagList 
                companyList={companyList}
                onSelectCompany={handleSelectCompany}/>
        </div>
    )
}
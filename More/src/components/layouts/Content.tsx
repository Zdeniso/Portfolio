import type { TPageContent } from "../lib/types";
import EventsPageContent from "../EventsPageContent";
import HomePageContent from "../HomePageContent";
import EventDetailsPageContent from "../EventDetailsPageContent";

type ContentProps = {
    pageContentActive: TPageContent,
    onChangePage: (newPage: TPageContent) => void
};

export default function Content({ pageContentActive, onChangePage }: ContentProps) {

    const pageContent = () => {
        if (pageContentActive === "home") {
            return <HomePageContent />
        } else if (pageContentActive === "events") {
            return <EventsPageContent onChangePage={onChangePage}/>
        } else {
            return <EventDetailsPageContent />
        }
    }

    return pageContent()
}

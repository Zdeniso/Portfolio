import EventCard from "./EventCard";
import type { TPageContent } from "./lib/types";

type EventsPageContentProps = {
    onChangePage: (newPage: TPageContent) => void
};

export default function EventsPageContent({ onChangePage }: EventsPageContentProps) {
    return (
        <main className="events-page-content">
            <h1>Events in Austin</h1>
            <ul className="event-cards-container">
                <EventCard onClick={onChangePage}/>
                <EventCard onClick={onChangePage}/>
                <EventCard onClick={onChangePage}/>
                <EventCard onClick={onChangePage}/>
                <EventCard onClick={onChangePage}/>
                <EventCard onClick={onChangePage}/>
                <EventCard onClick={onChangePage}/>
                <EventCard onClick={onChangePage}/>   
            </ul>
        </main>
    )
}

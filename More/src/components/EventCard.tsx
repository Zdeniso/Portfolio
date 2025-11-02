import type { TPageContent } from "./lib/types";

type EventCardProps = {
    onClick: (newPage: TPageContent) => void
};

export default function EventCard({ onClick }: EventCardProps) {

    const handleClick = (e) => {
        const target = e.target as HTMLElement;
        const closestCard = target.closest('.event-card');
        onClick("details")
        console.log(closestCard)
    }

    return (
        <li 
            className="event-card"
            onClick={handleClick}>
            <img src="./src/assets/dj.jpg" alt="dj" />
            <div className="event-card-infos-container">
                <h2 className="event-card__title">DJ Practice Session</h2>
                <p className="event-card__author">By DJ Inc.</p>
                <p className="event-card__place">Austin Music Hall</p>
                <div className="event-card__date-container">
                    <span>12</span>
                    <span>OCT</span>
                </div>
            </div>
        </li>
    )
}

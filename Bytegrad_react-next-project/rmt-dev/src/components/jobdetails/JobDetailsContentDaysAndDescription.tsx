import type { TJobItem } from "../../lib/types";

type JobDetailsContentDaysAndDescriptionProps = {
    jobHighligthed: TJobItem,
    bookmarkedJobItems: number[],
    onDeleteBookmarkedJobItem: (id: number) => void,
    onAddBookmarkedJobItem: (id: number) => void,
};

export default function JobDetailsContentDaysAndDescription({ 
    jobHighligthed,
    bookmarkedJobItems,
    onDeleteBookmarkedJobItem,
    onAddBookmarkedJobItem }: JobDetailsContentDaysAndDescriptionProps) {

    const id = jobHighligthed.id;
    const daysAgo = jobHighligthed.daysAgo;
    const description = jobHighligthed.description;

    const isBookmarked = bookmarkedJobItems.some(bookmarkedJobItem => bookmarkedJobItem === id);

    const handleClick = () => isBookmarked ? onDeleteBookmarkedJobItem(id) : onAddBookmarkedJobItem(id)

    
    return (
        <div className={`content__days-and-description ${isBookmarked && 'content__days-and-description--active'}`}>
            <div>{daysAgo}d</div>
            <svg 
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 640 640">
                <path 
                    d="M192 64C156.7 64 128 92.7 128 128L128 544C128 555.5 134.2 566.2 144.2 571.8C154.2 577.4 166.5 577.3 176.4 571.4L320 485.3L463.5 571.4C473.4 577.3 485.7 577.5 495.7 571.8C505.7 566.1 512 555.5 512 544L512 128C512 92.7 483.3 64 448 64L192 64z"
                />
            </svg>
            <p>{description}</p>
        </div>
    )
}

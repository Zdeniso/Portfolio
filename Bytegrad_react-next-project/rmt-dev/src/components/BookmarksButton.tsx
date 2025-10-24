import { TriangleDownIcon } from "@radix-ui/react-icons"

type BookmarksButtonProps = {
    onActiveBookmarkMenuClick: () => void
};

export default function BookmarksButton({ onActiveBookmarkMenuClick }: BookmarksButtonProps) {
    
    return (
        <button 
            className="bookmarks-btn"
            onClick={onActiveBookmarkMenuClick}>
            <span>bookmark</span>
            <TriangleDownIcon />
        </button>
    )
}

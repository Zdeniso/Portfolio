import AppSignature from "./AppSignature";
import BookmarksButton from "./BookmarksButton";

type SignatureAndBookmarksProps = {
    onActiveBookmarkMenuClick: () => void
};

export default function SignatureAndBookmarks({ onActiveBookmarkMenuClick }: SignatureAndBookmarksProps) {
    return (
        <div className="signature-and-bookmarks">
            <AppSignature />
            <span> | </span>
            <BookmarksButton onActiveBookmarkMenuClick={onActiveBookmarkMenuClick}/>
        </div>
    )
}
import AppSignature from "./AppSignature";
import BookmarksButton from "./BookmarksButton";

export default function SignatureAndBookmarks() {
    return (
        <div className="signature-and-bookmarks">
            <AppSignature />
            <span> | </span>
            <BookmarksButton />
        </div>
    )
}
import SignatureAndBookmarks from "../SignatureAndBookmarks";
import SearchForm from "../SearchForm";

type HeaderProps = {
    onActiveBookmarkMenuClick: () => void
};

export default function Header({ onActiveBookmarkMenuClick }: HeaderProps) {
    return (
        <header className="header">
            <SignatureAndBookmarks 
                onActiveBookmarkMenuClick={onActiveBookmarkMenuClick}
            />
            <SearchForm />
        </header>
    )
}

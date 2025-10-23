import SignatureAndBookmarks from "../SignatureAndBookmarks";
import SearchForm from "../SearchForm";

export default function Header() {
    return (
        <header className="header">
            <SignatureAndBookmarks />
            <SearchForm />
        </header>
    )
}

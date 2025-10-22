import LogoAndBookmarks from "./SignatureAndBookmarks";
import SearchForm from "./SearchForm";

export default function Header() {
    return (
        <header className="header">
            <LogoAndBookmarks />
            <SearchForm />
        </header>
    )
}

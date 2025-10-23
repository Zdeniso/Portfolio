import BookmarkMenu from "./BookmarkMenu";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
    const bookmarkOpen = false;
    const show = bookmarkOpen && <BookmarkMenu />;
    return (
        <>
            {show}
            <Header />
            <Container />
            <Footer />
        </>
    )
}
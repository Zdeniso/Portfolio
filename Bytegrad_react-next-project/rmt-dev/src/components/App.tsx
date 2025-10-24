import { useEffect, useState } from "react";
import { fetchJobItemsData } from "../lib/utils";
import BookmarkMenu from "./modal/BookmarkMenu";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import type { TJobItem } from "../lib/types";

export default function App() {
    const [jobItems, setJobItems] = useState<TJobItem[]>([]);
    const [bookmarkedJobItems, setBookmarkedJobItems] = useState<number[]>([]);
    const [isBookmarkMenuActive, setIsBookmarkedMenuActive] = useState(false);
    const [jobItemClicked, setJobItemClicked] = useState(0);

    const bookmarkedJobs = jobItems.filter(jobItem =>
        bookmarkedJobItems.includes(jobItem.id)
    );

    useEffect(() => {
        if (jobItemClicked !== 0) {
            history.pushState(null, '', `/#${jobItemClicked}`);
        }
    }, [jobItemClicked]);

    useEffect(() => {
        const id = window.location.hash.substring(1);
        if (id) {
            setJobItemClicked(Number(id))
        }
    }, [])

    useEffect(() => {
        const handleHashChange = () => {
            const id = window.location.hash.substring(1); 
            setJobItemClicked(Number(id) || 0);
        };
        handleHashChange()
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    useEffect(() => {
        const fetchJobs = async () => {
            const data = await fetchJobItemsData()

            if (!data) {
                console.log("A problem occured");
                return
            } else {
                setJobItems(data)
            }
        };
        fetchJobs()
    }, []);

    useEffect(() => {
        if (!isBookmarkMenuActive) return;

        const handleClickOutside = (event: MouseEvent) => {
            const menuEl = document.querySelector(".bookmark-menu");
            if (menuEl && !menuEl.contains(event.target as Node)) {
            setIsBookmarkedMenuActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isBookmarkMenuActive]);


    // EVENT HANDLER
    const handleActiveBookmarkMenuClick = () => {
        setIsBookmarkedMenuActive(prev => !prev);
    };

    const handleAddBookmarkedJobItem = (id: number) => {
        const newBookmarkedJobItems = [...bookmarkedJobItems, id];
        setBookmarkedJobItems(newBookmarkedJobItems)
    };

    const handleDeleteBookmarkedJobItem = (id: number) => {
        const newBookmarkedJobItems = bookmarkedJobItems.filter(bookmarkedJobItem => bookmarkedJobItem !== id);
        setBookmarkedJobItems(newBookmarkedJobItems)
    };

    const handleJobItemClicked = (index: number) => {
        setJobItemClicked(index)
    }

    return (
        <>
            {isBookmarkMenuActive && 
                <BookmarkMenu 
                    bookmarkedJobs={bookmarkedJobs}
                    onJobItemClicked={handleJobItemClicked}
                />
            }
            <Header 
                onActiveBookmarkMenuClick={handleActiveBookmarkMenuClick}/>
            <Container 
                jobItems={jobItems}
                jobItemClicked={jobItemClicked}
                bookmarkedJobItems={bookmarkedJobItems}
                onJobItemClicked={handleJobItemClicked}
                onDeleteBookmarkedJobItem={handleDeleteBookmarkedJobItem}
                onAddBookmarkedJobItem={handleAddBookmarkedJobItem}

                />
            <Footer />
        </>
    )
}
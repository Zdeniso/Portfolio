import { useEffect, useState } from "react";
import { fetchJobItemsData } from "../lib/utils";
import BookmarkMenu from "./modal/BookmarkMenu";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import type { TJobItem } from "../lib/types";

export default function App() {
    const [ jobItems, setJobItems ] = useState<TJobItem[]>([]);

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

    return (
        <>
            {false! && <BookmarkMenu />}
            <Header />
            <Container jobItems={jobItems}/>
            <Footer />
        </>
    )
}
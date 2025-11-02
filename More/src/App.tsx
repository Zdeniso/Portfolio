import { useState } from "react";
import Content from "./components/layouts/Content";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import type { TPageContent } from "./components/lib/types";

export default function App() {
    const [pageContentActive, setPageContentActive] = useState<TPageContent>("home");
    
    const handleChangePage = (newPage: TPageContent) => {
        setPageContentActive(newPage)
    };
    
    return (
        <>
            <Header 
                pageContentActive={pageContentActive} 
                onChangePage={handleChangePage}
            />
            
            <Content 
                pageContentActive={pageContentActive}
                onChangePage={handleChangePage}
            />
            
            <Footer />
        </>
    )
}
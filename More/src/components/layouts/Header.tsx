import type { TPageContent } from "../lib/types";

type THeader = {
    pageContentActive: TPageContent,
    onChangePage: (newPage: TPageContent) => void
};

export default function Header({ pageContentActive, onChangePage }: THeader) {

    return (
        <header >
            <a href="">
                <p>Evento</p>
            </a>
            <nav>
                <button 
                    className={`${pageContentActive === "home" && "button--active"}`}
                    onClick={() => onChangePage("home")}
                >
                    Home
                </button>
                <button 
                    className={`${pageContentActive === "events" && "button--active"}`}
                    onClick={() => onChangePage("events")}
                >
                    All Events
                </button>
            </nav>    
        </header>
    )
}

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type PaginationButtonProps = {
    navigation: "left" | "right",
    pageNumber: number,
    onClick: () => void
};

export default function PaginationButton({ navigation, pageNumber, onClick }: PaginationButtonProps ) {
    
    const buttonJsx = navigation === "left" ?
        <button 
            className="page-nav-btn"
            onClick={onClick}
        >
            <span><ArrowLeftIcon /></span>
            Page {pageNumber}
        </button>
        : <button 
            className="page-nav-btn"
            onClick={onClick}
        >
            Page {pageNumber}
            <span><ArrowRightIcon /></span>
        </button>
    
    
    return buttonJsx
}

import type { TJobItem } from "../../lib/types";
import PaginationButton from "./PaginationButton";

type PaginationProps = {
    showedItems: TJobItem[],
    actualPage: number,
    onPageIncrement: () => void,
    onPageDecrement:() => void
};

export default function Pagination({ showedItems, actualPage, onPageDecrement, onPageIncrement }: PaginationProps) {
 
    const leftNav = actualPage > 1 ? 
        <PaginationButton 
            navigation="left" 
            pageNumber={actualPage - 1} 
            onClick={onPageDecrement}
        />
        : null;

    const rightNav = showedItems.length >= 7 ?
        <PaginationButton 
            navigation="right" 
            pageNumber={actualPage + 1}
            onClick={onPageIncrement}
        />
        : null;        

    return (
        <div className="jobs-list-container__pagination">
            <div className="pagination-left">
                {leftNav}
            </div>
            <div className="pagination-right">
                {rightNav}
            </div>
        </div>
    )
}
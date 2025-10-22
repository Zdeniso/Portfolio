import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function Pagination() {
    return (
        <div className="jobs-list-container__pagination">
            <button className="page-nav-btn">
                <span><ArrowLeftIcon /></span>Page 1</button>
            <button className="page-nav-btn">
                Page 2<span><ArrowRightIcon /></span></button>
        </div>
    )
}

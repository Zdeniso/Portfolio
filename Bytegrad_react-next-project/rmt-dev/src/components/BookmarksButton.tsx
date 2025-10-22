import { TriangleDownIcon } from "@radix-ui/react-icons"

export default function BookmarksButton() {
    return (
        <button className="bookmarks-btn">
            <span>bookmark</span>
            <TriangleDownIcon />
        </button>
    )
}

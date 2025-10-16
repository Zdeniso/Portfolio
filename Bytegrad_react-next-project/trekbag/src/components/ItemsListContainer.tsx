import Items from "./Items";
import type { Item } from '../utils/types'

type ItemsListContainerProps = {
    items: Item[],
    onDeleteItemClick: (id: number) => void,
    onPackedItemClick: (id: number) => void,
};

export default function ItemsListContainer({ items, onDeleteItemClick, onPackedItemClick }: ItemsListContainerProps) {
    return (
        <div className="list-of-items">
            <Items 
                items={items}
                onDeleteItemClick={onDeleteItemClick}
                onPackedItemClick={onPackedItemClick}
            />
        </div>
    )
}
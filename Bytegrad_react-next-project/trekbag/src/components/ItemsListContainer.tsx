import Items from "./Items";
import type { Item } from '../utils/types'

type ItemsListContainerProps = {
    items: Item[],
    onDeleteItemClick: (id: number) => void,
    onPackedItemClick: (id: number) => void,
};

export default function ItemsListContainer({ items, onDeleteItemClick, onPackedItemClick }: ItemsListContainerProps) {

    const emptyListStyle = 
        <div className="list-of-items list-of-items--empty">
            <p className="empty-title">Empty Packing List</p>
            <p className="empty-text">Start by adding some items you absolutely don't want to forget</p>
        </div>;
    
    const normalListStyle =
        <div className="list-of-items">
            <Items 
                items={items}
                onDeleteItemClick={onDeleteItemClick}
                onPackedItemClick={onPackedItemClick}
            />
        </div>;

    const content = !items.length ? emptyListStyle : normalListStyle
 
    return content
}
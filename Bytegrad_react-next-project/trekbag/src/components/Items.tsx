import ItemCard from "./ItemCard"
import type { Item } from '../utils/types'

type ItemsProps = {
    items: Item[],
    onDeleteItemClick: (id: number) => void,
    onPackedItemClick: (id: number) => void,
};

export default function Items({ items, onDeleteItemClick, onPackedItemClick }: ItemsProps) {
    const itemList = items.map((item, index) => 
        <ItemCard 
            key={index} 
            item={item}
            onDeleteItemClick={onDeleteItemClick}
            onPackedItemClick={onPackedItemClick}
        />
    );

    return (
        <ul className="items">
            {itemList}
        </ul>
  )
}
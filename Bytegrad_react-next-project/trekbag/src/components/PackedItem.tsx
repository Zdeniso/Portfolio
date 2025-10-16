import type { Item } from '../utils/types'

type PackedItemProps = {
    items: Item[]
};

export default function PackedItem({ items }: PackedItemProps) {
    const nbOfItems = items.length;
    const nbOfItemsPacked = items.filter((item: Item) => item.packed).length;
    
    return (
        <div className="number-of-packed-item"><span className="u-bold">{nbOfItemsPacked}</span> / {nbOfItems} items packed</div>
    )
}

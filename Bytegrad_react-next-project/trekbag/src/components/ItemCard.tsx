import type { Item } from '../utils/types'

type ItemCardProps = {
    item: Item,
    onDeleteItemClick: (id: number) => void,
    onPackedItemClick: (id: number) => void,
};

export default function ItemCard({ item, onDeleteItemClick, onPackedItemClick }: ItemCardProps) {
    const { text, packed } = item;
    const packedStyle = packed ? 'tick-icon--active' : '';

    const handleDeleteClick = () => {
        onDeleteItemClick(item.id);
    };

    const handlePackedClick = () => {
        onPackedItemClick(item.id)
    };

    return (
        <li className="item">
            <div className={`tick-icon ${packedStyle}`} onClick={handlePackedClick}></div>
            <p className="item-text">{text}</p>
            <i className="fa-solid fa-xmark cross-symbol" onClick={handleDeleteClick}/>
        </li>
     )
}
import FilterContainer from "./FilterContainer";
import ItemsListContainer from "./ItemsListContainer";
import type { Item } from '../utils/types'

type ListZoneProps = {
    items: Item[],
    onDeleteItemClick: (id: number) => void,
    onPackedItemClick: (id: number) => void,
    onFilterChange: (value: string) => void
};

export default function ListZone({ items, onDeleteItemClick, onPackedItemClick, onFilterChange }: ListZoneProps) {
    return (
        <section className="list-zone">
            <FilterContainer onFilterChange={onFilterChange}/>
            <ItemsListContainer 
                items={items}
                onDeleteItemClick={onDeleteItemClick}
                onPackedItemClick={onPackedItemClick}
            />
        </section>
    )
}
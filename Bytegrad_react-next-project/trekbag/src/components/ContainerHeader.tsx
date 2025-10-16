import Circles from "./Circles";
import PackedItem from "./PackedItem";
import type { Item } from '../utils/types'

type ContainerHeaderProps = {
    items: Item[]
};

export default function ContainerHeader({ items }: ContainerHeaderProps) {
    return (
        <section className="container__header">
            <Circles />
            <PackedItem 
                items={items}
            />
        </section>
    )
}

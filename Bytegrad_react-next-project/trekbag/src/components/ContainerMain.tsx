import CommandsZone from "./CommandsZone";
import ListZone from "./ListZone";
import type { Item } from '../utils/types'

type ContainerMainProps = {
    inputValue: string,
    items: Item[],
    onAddItemClick: () => void,
    onInputChange: (value: string) => void,
    onDeleteItemClick: (id: number) => void,
    onPackedItemClick: (id: number) => void,
    onMarkAllComplete: () => void,
    onMarkAllIncomplete: () => void,
    onReset: () => void,
    onRemoveAll: () => void,
    onFilterChange: (value: string) => void
};


export default function ContainerMain({ 
    inputValue, 
    items, 
    onAddItemClick, 
    onInputChange, 
    onDeleteItemClick, 
    onPackedItemClick,
    onMarkAllComplete, 
    onMarkAllIncomplete, 
    onReset,
    onRemoveAll,
    onFilterChange 
}: ContainerMainProps) {

    return (
        <section className="container__main">
            <ListZone 
                items={items}
                onDeleteItemClick={onDeleteItemClick}
                onPackedItemClick={onPackedItemClick}
                onFilterChange={onFilterChange}
                
            />
            <CommandsZone
                inputValue={inputValue}
                onAddItemClick={onAddItemClick}
                onInputChange={onInputChange}
                onMarkAllComplete={onMarkAllComplete}
                onMarkAllIncomplete={onMarkAllIncomplete}
                onReset={onReset} 
                onRemoveAll={onRemoveAll}                
            />
        </section>
  )
}

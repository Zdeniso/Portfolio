import ContainerHeader from "./ContainerHeader";
import ContainerMain from "./ContainerMain";
import { useState } from "react";
import type { Item } from '../utils/types'

export default function Container() {
    //STATES
    const [items, setItems] = useState<Item[]>([
        {id: 1, text: 'Initial| phone charger', packed: true}, 
        {id: 2, text: 'Initial| tee shirt and pull over', packed: true}, 
        {id: 3, text: 'Initial| toothbrush', packed: false}
    ]);
    const [inputValue, setInputValue] = useState<string>("");
    const [nextId, setNextId] = useState(4);
  
    // DERIVED VARIABLE FROM STATES

    // EVENT HANDLER
    const handleInputChange = (value: string) => {
        setInputValue(value)
    };

    const handleAddItemClick = () => {
        if (!inputValue.trim()) return;
        const newItem: Item = { id: nextId, text: inputValue, packed: false };
        setItems([...items, newItem]);
        setInputValue("");
        setNextId(n => n + 1)
    };

    const handleDeleteItemClick = (index: number) => {
        const newList = items.filter((item) => item.id !== index);
        setItems(newList)
    };

    const handlePackedItemClick = (id: number) => {
        const updatedItems = items.map(item => 
            item.id === id ? { ...item, packed: !item.packed } : item
        );
        setItems(updatedItems)
    };

    const handleMarkAllComplete = () => {
        const updatedItems = items.map(item => 
            !item.packed ? { ...item, packed: true} : item
        );
        setItems(updatedItems)
    };

    const handleMarkAllIncomplete = () => {
        const updatedItems = items.map(item => 
            item.packed ? { ...item, packed: false} : item
        );
        setItems(updatedItems)
    };        
    
    const handleReset = () => {
        setItems([
            {id: 1, text: 'Initial| phone charger', packed: true}, 
            {id: 2, text: 'Initial| tee shirt and pull over', packed: true}, 
            {id: 3, text: 'Initial| toothbrush', packed: false}
        ])  
    };

    const handleRemoveAll = () => {
        setItems([])
    };

    const handleFilterChange = (value: string) => {
        let sorted: Item[] = [];
        switch (value) {
            case 'default':
                sorted = [...items].sort((a, b) => a.text.localeCompare(b.text));
                break
            case 'packed':
                sorted = [...items].sort((a, b) => Number(b.packed) - Number(a.packed));
                break
            case 'unpacked' :
                sorted = [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
                break
            default :
                sorted = [...items]
        };
        setItems(sorted)
    };

    return (
        <main className="container">
            <ContainerHeader items={items}/>
            <ContainerMain
                inputValue={inputValue}  
                items={items}
                onAddItemClick={handleAddItemClick}
                onInputChange={handleInputChange}
                onDeleteItemClick={handleDeleteItemClick}
                onPackedItemClick={handlePackedItemClick}
                onMarkAllComplete={handleMarkAllComplete}
                onMarkAllIncomplete={handleMarkAllIncomplete}
                onReset={handleReset} 
                onRemoveAll={handleRemoveAll}
                onFilterChange={handleFilterChange}
            />
        </main>
    )
}

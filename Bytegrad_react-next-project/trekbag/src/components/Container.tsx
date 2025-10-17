import ContainerHeader from "./ContainerHeader"
import ContainerMain from "./ContainerMain"
import { useState, useEffect } from "react"
import type { Item } from '../utils/types'
import { DEFAULT_ITEMS } from '../utils/constants'

// INITIALIZATION FUNCTION
const initItems = () => {
    try {
        const stored = localStorage.getItem("Items");
        const parsed = stored ? JSON.parse(stored) : null;
        return Array.isArray(parsed) && parsed.length ? parsed : DEFAULT_ITEMS;
    } catch {
        return DEFAULT_ITEMS;
    }
};

export default function Container() {
    // STATES
    const [items, setItems] = useState<Item[]>(initItems);
    const [inputValue, setInputValue] = useState<string>("");

    // DERIVE VARIABLE
    const nextId = items.reduce((max, it) => Math.max(max, it.id), 0) + 1;

    // USEEFFECT
    useEffect(() => {
        localStorage.setItem("Items", JSON.stringify(items));
    }, [items]);


    // EVENT HANDLER
    const handleInputChange = (value: string) => {
        setInputValue(value)
    };

    const handleAddItemClick = () => {
        if (!inputValue.trim()) return;
        const newItem: Item = { id: nextId, text: inputValue, packed: false };
        setItems([...items, newItem]);
        setInputValue("");
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
        const updatedItems = items.map(item => {
            return { ...item, packed: true}
        });
        setItems(updatedItems)
    };

    const handleMarkAllIncomplete = () => {
        const updatedItems = items.map(item => {
            return { ...item, packed: false}
        });
        setItems(updatedItems)
    };        
    
    const handleReset = () => {
        setItems(DEFAULT_ITEMS)  
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

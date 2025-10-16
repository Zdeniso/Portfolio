import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import SecondaryButtons from "./SecondaryButtons";
import SecondaryHeader from "./SecondaryHeader";

type CommandsZoneProps = {
    inputValue: string,
    onAddItemClick: () => void,
    onInputChange: (value: string) => void,
    onMarkAllComplete: () => void,
    onMarkAllIncomplete: () => void,
    onReset: () => void,
    onRemoveAll: () => void
}

export default function CommandsZone({ 
    inputValue, 
    onAddItemClick, 
    onInputChange, 
    onMarkAllComplete, 
    onMarkAllIncomplete, 
    onReset,
    onRemoveAll 
}: CommandsZoneProps) {

    return (
        <section className="commands-zone">
            <SecondaryHeader />
            <Input 
                inputValue={inputValue}
                onChange={onInputChange}
            />
            <PrimaryButton 
                onClick={onAddItemClick}
            />
            <SecondaryButtons 
                onMarkAllComplete={onMarkAllComplete}
                onMarkAllIncomplete={onMarkAllIncomplete}
                onReset={onReset} 
                onRemoveAll={onRemoveAll}
            />
        </section>
    )
}

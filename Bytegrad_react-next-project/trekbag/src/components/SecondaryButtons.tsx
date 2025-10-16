import SecondaryButton from "./SecondaryButton";

type SecondaryButtonsProps = {
    onMarkAllComplete: () => void,
    onMarkAllIncomplete: () => void,
    onReset: () => void,
    onRemoveAll: () => void,
};

export default function SecondaryButtons( { 
    onMarkAllComplete, 
    onMarkAllIncomplete, 
    onReset,
    onRemoveAll 
}: SecondaryButtonsProps) {

    return (
        <section 
            className="secondary-buttons"
        >
            <SecondaryButton label="Mark all as complete" onClick={onMarkAllComplete} />
            <SecondaryButton label="Mark all as incomplete" onClick={onMarkAllIncomplete} />
            <SecondaryButton label="Reset to initial" onClick={onReset} />
            <SecondaryButton label="Remove all items" onClick={onRemoveAll} />
        </section>
    )
}
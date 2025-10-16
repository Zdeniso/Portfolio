import SecondaryButton from "./SecondaryButton";

export default function SecondaryButtons() {
    return (
        <section className="secondary-buttons">
            <SecondaryButton label="Mark all as complete"/>
            <SecondaryButton label="Mark all as incomplete"/>
            <SecondaryButton label="Reset to initial"/>
            <SecondaryButton label="Remove all items"/>
        </section>
    )
}

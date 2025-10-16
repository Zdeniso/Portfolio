import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import SecondaryButtons from "./SecondaryButtons";
import SecondaryHeader from "./SecondaryHeader";

export default function CommandsZone() {
    return (
        <section className="commands-zone">
            <SecondaryHeader />
            <Input />
            <PrimaryButton />
            <SecondaryButtons />
        </section>
    )
}

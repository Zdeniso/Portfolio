type FilterChoiceProps = {
    text : string,
    value: 'default' | 'packed' | 'unpacked'
};

export default function FilterChoice({ text, value }: FilterChoiceProps) {
    return (
        <option className="filter-choice" value={value}>{text}</option>
    )
}
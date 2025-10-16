type FilterChoiceProps = {
    text : string
};

export default function FilterChoice({ text }: FilterChoiceProps) {
  return <option className="filter-choice">{text}</option>
}

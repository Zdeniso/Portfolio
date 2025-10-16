import Filter from "./Filter";

type FilterContainerProps = {
    onFilterChange: (value: string) => void
};

export default function FilterContainer({onFilterChange}: FilterContainerProps) {
     return (
        <div className="filter-zone">
            <Filter onFilterChange={onFilterChange}/>
        </div>
    )
}
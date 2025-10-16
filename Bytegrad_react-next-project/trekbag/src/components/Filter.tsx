import FilterChoice from "./FilterChoice";

type FilterProps = {
    onFilterChange: (value: string) => void
};

export default function Filter({ onFilterChange }: FilterProps) {
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange(e.target.value)
    };

    return (
        <select className="filter" onChange={handleFilterChange}>
            <FilterChoice text='Sort by default' value='default'/>
            <FilterChoice text='Sort by packed' value='packed'/>
            <FilterChoice text='Sort by unpacked' value='unpacked'/>
        </select>
    )
}
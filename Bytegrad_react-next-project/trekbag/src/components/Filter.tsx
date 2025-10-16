import FilterChoice from "./FilterChoice";

export default function Filter() {
    return (
        <select className="filter">
            <FilterChoice text='Sort by default' />
            <FilterChoice text='Sort by packed' />
            <FilterChoice text='Sort by unpacked' />
        </select>
    )
}

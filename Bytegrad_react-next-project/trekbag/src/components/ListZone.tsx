import FilterContainer from "./FilterContainer";
import ItemsListContainer from "./ItemsListContainer";

export default function ListZone() {
    return (
        <section className="list-zone">
            <FilterContainer />
            <ItemsListContainer />
        </section>
    )
}

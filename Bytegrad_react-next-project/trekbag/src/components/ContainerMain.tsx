import CommandsZone from "./CommandsZone";
import ListZone from "./ListZone";

export default function ContainerMain() {
    return (
        <section className="container__main">
            <ListZone />
            <CommandsZone />
        </section>
  )
}

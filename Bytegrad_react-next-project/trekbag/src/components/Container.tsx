import ContainerHeader from "./ContainerHeader";
import ContainerMain from "./ContainerMain";

export default function Container() {
    return (
        <main className="container">
            <ContainerHeader />
            <ContainerMain />
        </main>
    )
}

export default function Stats() {
  return (
    <section className="stats">
        <Stat number={0} type='Words' />
        <Stat number={0} type='Characters' />
        <Stat number={280} type='Instagram' />
        <Stat number={2200} type='Facebook' />
    </section>
  )
};

type StatProps = {
    number: number,
    type: string
};

function Stat({ number, type }: StatProps) {
    return(
        <section className="stat">
            <span className="stat__number">{number}</span>
            <h2 className="second-heading">{type}</h2>
        </section>       
    )
}

type StatsData = {
  numberOfChars: number; 
  numberOfWords: number;
  facebookCharsLeft: number;  
  instagramCharsLeft: number;
};

type StatsProps = {
    stats: StatsData
};

export default function Stats({ stats }: StatsProps) {
    const {   
        numberOfChars,
        numberOfWords,
        facebookCharsLeft, 
        instagramCharsLeft } = stats

  return (
    <section className="stats">
        <Stat number={numberOfWords} type='Words' />
        <Stat number={numberOfChars} type='Characters' />
        <Stat number={instagramCharsLeft} type='Instagram' />
        <Stat number={facebookCharsLeft} type='Facebook' />
    </section>
  )
};

type StatProps = {
    number: number,
    type: string,

};

function Stat({ number, type }: StatProps) {
    const limitReachedStyle = number < 0 ? 'stat__number--limit' : '';

    return(
        <section className="stat">
            <span className={`stat__number ${limitReachedStyle}`}>{number}</span>
            <h2 className="second-heading">{type}</h2>
        </section>       
    )
}

type CountProps = {
    number: number,
};

export default function Count({ number }: CountProps) {
    return(
        <div className='count'>{number}</div>
    )
}
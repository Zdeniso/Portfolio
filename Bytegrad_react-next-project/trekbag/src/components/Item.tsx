type ItemProps = {
    text: string
};

export default function Item({ text }: ItemProps) {
    return (
        <li className="item">
            <div className="tick-icon"></div>
            <p className="item-text">{text}</p>
            <i className="fa-solid fa-xmark cross-symbol"></i>
        </li>
     )
}

type JobItemProps = {
    active?: string,
    bookmark?: string
};

export default function JobItem({active, bookmark}: JobItemProps) {
    return (
        <div className={`job-item ${active}`}>
            <div className="job-item__acronym">9T</div>
            <div className="job-item__text">
                <h3>Front End React Engineer</h3>
                <p>9th Tech</p>
            </div>
            <div className={`bookmark-syb-and-days ${bookmark}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M192 64C156.7 64 128 92.7 128 128L128 544C128 555.5 134.2 566.2 144.2 571.8C154.2 577.4 166.5 577.3 176.4 571.4L320 485.3L463.5 571.4C473.4 577.3 485.7 577.5 495.7 571.8C505.7 566.1 512 555.5 512 544L512 128C512 92.7 483.3 64 448 64L192 64z"/></svg>
                <p className="days">4d</p>
            </div>
        </div>
    )
}

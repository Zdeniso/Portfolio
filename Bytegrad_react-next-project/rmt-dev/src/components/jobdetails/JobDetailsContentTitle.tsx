import type { TJobItem } from "../../lib/types";

type JobDetailsContentTitleProps = {
    jobHighligthed: TJobItem,
};

export default function JobDetailsContentTitle({ jobHighligthed }: JobDetailsContentTitleProps) {
    const badgeLetters = jobHighligthed.badgeLetters;
    const title = jobHighligthed.title;
    const company = jobHighligthed.company;

    return (
        <div className="content__title">
            <div>{badgeLetters}</div>
            <div>
                <h3>{title}</h3>
                <p>{company}</p>
            </div>
        </div>
    )
}

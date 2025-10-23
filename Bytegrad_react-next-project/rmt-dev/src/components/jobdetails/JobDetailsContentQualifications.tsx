import type { TJobItem } from "../../lib/types";

type JobDetailsContentQualificationsProps = {
    jobHighligthed: TJobItem,
};

export default function JobDetailsContentQualifications({ jobHighligthed }: JobDetailsContentQualificationsProps ) {
    const qualifications = jobHighligthed.qualifications
    return (
        <div className="content__qualifications">
            <div>
                <h3>Qualifications</h3>
                <p>Other qualifications may apply</p>
            </div>
            <div>
                {qualifications.map((qualification => <button >{qualification}</button>))}
            </div>
        </div>
    )
}

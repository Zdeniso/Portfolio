import type { TJobItem } from "../../lib/types"

type JobDetailsHeaderProps = {
  jobHighligthed: TJobItem
};

export default function JobDetailsHeader({ jobHighligthed }: JobDetailsHeaderProps) {
  const { coverImgURL } = jobHighligthed
  return (
    <header 
      className="job-details__header" 
      style={{
        backgroundImage: `url(${coverImgURL})`
      }}>
    </header>
  )
}

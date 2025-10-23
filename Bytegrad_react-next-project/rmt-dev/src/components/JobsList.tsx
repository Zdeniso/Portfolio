import JobItem from "./JobItem";

export default function JobsList() {
  return (
    <div className="jobs-list">
        <JobItem />
        <JobItem />
        <JobItem active="job-item--active" bookmark="bookmark-syb-and-days--active"/>
        <JobItem />
        <JobItem bookmark="bookmark-syb-and-days--active"/>
        <JobItem />
        <JobItem />
    </div>
  )
}

export default function JobDetailsContainer() {
    return (
        <div className="job-details-container">
            {/* <JobDetailsHeader />
            <JobDetailsContent />
            <JobDetailsContentTitle />
            <JobDetailsContentDaysAndDescription />
            <JobDetailsContentCaracteristics />
            <JobDetailsContentQualifications />
            <JobDetailsContentReviews />
            <JobDetailsFooter /> */}

            <header className="job-details__header"></header>
            <div className="job-details__content">
                <div className="content__title">
                    <div>AT</div>
                    <div>
                        <h3>Junior Software Developer</h3>
                        <p>Aspen Tech</p>
                    </div>
                </div>

                <div className="content__days-and-description">
                    <div>4d</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M192 64C156.7 64 128 92.7 128 128L128 544C128 555.5 134.2 566.2 144.2 571.8C154.2 577.4 166.5 577.3 176.4 571.4L320 485.3L463.5 571.4C473.4 577.3 485.7 577.5 495.7 571.8C505.7 566.1 512 555.5 512 544L512 128C512 92.7 483.3 64 448 64L192 64z"/></svg>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quibusdam ipsum nulla pariatur magnam unde dignissimos aliquam maxime ullam? Error quidem magnam obcaecati repellat?</p>
                </div>

                <div className="content__caracteristics">
                    <div className="content__caracteristic">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                        </div>
                        <p>Full-Time</p>
                    </div>
                    <div className="content__caracteristic">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm192 24c0 4.4-3.6 8.1-8 7.5-29-3.6-51.9-26.6-55.5-55.5-.5-4.4 3.1-8 7.5-8l48 0c4.4 0 8 3.6 8 8l0 48zM64 328c0-4.4 3.6-8.1 8-7.5 29 3.6 51.9 26.6 55.5 55.5 .5 4.4-3.1 8-7.5 8l-48 0c-4.4 0-8-3.6-8-8l0-48zm8-136.5c-4.4 .5-8-3.1-8-7.5l0-48c0-4.4 3.6-8 8-8l48 0c4.4 0 8.1 3.6 7.5 8-3.6 29-26.6 51.9-55.5 55.5zm368 129c4.4-.5 8 3.1 8 7.5l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8.1-3.6-7.5-8 3.6-29 26.6-51.9 55.5-55.5z"/></svg>
                        </div>
                        <p>$90,000+</p>
                    </div >
                    <div className="content__caracteristic">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/></svg>
                        </div>
                        <p>Global</p>
                    </div>
                </div>

                <div className="content__qualifications">
                    <div>
                        <h3>Qualifications</h3>
                        <p>Other qualifications may apply</p>
                    </div>
                    <div>
                        <button>React</button>
                        <button>React Native</button>
                        <button>Redux</button>
                        <button>Node</button>
                        <button>GraphQL</button>
                        <button>GitHub</button>
                        <button>VS Code</button>
                    </div>
                </div>
                <div className="content__reviews">
                    <div>
                        <h3>Company Reviews</h3>
                        <p>Recent things people are saying</p>
                    </div>
                    <div>
                        <p>Good support for employees</p>
                        <p>Decent pay and career progression</p>
                        <p>Wonderful place to work</p>
                        <p>Interesting sites to work on</p>
                    </div>                    
                </div>
                <div className="content__footer">
                    <small>if possible, please reference that you found the job on <b>rmtDev</b>, we would really appreciate it!</small>
                </div>
            </div>
            <button className="apply">Apply</button>
        </div>
     )
}

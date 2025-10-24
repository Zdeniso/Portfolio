import type { TJobItem } from "./types";

export const fetchJobItemsData = async (): Promise<TJobItem[] | null> => {
    try {
        const response = await fetch('https://bytegrad.com/course-assets/projects/rmtdev/api/data');
        
        if (!response.ok) {
            throw new Error()
        }

        const data = await response.json();
        const jobItemsFetched: TJobItem[] = data.jobItems;
        return jobItemsFetched;

    } catch (error) {
        console.error(`Something went wrong during the fetch : ${error}`);
        return null
    }
}
import {
    sortingEl,
    sortingBtnRecentEl,
    sortingBtnRelevantEl,
    state
} from '../common.js';
import renderJobList from '../components/JobList.js';
import renderPaginationButtons from './Pagination.js';

const clickHandler = event => {
    const clickedButtonEl = event.target.closest('.sorting__button')

    // stop function in no button was clicked
    if (!clickedButtonEl) return;

    // update the state (reset to page 1)
    state.currentPage = 1;

    // check what button was clicked
    const recent = clickedButtonEl.className.includes('--recent')

    // toggle active button & sort job items
    if (recent) {
        // toggle active button
        sortingBtnRecentEl.classList.add('sorting__button--active');
        sortingBtnRelevantEl.classList.remove('sorting__button--active');

        // sort job item by date
        state.searchJobItems.sort((a, b) => {
            return a.daysAgo - b.daysAgo
        })
    } else {
        // toggle active button
        sortingBtnRecentEl.classList.remove('sorting__button--active');
        sortingBtnRelevantEl.classList.add('sorting__button--active');  
        
        // sort job item by relevance score
        state.searchJobItems.sort((a, b) => {
            return b.relevanceScore - a.relevanceScore   
        })     
    };

    // reset pagination buttons
    renderPaginationButtons();

    // render job items in list
    renderJobList();
};
sortingEl.addEventListener('click', clickHandler)
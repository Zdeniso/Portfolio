import {
    RESULTS_PER_PAGE,
    state,
    paginationEl,
    paginationNumberBackEl,  
    paginationNumberNextEl,
    paginationBtnBackEl,
    paginationBtnNextEl,
} from '../common.js';
import renderJobList from './JobList.js';

const renderPaginationButtons = () => {
    // display back button if we are on Page 2 or further
    if (state.currentPage >= 2) {
        paginationBtnBackEl.classList.remove('pagination__button--hidden')
    } else {
        paginationBtnBackEl.classList.add('pagination__button--hidden')
    };

    // display next button if there are more job items on next page
    if ((state.searchJobItems.length - state.currentPage * RESULTS_PER_PAGE) <= 0) {
        paginationBtnNextEl.classList.add('pagination__button--hidden')
    } else {
        paginationBtnNextEl.classList.remove('pagination__button--hidden')
    };    

    // update page number
    paginationNumberNextEl.textContent = state.currentPage + 1;
    paginationNumberBackEl.textContent = state.currentPage - 1;

    // unfocus ('blur') buttons
    paginationBtnNextEl.blur(); 
    paginationBtnBackEl.blur(); 
}

const clickHandler = event => {
    // get clicked button element
    const clickedButtonEl = event.target.closest('.pagination__button');

    if (!clickedButtonEl) return;

    // What button has been clicked? Previous or next ?
    const nextPage = clickedButtonEl.className.includes('--next');

    // update state of which page we are on
    nextPage ? state.currentPage++ : state.currentPage--

    // render pagination Button
    renderPaginationButtons();

    // render job items for that page
    renderJobList()
};
paginationEl.addEventListener('click', clickHandler);

export default renderPaginationButtons
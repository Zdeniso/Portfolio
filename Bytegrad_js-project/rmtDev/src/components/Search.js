import {
    searchInputEl,
    searchFormEl, 
    jobListSearchEl, 
    numberEl,
    sortingBtnRecentEl,
    sortingBtnRelevantEl,
    BASE_API_URL, 
    getData, 
    state
} from '../common.js';
import renderError from './Error.js';
import renderSpinner from './Spinner.js';
import renderJobList from './JobList.js';
import renderPaginationButtons from './Pagination.js';

const submitHandler = async event => {
    event.preventDefault();
    const searchText = searchInputEl.value;

    // pre-validation (regular expression example - regex)
    const forbiddenPattern = /python/
    const patternMatch = forbiddenPattern.test(searchText)

    if (patternMatch) {
        renderError('Your search may not contain Python');
        return
    };

    // blur input
    searchInputEl.blur();

    // remove previous job items
    jobListSearchEl.innerHTML = '';

    // reset sorting buttons
    sortingBtnRecentEl.classList.remove('sorting__button--active');
    sortingBtnRelevantEl.classList.add('sorting__button--active');  

    // render spinner
    renderSpinner('search')

    // fetch search results
    try {
        const data = await getData(`${BASE_API_URL}/jobs?search=${searchText}`);
        const { jobItems } = data;

        // update states
        state.searchJobItems = jobItems
        state.currentPage = 1;

        // remove spinner
        renderSpinner('search');
    
        // render number of results
        numberEl.textContent = jobItems.length;

        // render pagination buttons
        renderPaginationButtons();
    
        // render job items in search job list
        renderJobList();
    } catch (error) {
        renderSpinner('search');
        renderError(error.message)
    }
};

searchFormEl.addEventListener('submit', submitHandler)
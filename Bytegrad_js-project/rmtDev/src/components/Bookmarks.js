import {
    state,
    bookmarksBtnEl,
    jobDetailsEl,
    jobListSearchEl,
    jobListBookmarksEl,
} from '../common.js';
import renderJobList from './JobList.js';

const clickHandler = event => {
    // don't continue if click outside bnookmark
    if (!event.target.className.includes('bookmark')) return;

    // update state
    if (state.bookmarkJobItems.some(bookmarkJobItem => bookmarkJobItem.id === state.activeJobItem.id)) {
        state.bookmarkJobItems = state.bookmarkJobItems.filter(bookmarkJobItem => bookmarkJobItem.id !== state.activeJobItem.id);
    } else {
        state.bookmarkJobItems.push(state.activeJobItem);
    };

    // persist data with LocalStorage
    localStorage.setItem('bookmarkJobItems', JSON.stringify(state.bookmarkJobItems))

    // update bookmark icon
    document.querySelector('.job-info__bookmark-icon').classList.toggle('job-info__bookmark-icon--bookmarked');
    
    // render search job list for icon
    renderJobList()
};

const mouseEnterHandler = () => {
    // make bookmars button look active
    bookmarksBtnEl.classList.add('bookmarks-btn--active');

    // make job list visible
    jobListBookmarksEl.classList.add('job-list--visible');

    // render bookmark joblist
    renderJobList('bookmarks')
};

const mouseLeaveHandler = () => {
    // make bookmars button look active
    bookmarksBtnEl.classList.remove('bookmarks-btn--active');

    // make job list invisible
    jobListBookmarksEl.classList.remove('job-list--visible');
};

jobDetailsEl.addEventListener('click', clickHandler);
bookmarksBtnEl.addEventListener('mouseenter', mouseEnterHandler);
jobListBookmarksEl.addEventListener('mouseleave', mouseLeaveHandler)
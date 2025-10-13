import { BASE_API_URL, MAX_CHARS, textAreaEl, counterEl, formEl, submitBtnEl, 
    feedbackListEl, spinnerEl, hashtagListEl } from './globals.js'
import { renderFeedbackItem } from './functions.js'
 
// -- COUNTER COMPONENT --
(() => {
    const inputHandler = () => {
        const charsTyped = textAreaEl.value.length;
        const charsLeft = MAX_CHARS - charsTyped;
        counterEl.textContent = charsLeft
    };

    textAreaEl.addEventListener('input', inputHandler)
})();

// -- FORM COMPONENT --
(() => {
    const showVisualIndicator = textCheck => {
        const className = textCheck === 'valid' ? 'form--valid' : 'form--invalid';
        formEl.classList.add(className);
        setTimeout(() => {
            formEl.classList.remove(className)
        }, 2000);
    };
    
    const submitHandler = event => {
        event.preventDefault();
        const text = textAreaEl.value;

        // validate text (5 chars minimum and # present)
        if (text.includes('#') && text.length >= 5) {
            showVisualIndicator('valid')
        } else {
            showVisualIndicator('invalid')
        // Keep the focus to the textarea box so you can continue typing
        textAreaEl.focus();
        return
        };

        // we have text, now extract infos we need from it
        const hashtag = text.split(' ').find(word => word.includes('#'));
        const company = hashtag.substring(1);
        const badgeLetter = company.substring(0, 1).toUpperCase();
        const upvoteCount = 0;
        const daysAgo = 0;

        // Render feedback item HTML
        const feedbackItem = {
            upvoteCount: upvoteCount,
            company: company,
            badgeLetter: badgeLetter,
            text: text,
            daysAgo: daysAgo
        };
        renderFeedbackItem(feedbackItem);

        // send new item to server
        fetch(`${BASE_API_URL}/feedbacks`, {
            method: 'POST',
            body: JSON.stringify(feedbackItem),
            headers: {
                // Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (!response.ok) {
                console.log('Something went wrong');
                return
            };
            console.log('Successfully submitted')
        }).catch(error => console.log(error))

        // Clear the textarea
        textAreaEl.value = '';

        // blur the submit button
        submitBtnEl.blur();

        // Reset counter
        counterEl.textContent = MAX_CHARS;
    };

    formEl.addEventListener('submit', submitHandler);
})();

// -- FEEDBACK LIST COMPONENT --
(() => {
    const clickHandler = event => {
        // get clicked HTML element
        const clickedEl = event.target;

        // determine if user intended to upvote or expand
        const upvoteIntention = clickedEl.className.includes('upvote');

        // run the appropriate logic
        if (upvoteIntention) {
            // disable the upvote button
            const upvoteBtnEl = clickedEl.closest('.upvote');
            upvoteBtnEl.disabled = true;

            // select the upvote count element within the upvote button
            const upvoteCountEl = upvoteBtnEl.querySelector('.upvote__count');

            // get currently displayed upvote count
            upvoteCountEl.textContent = String(+upvoteCountEl.textContent + 1);

        } else {
            // expand by adding a css class
            clickedEl.closest('.feedback').classList.add('feedback--expand');
        }
    }

    feedbackListEl.addEventListener('click', clickHandler)


    fetch(`${BASE_API_URL}/feedbacks`)
        .then(response => response.json())
        .then(data => {
            spinnerEl.remove();
            data.feedbacks.forEach(feedbackItem => renderFeedbackItem(feedbackItem))
        })
        .catch(error => {
            feedbackListEl.textContent = `Failed to fetch feedback items. Error message : ${error}`
        })
})();

// -- HASHTAG LIST COMPONENT --
(() => {
    const clickHandler = event => {
        const clickedEl = event.target;

        // stop function if clicked outside button
        if (clickedEl.className === 'hashtags') return;

        // if clicked on button
        const companyNameFromHashtag = clickedEl.textContent.substring(1).toLowerCase().trim();

        // iterate over each feedback item in the list
        feedbackListEl.childNodes.forEach(childNode => {
            // stop iteration if it's a text node
            if (childNode.nodeType === 3) return;

            //extract company name
            const companyNameFromFeedbackItem = childNode.querySelector('.feedback__company').textContent.toLowerCase().trim();

            // remove item from another company
            if (companyNameFromHashtag !== companyNameFromFeedbackItem) {
                childNode.remove()
            }
        })
    };
    hashtagListEl.addEventListener('click', clickHandler)
})()
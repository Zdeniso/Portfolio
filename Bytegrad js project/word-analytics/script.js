// SELECTORS
const textAreaEl = document.querySelector("textarea");
const words = document.querySelector(".stat__number--words")
const characters = document.querySelector(".stat__number--characters")
const twitter = document.querySelector(".stat__number--twitter")
const facebook = document.querySelector(".stat__number--facebook")

const initialTwitterWords = Number(twitter.textContent);
const initialFacebookChar = Number(facebook.textContent)

// EVENT HANDLER
const updateCharacters = () => characters.textContent = textAreaEl.value.length;
const updateWords = () => {
    if (textAreaEl.value.trim().length === 0) {
        words.textContent = 0;
        return
    };
    const wordCount = textAreaEl.value.trim().split(/\s+/).length;
    words.textContent = wordCount;
};

const updateTwitter = () => twitter.textContent = String(Number(initialTwitterWords) - Number(words.textContent));
const updateFacebook = () => facebook.textContent = String(Number(initialFacebookChar) - Number(textAreaEl.value.length))

// EVENT LISTENER
textAreaEl.addEventListener("input", () => {
    updateCharacters();
    updateWords();
    updateTwitter();
    updateFacebook()
})  
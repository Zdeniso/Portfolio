import { useState, type ChangeEvent } from "react";
import { MAX_CHARACTERS } from "../../utils/constants";

type FeedbackFormProps = {
    onAddToList: (text: string) => void
};

export default function FeedbackForm({ onAddToList }: FeedbackFormProps) {
    const [text, setText] = useState("");
    const [showValidIndicator, setShowValidIndicator] = useState(false);
    const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

    // DERIVED VARIABLE
    const charsLeft = MAX_CHARACTERS - text.length;

    // EVENT HANDLER
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length > MAX_CHARACTERS) return;
        setText(e.target.value)
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // basic validation
        if (text.includes('#') && text.length >= 5) {
            setShowValidIndicator(true);
            setTimeout(() => setShowValidIndicator(false), 2000)
        } else {
            setShowInvalidIndicator(true);
            setTimeout(() => setShowInvalidIndicator(false), 2000)
            return
        };
        onAddToList(text);
        setText('')
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            action="#" 
            className={`form 
                ${showValidIndicator ? 'form--valid' : ''} 
                ${showInvalidIndicator ? 'form--invalid' : ''}`}>
            <textarea
                value={text}
                onChange={handleChange}
                id="feedback-textarea" 
                placeholder="blabla" 
                spellCheck={false}
            />
            <label htmlFor="feedback-textarea">
                Enter your feedback here, remember to #hashtag the company
            </label>
            <div>
                <p className="u-italic">{charsLeft}</p>
                <button type="submit">
                    <span>Submit</span>
                </button>
            </div>
        </form>
    )
}

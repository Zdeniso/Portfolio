import { useState, type ChangeEvent } from "react"
import Warning from "./Warning";

type TextareaProps = {
    text: string,
    onTextChange: (newText: string) => void
};

export default function Textarea({ text, onTextChange }: TextareaProps) {
    // STATE
    const [warningText, setWarningText] = useState('');

    // EVENT HANDLER
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.target.value;

        if (newText.includes('<script>')) {
            setWarningText('No script tag allowed !');
            newText = newText.replace('<script>', '');
        } else if (newText.includes('@')) {
            setWarningText('No @ symbol allowed !');
            newText = newText.replace('@', '');
        } else if (newText.length > 5000) {
            setWarningText('You\'ve reached the 5000 characters limit');
            newText = newText.substring(0, 5000)
        } else {
            setWarningText('')
        };
        onTextChange(newText);
    };

    return (
        <div className="textarea">
            <textarea              
                placeholder="Enter your text"
                spellCheck="false"
                value={text}
                onChange={handleChange}
            />
            <Warning text={warningText}/>
        </div>
    )
}
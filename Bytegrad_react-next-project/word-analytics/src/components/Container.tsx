import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { FACEBOOK_MAX_CHARS, INSTAGRAM_MAX_CHARS } from "../lib/constants";

export default function Container() {
    // STATE
    const [text, setText] = useState('');

    // DERIVED VARIABLE FROM STATE
    const stats = {
        numberOfChars: text.length,
        numberOfWords: !text.length ? 0 : text.trim().split(' ').length,
        facebookCharsLeft: FACEBOOK_MAX_CHARS - text.length,
        instagramCharsLeft: INSTAGRAM_MAX_CHARS - text.length
    };

    // EVENT HANDLER
    const onTextChange = (newText: string) => setText(newText);
        
    return (
        <main className="container">
            <Textarea text={text} onTextChange={onTextChange} />
            <Stats stats={stats} />
        </main>
    )
}

import { useState } from 'react';
import Warning from './Warning';

export default function Textarea({ text, setText }) {
    const [warningText, setWarningText] = useState('');

    const handleChange = (e) => {
        let newText = e.target.value;
        setWarningText("");
        if (newText.includes("<script>")) {
            newText = newText.replace("<script>", "");
            setWarningText("No script tags allowed");
        } else if (newText.includes("@")) {
            newText = newText.replace("@", "");
            setWarningText("No @ allowed");
        }
        
        setText(newText);
    }

    return (
        <div className="textarea">
            <textarea 
                placeholder="Enter your text here..."
                spellCheck="false"
                value={text}
                onChange={handleChange}
            />
            {warningText && <Warning text={warningText} />}
        </div>
    );
}

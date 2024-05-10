import { useState } from "react";
import Warning from "./Warning";

const Textarea = ({text, setText}) => {
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (event) => {
    setShowWarning(false);
    let newText = event.target.value;

    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setShowWarning(true);
    }

    setText(newText);
  }

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        spellCheck="false"
        placeholder="Enter your text"
      />
      {showWarning && <Warning />}
    </div>
  )
}

export default Textarea;
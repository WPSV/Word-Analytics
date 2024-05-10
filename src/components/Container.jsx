import { useState } from "react";
import Textarea from "./Textarea";
import Stats from "./Stats";
import { INSTAGRAM_MAX_CHARACTERS, FACEBOOK_MAX_CHARACTERS } from "../lib/constants";

const Container = () => {
  const [text, setText] = useState("");
  const stats = {
    numberWords: text.split(/\s/).filter((word) => word !== "").length,
    numberCharacters: text.length,
    numberInstagram: INSTAGRAM_MAX_CHARACTERS - text.length,
    numberFacebook: FACEBOOK_MAX_CHARACTERS - text.length,
  }

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  )
}

export default Container;
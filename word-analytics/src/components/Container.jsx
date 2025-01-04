import { useState } from "react";
import Textarea from "./Textarea";
import Stats from "./Stats";
import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const calculateStats = (text) => {
    const numberOfCharacters = text.length;
    const numberOfWords = text.trim().split(/\s+/).filter(Boolean).length;
    const instagramCharacterLeft =
      INSTAGRAM_MAX_CHARACTERS - numberOfCharacters;
    const facebookCharacterLeft = FACEBOOK_MAX_CHARACTERS - numberOfCharacters;
    return {
      numberOfCharacters,
      numberOfWords,
      instagramCharacterLeft,
      facebookCharacterLeft,
    };
  };

  const stats = calculateStats(text);

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

import { useEffect } from "react";
import { useState } from "react";
import { center } from "./Spinner.module.css";

export const randomEmoji = (emojis) => {
  const randomIndex = Math.floor(
    Math.random() * (emojis.length - 1 - 0 + 1) + 0
  );
  return emojis[randomIndex];
};

const Spinner = ({ align, size, timeBetweenEmoji = 750 }) => {
  //eslint-disable-next-line
  const foodsEmojis = [
    "🍕",
    "🍔",
    "🍟",
    "🌭",
    "🍿",
    "🧂",
    "🥓",
    "🥚",
    "🍳",
    "🧇",
    "🥞",
    "🧈",
    "🍞",
    "🥐",
    "🥨",
    "🥯",
    "🥖",
    "🫓",
    "🧀",
    "🥗",
    "🥙",
    "🥪",
    "🌮",
    "🌯",
    "🫔",
    "🥫",
    "🍖",
    "🍗",
    "🥩",
    "🍠",
    "🥟",
    "🥠",
    "🥡",
    "🍱",
    "🍘",
    "🍙",
    "🍚",
    "🍛",
    "🍜",
    "🦪",
    "🍣",
    "🍤",
    "🍥",
    "🥮",
    "🍢",
    "🧆",
    "🥘",
    "🍲",
    "🫕",
    "🍝",
    "🥣",
    "🥧",
    "🍦",
    "🍧",
    "🍨",
    "🍩",
    "🍪",
    "🎂",
    "🍰",
    "🧁",
    "🍫",
    "🍬",
    "🍭",
    "🍡",
    "🍮",
    "🍯",
    "🍼",
    "🥛",
    "🧃",
    "☕",
    "🫖",
    "🍵",
    "🧉",
    "🍶",
    "🍾",
    "🍷",
    "🍸",
    "🍹",
    "🍺",
    "🍻",
    "🥃",
    "🥤",
    "🧋",
    "🥝",
    "🥥",
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🥭",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🫐",
    "🍅",
    "🫒",
    "🍆",
    "🌽",
    "🌶️",
    "🫑",
    "🍄",
    "🥑",
    "🥒",
    "🥬",
    "🥦",
    "🥔",
    "🧄",
    "🧅",
    "🥕",
    "🌰",
    "🥜",
    "🫘",
  ];

  const [emoji, setEmoji] = useState(randomEmoji(foodsEmojis));

  useEffect(() => {
    const myInterval = setInterval(
      () => setEmoji(randomEmoji(foodsEmojis)),
      timeBetweenEmoji
    );

    return () => clearInterval(myInterval);
  }, [foodsEmojis, timeBetweenEmoji]);

  return (
    <span
      className={align === "center" ? center : undefined}
      style={{ fontSize: size }}
    >
      {emoji}
    </span>
  );
};

export default Spinner;

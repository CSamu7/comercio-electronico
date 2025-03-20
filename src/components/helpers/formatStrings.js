const camelize = (word) => {
  return word
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return upperFirstLetter(word);
      }
    })
    .join("");
};

const upperFirstLetter = (word) => {
  const letterUpper = String(word.charAt(0).toUpperCase());

  return String(letterUpper + word.slice(1).toLowerCase());
};

const capitalize = (word) => {
  return word
    .split(" ")
    .map((word) => {
      return upperFirstLetter(word);
    })
    .join(" ");
};

export { camelize, capitalize };

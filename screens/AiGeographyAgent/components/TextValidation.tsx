export const countWords = (text: string) =>
  text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

// Allow only English
//  export const isValidQuestion = (text: string) =>
//     /^[a-zA-Z .,?;]+$/.test(text.trim());

// Allow any unicode letters (Greek, Spanish, etc)
export const isValidQuestion = (text: string) =>
  //  /^[\p{L}\s.,?;]+$/u.test(text.trim());
  text === "" || /^[\p{L}\s.,?;]+$/u.test(text.trim());

export const MAX_WORD_LENGTH = 15;

export const hasLongWords = (
  text: string,
  maxLength: number = MAX_WORD_LENGTH
): boolean => {
  const words = text.trim().split(/\s+/);
  return words.some((word) => word.length > maxLength);
};

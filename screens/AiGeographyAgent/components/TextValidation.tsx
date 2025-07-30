 export const countWords = (text: string) =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

 export const isValidQuestion = (text: string) =>
    /^[a-zA-Z .,?;]+$/.test(text.trim());
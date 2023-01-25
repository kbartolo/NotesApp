export const limitText = (text: string, limit: number) =>
  text.length >= limit ? text.slice(0, limit) + "..." : text;

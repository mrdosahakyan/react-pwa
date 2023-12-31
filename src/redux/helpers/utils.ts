export const addHttpPrefixToUrl = (url: string) => {
  if (url.startsWith('http')) return url;
  return `https://${url}`;
};

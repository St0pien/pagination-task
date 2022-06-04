export const appendURL = (
  url: string,
  name: string,
  value: string,
  string: boolean = true
) => {
  const urlObj = new URL(url);
  urlObj.searchParams.append(name, value);
  return string ? urlObj.toString() : urlObj;
};

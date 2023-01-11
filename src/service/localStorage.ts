export function addCache(url: string, response: object) {
  localStorage.setItem(url, JSON.stringify(response));
}

export function hasCache(url: string): boolean {
  return localStorage.getItem(url) !== null;
}

export function getCache(url: string) {
  const cache = localStorage.getItem(url);
  if (cache !== null) {
    return JSON.parse(cache);
  }
  return null;
}

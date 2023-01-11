export default function useFetch(url: string) {
  return fetch(`http://localhost:4000/${url}`).then((response) =>
    response.json()
  );
}

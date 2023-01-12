import axios from "axios";

async function getSearchResults(input: string) {
  console.info("calling api");
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_ADDRESS}?q=${input}`
    );
    return { state: "success", data: response.data };
  } catch (e) {
    if (e instanceof Error) {
      alert(`통신에 실패했습니다. 다시 시도해주세요: ${e.message}`);
    }
    return { state: "fail", data: null };
  }
}

export default getSearchResults;

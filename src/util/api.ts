import axios from 'axios';

async function getSearchResults(input: string) {
  console.info('calling api');
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_ADDRESS}?q=${input}`
    );
    return response.data;
  } catch (e) {
    if (e instanceof Error)
      alert(`통신에 실패했습니다. 다시 시도해주세요: ${e.message}`);
    return null;
  }
}

export default getSearchResults;

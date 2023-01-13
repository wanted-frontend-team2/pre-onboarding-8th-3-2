import axios from 'axios';

const cache = new Map();

async function getSearchResults(input: string, limit?: number) {
  if (cache.has(input)) {
    console.info('return cache');

    return cache.get(input);
  }
  try {
    console.info('calling api');

    const response = await axios.get(`${process.env.REACT_APP_API_ADDRESS}`, {
      params: { q: input, _limit: limit },
    });

    const successResult = { state: 'success', data: response.data };

    cache.set(input, successResult);

    return successResult;
  } catch (e) {
    if (e instanceof Error) {
      alert(`통신에 실패했습니다. 다시 시도해주세요: ${e.message}`);
    }

    const failResult = { state: 'fail', data: [] };

    return failResult;
  }
}

export default getSearchResults;

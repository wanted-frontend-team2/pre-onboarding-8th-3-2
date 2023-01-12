import { SearchResultType } from '../types';
import SearchItem from './SearchItem';

interface Props {
  searchResults: SearchResultType[];
  inputValue: string;
}

function Recommendations({ searchResults, inputValue }: Props) {
  return (
    <div>
      {searchResults.map((sick) => (
        <SearchItem sick={sick.sickNm} />
      ))}
    </div>
  );
}

export default Recommendations;

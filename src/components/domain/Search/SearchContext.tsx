/* eslint-disable react-refresh/only-export-components */
import {
  Dispatch,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react';
import { Station } from '../../../api/stations';

type SearchState = {
  keywords: string;
  searchHistory: Station[];
  stationId: string;
  matchingData: Station[];
  selectedStationInfo: Station | undefined;
  filteredStations: Station[];
  selectedIdx: number;
  autofillRef: RefObject<HTMLUListElement>;
  inputRef: RefObject<HTMLInputElement>;
};

type SearchAction = {
  setSelectedIdx: Dispatch<SetStateAction<number>>;
  setSelectedStationInfo: Dispatch<SetStateAction<Station | undefined>>;
  setKeywords: Dispatch<SetStateAction<string>>;
  setFilteredStations: Dispatch<SetStateAction<Station[] | []>>;
  setMatchingData: Dispatch<SetStateAction<Station[] | []>>;
  setSearchHistory: Dispatch<SetStateAction<Station[] | []>>;
};

type SearchContext = SearchState & SearchAction;

const SearchContext = createContext<SearchContext | null>(null);

export const SearchContextProvider = ({ children }: PropsWithChildren) => {
  const [keywords, setKeywords] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<Station[]>([]);
  const [matchingData, setMatchingData] = useState<Station[]>([]);
  const [selectedStationInfo, setSelectedStationInfo] = useState<Station | undefined>();
  const [filteredStations, setFilteredStations] = useState<Station[] | []>([]);
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);
  const autofillRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const value = {
    keywords,
    searchHistory,
    stationId: selectedStationInfo ? selectedStationInfo.stationId : '70',
    matchingData,
    selectedStationInfo,
    selectedIdx,
    filteredStations,
    autofillRef,
    inputRef,
    setSelectedIdx,
    setSelectedStationInfo,
    setKeywords,
    setFilteredStations,
    setMatchingData,
    setSearchHistory,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('no context found!');
  }
  return context;
};

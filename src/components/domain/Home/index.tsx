import { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomeSearchBar from './HomeSearchBar';
import HomePageTitle from './HomePageTitle';
import HomeSearchHistoryList from './HomeSearchHistoryList';
import useMic from '../../../hooks/useMic';
import SafetyAlert from './SafteyAlert';
import VoiceSearchField from './VoiceSearchField';
import useLocalStorage from '../../../hooks/useLocalStorage';

const Home = () => {
  const { startListening, endListening } = useMic();
  const [isListening, setIsListening] = useState(false);
  const { displaySearchHistoryInOrder } = useLocalStorage();

  const handleClick = () => {
    if (isListening) {
      setIsListening((prev) => !prev);
      endListening();
    } else {
      setIsListening((prev) => !prev);
      startListening();
    }
  };

  useEffect(() => {
    displaySearchHistoryInOrder();
  }, [displaySearchHistoryInOrder]);

  return (
    <HomeWrapper id='home-container'>
      <SafetyAlert />
      <HomePageTitle />
      <HomeSearchBar handleClick={handleClick} />
      <ChildrenWrapper>
        {isListening ? <VoiceSearchField /> : <HomeSearchHistoryList />}
      </ChildrenWrapper>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 24px;
`;

const ChildrenWrapper = styled.div`
  padding-top: 74px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

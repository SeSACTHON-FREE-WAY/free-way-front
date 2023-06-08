import styled, { css } from 'styled-components';
import { ReactComponent as LineCircle } from '../../../assets/icons/line-2.svg';
import useAutofill from '../../../hooks/useAutofill';

type SearchItemProps = {
  id?: string;
  name: string;
  status: string;
  line?: string;
  isFocus?: boolean;
};

type StyledElevatorStatusCircleProps = {
  status: string;
};

const SearchItem = ({ name, status, id, isFocus }: SearchItemProps) => {
  const { handleAutofillClick } = useAutofill();

  return (
    <SearchItemWrapper id={id} onClick={handleAutofillClick} isFocus={isFocus}>
      <Text>{name}</Text>
      <ElevatorStatusCircle status={status}>{status}</ElevatorStatusCircle>
      <StyledLineSVG />
    </SearchItemWrapper>
  );
};

export default SearchItem;

const SearchItemWrapper = styled.li<{ isFocus?: boolean }>`
  position: relative;

  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(217, 217, 217, 0.5);
  text-decoration: none;

  cursor: pointer;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  background-color: ${(props) => (props.isFocus ? '#edf5f5' : '#fff')};
`;

const ElevatorStatusCircle = styled.div<StyledElevatorStatusCircleProps>`
  width: 60px;
  height: 21px;
  border-radius: 30px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) => {
    switch (props.status) {
      case '사용 가능':
        return css`
          color: #4aa570;
          background-color: rgba(96, 208, 132, 0.3);
        `;
      case '일부 가능':
        return css`
          color: #eda54b;
          background-color: rgba(237, 165, 75, 0.3);
        `;
      case '사용 불가능':
        return css`
          color: #e56e73;
          background-color: rgba(229, 110, 115, 0.3);
        `;
    }
  }}
`;

const StyledLineSVG = styled(LineCircle)`
  position: absolute;
  right: 0;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #495074;
  margin-right: 10px;
`;

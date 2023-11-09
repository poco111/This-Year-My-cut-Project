import styled from 'styled-components';

export const TextInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Label = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
`;

export const Input = styled.input`
  width: 335px;
  height: 56px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #ced3d6;
`;

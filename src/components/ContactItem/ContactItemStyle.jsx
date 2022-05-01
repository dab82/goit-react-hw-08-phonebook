import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Name = styled.p`
  width: 50%;
  font-size: medium;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PhoneNumber = styled.p`
  font-size: medium;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

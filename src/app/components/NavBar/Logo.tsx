import * as React from 'react';
import styled from 'styled-components/macro';

export default function Logo() {
  return (
    <Wrapper>
      <Title>Accounts Management</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.leadColor};
  margin-right: 1rem;
  font-weight: bold;
`;

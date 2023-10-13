import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const CoffeeListContainer = styled.main`
    display: flex;
    flex-direction: column;
`;

export const CoffeeSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 3.375rem 0 9.8125rem;
    gap: 2.5rem 2rem;
`;

import { useState } from 'react';

import { CoffeeSection, CoffeeListContainer, HomeContainer } from './styles';

import { coffeeList } from './coffeeList';

import { CoffeeCard } from './components/CoffeeCard';
import { Intro } from './components/Intro';

interface Coffee {
    coffeeUrlImage: string;
    tags: string[];
    coffeeName: string;
    descriptions: string;
    price: number;
}

export function Home() {
    const [coffeeListWithFilter, setCoffeeListWithFilter] = useState<
        Coffee[] | null
    >(null);

    return (
        <HomeContainer>
            <Intro />
            <CoffeeListContainer>
                <CoffeeSection>
                    {coffeeListWithFilter &&
                        coffeeListWithFilter.map((coffee) => {
                            return (
                                <CoffeeCard
                                    key={coffee.coffeeName}
                                    content={coffee}
                                />
                            );
                        })}

                    {!coffeeListWithFilter &&
                        coffeeList.map((coffee) => {
                            return (
                                <CoffeeCard
                                    key={coffee.coffeeName}
                                    content={coffee}
                                />
                            );
                        })}
                </CoffeeSection>
            </CoffeeListContainer>
        </HomeContainer>
    );
}

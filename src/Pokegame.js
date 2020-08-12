import React from 'react';
import Pokedex from './Pokedex';

class Pokegame extends React.Component {
    static defaultProps = {
        pokemonList: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    };
    render() {
        const firstHand = [];
        const secondHand = [...this.props.pokemonList];
        while (firstHand.length < secondHand.length) {
            let idx = Math.floor(Math.random() * secondHand.length);
            firstHand.push(secondHand.splice(idx, 1)[0]);
        }
        const firstHandExp = firstHand.reduce((x, y) => x + y.base_experience, 0);
        const secondHandExp = secondHand.reduce((x, y) => x + y.base_experience, 0);
        return (
            <div className='Pokegame'>
                <Pokedex pokemonList={firstHand} totalExp={firstHandExp} isWinner={firstHandExp > secondHandExp} />
                <hr />
                <Pokedex pokemonList={secondHand} totalExp={secondHandExp} isWinner={secondHandExp > firstHandExp} />
            </div>
        );
    }
}

export default Pokegame;
import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends React.Component {
    render() {
        const { pokemonList, totalExp, isWinner } = this.props;
        const pokeList = pokemonList.map(x => <Pokecard key={x.id} pokeInfo={x} />);
        return (
            <div className='Pokedex'>
                <header className='Pokedex-Header'>
                    <h1 style={{ color: isWinner ? 'darkgreen' : 'darkred' }}>{isWinner ? 'Winning Hand' : 'Losing Hand'}</h1>
                    <h3>Total Experience: {totalExp}</h3>
                </header>
                <main className='Pokedex-Content'>
                    {pokeList}
                </main>
            </div>
        );
    }
}

export default Pokedex;
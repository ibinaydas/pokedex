import React from 'react';
import './Pokecard.css';

class Pokecard extends React.Component {
    render() {
        const { id, name, type, base_experience } = this.props.pokeInfo;
        const paddedId = id.toString().padStart(3, "0");
        const imagePath = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        const headingStyle = { color: 'mediumblue', textAlign: 'center' };
        return (
            <div className="Pokecard">
                <header>
                    <h2 style={headingStyle}>{name}</h2>
                </header>
                <main>
                    <img className="Pokecard-Image" src={imagePath} alt={name} />
                </main>
                <footer className="Pokecard-Footer">
                    <span>Type: {type}</span>
                    <span>EXP: {base_experience}</span>
                </footer>
            </div>
        );
    }
}

export default Pokecard;
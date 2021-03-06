import React, { Component } from 'react';
import styled from 'styled-components';
import loading from '../pokemon/pokeball-pokemon.gif';
import { Link } from 'react-router-dom';


const Sprite = styled.img`
width:10em;
height: 10em;
display: none
`

const Card = styled.div`
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.30);
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
&:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35), 0 10px 25px rgba(0, 0, 0, 0.30);
}
-moz-user-select: none;
-website-user-select: none;
-o-user-select: none;
user-select: none;
`;

const StyledLink = styled(Link)`
color: black;
&:focus,
&:hover,
&:visited,
&:link,
&:active {
    text-decoration: none;
}
`;

export default class PokemonCard extends Component {
    state = {
    name: '',
    imageUrl:'',
    pokemonIndex:'',
    imageLoading: true,
    tooManyRequests: false
};

componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({
        name,
        imageUrl,
        pokemonIndex
    });
}
    render() {
        return (
            
            <div className="col-md-4 col-sm-4 mb-4">
                <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                    <Card className="card">
                        <div className="card-header">
                            <h5 className="card-header">{this.state.pokemonIndex}</h5>
                            { this.state.imageLoading ? (
                                <img src={loading} style={{width: "6em", height: "4em"}} alt="loading" className="card-img-top rounded mx-auto d-block mt-2 img-fluid" />
                            ) : null }
                            <Sprite
                            className="card-img-top rounded mx-auto mt-2 image-fluid"
                            onLoad = { () => this.setState({ imageLoading: false })}
                            onError = {() => this.setState({ tooManyRequests: true })}
                            src= {this.state.imageUrl}
                            style={
                                this.state.tooManyRequests ? {display: "none"} :
                                this.state.imageLoading ? null : {display: "block"}
                            }

                            />
                            {this.state.tooManyRequests ? (
                                <h6 className="mx-auto">
                                    <span className="badge badge-danger mt-2 auto">/Too Many Requests</span>
                                </h6>
                            ) : null}
                            <div className="card-body mx-auto">
                                <h4 className="card-title">{this.state.name
                                .toLowerCase()
                                .split(" ")
                                .map(
                                    letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                                )
                                .join(' ')}
                                </h4>
                            </div>
                        </div>
                    </Card>
                </StyledLink>
            </div>
        );
    }
}

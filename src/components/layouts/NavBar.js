import React, { Component } from 'react'
// import styled from 'styled-components';
// import classnames from 'classnames';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="navbar">
                    <a href="/" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" >Pokédex</a>
                </nav>
            </div>
        )
    }
}

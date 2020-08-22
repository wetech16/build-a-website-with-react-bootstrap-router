import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import boatImage from '../assets/boatImage.jpeg'

const Styles = styled.div`
    .jumbo {
        background: url(${boatImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;

    }
`;

export const Jumboron = () => {
    return (
        <Styles>
            <Jumbotron fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Welcome</h1>
                    <p>Learn to code from my Youtube videos</p>
                </Container>
            </Jumbotron>
        </Styles>
    )
}
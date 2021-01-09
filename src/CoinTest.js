import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import './Coin.css';

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinTest = ({ name, price, symbol, image, priceChange }) => {
  return (
    <div>
        <Container className="coin-container">
            <Center>
                <Row className="coin-row">
                    <Col className='coin'>
                        <img src={image} alt='crypto' />
                        <h2>{name}</h2>
                        <p className='coin-symbol'>{symbol}</p>
                    </Col>
                    <Col className='coin-data'>
                        <p className='coin-price'>${price}</p>
                        {priceChange < 0 ? (
                            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                        )}
                    </Col>               
                </Row>
            </Center>
        </Container>        
    </div>


  );
}

export default CoinTest;

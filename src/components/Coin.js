import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Coin.css';

const Coin = ({ name, price, symbol, image, priceChange }) => {
    return (
        <div>
            <Container className="flex justify-center">
                <div className='flex justify-center items-center'>
                    <Row className="flex flex-row justify-center items-center h-[75px] coin-row">
                        <Col className='flex items-center min-w-[300px] pr-[24px]'>
                            <img src={image} alt='crypto' className='w-[30px] h-[30px] mr-[15px]' />
                            <h2 className='text-[16px] w-[150px]'>{name}</h2>
                            <p className='uppercase coin-symbol'>{symbol}</p>
                        </Col>
                        <Col className='text-right flex justify-between w-[150px]'>
                            <p className='w-[100px]'>${price}</p>
                            {priceChange < 0 ? (
                                <p className='text-[#f00606] w-[10px]'>{priceChange.toFixed(2)}%</p>
                            ) : (
                                <p className='text-[#11d811] w-[10px]'>{priceChange.toFixed(2)}%</p>
                            )}
                        </Col>               
                    </Row>
                </div>
            </Container>        
        </div>
    );
}

export default Coin;
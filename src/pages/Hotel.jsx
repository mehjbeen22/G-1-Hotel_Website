import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center; 
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 400px;
  overflow: hidden;
  position: relative; 
`;

const Image = styled.img`
  max-width: 100%;
  height: auto; 
  object-fit: contain; 
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%; 
  transform: translateY(-50%);
  padding: 10px;
`;

const hotelName = styled.h1 `
  font-size: 2rem;
  margin-bottom: 10px;
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 10px; 
`;

const RightArrowButton = styled(ArrowButton)`
  right: 10px; 
`;

const ReserveBtn = styled.button`
  background-color: #aa1133;
  padding: 10px;
  border-radius: 10px;
  color: white;

  &:hover {
  background-color: #00aa66;
  }

`;

const Hotel = ({ hotel }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotel.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? hotel.images.length - 1 : prevIndex - 1
    );
  };

  const handleReserve = () => {
    
  }

  return (
    <Container>
      <hotelName>{hotel.hotel_name}</hotelName>
      <h1>{hotel.city}</h1>
      <p>Rating: {hotel.rating}</p>
      <p>Price: {hotel.price}</p>
      <p>Description: {hotel.description}</p>
      <h2>Facilities: {hotel.facilities.join(', ')}</h2>
      <h2>Availability: {hotel.room_available ? 'Avalible' : 'Not Available'} </h2>
      <h2>Swimming Pool: {hotel.swimming_pool ? 'Available' : 'Not available'}</h2>
      <ImageContainer>
        {hotel.images.length > 1 && (
          <>
            <LeftArrowButton onClick={handlePrevImage}>{'<'}</LeftArrowButton>
            <RightArrowButton onClick={handleNextImage}>{'>'}</RightArrowButton>
          </>
        )}
        <Image src={hotel.images[currentImageIndex]} alt="Hotel Image" />
      </ImageContainer>
      <ReserveBtn onClick={() => {handleReserve}}>Reserve</ReserveBtn>
    </Container>
  );
};

export default Hotel;

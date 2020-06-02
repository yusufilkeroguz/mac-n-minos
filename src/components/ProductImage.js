import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductImageContainerElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  flex: 0 0 100%;
`;

function ProductImage({
  alt,
  src,
  width = 1170,
  height = 400,
}) {
  return (
    <ProductImageContainerElement>
      <img alt={alt} src={src} width={width} height={height} />
    </ProductImageContainerElement>
  );
}

ProductImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default ProductImage;

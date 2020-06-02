import React from 'react';
import { withRouter, useParams } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Row from './components/Row';
import Column from './components/Column';
import Header from './components/Header';
import Title from './components/Title';
import Button from './components/Button';
import Price from './components/Price';
import ProductImage from './components/ProductImage';

import swal from 'sweetalert';

function addToBasket(e) {
  e.preventDefault();

  swal('Ürün sepetinize başarıyla eklenmiştir');

  return true;
}

function DetailPage(props) {
  const { id } = useParams();
  const { pizzas } = props;

  const pizza = pizzas[id];

  if (!pizza) {
    return (
      <div />
    );
  }

  return (
    <React.Fragment>
      <Header relative={true} />
      <Row justifyContent={'flex-start'}>
        <Column size={1} justifyContent={'flex-start'}>
          <Title justifyContent={'flex-start'}>
            {pizza.name}
          </Title>
          <ProductImage src={pizza.images.cover} alt={pizza.name} width={'100%'} height={'auto'} />
          <Column size={1} justifyContent={'space-between'} noWrap={true}>
            <Title as={'h2'} justifyContent={'flex-start'}>
              Fiyat: <Price> {pizza.price} </Price>
            </Title>
            <Button xl={true} onClick={addToBasket}>
              Satın Al
            </Button>
          </Column>
        </Column>
      </Row>
    </React.Fragment>
  );
}

const mapStateToProps = ({ pizzas }) => ({ pizzas });

DetailPage.propTypes = {
  pizzas: PropTypes.array,
  pizza: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default withRouter(connect(mapStateToProps, {})(DetailPage));

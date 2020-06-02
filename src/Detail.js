import React from 'react';
import { withRouter, useParams } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Row from './components/Row';
import Column from './components/Column';
import Header from './components/Header';
import Title from './components/Title';

function DetailPage(props) {
  const { id } = useParams();
  const { pizzas } = props;

  const pizza = pizzas[id];

  if (!pizza) {
    return (
      <div>Loading</div>
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
          <img src={pizza.images.cover} width={1170} height={400} />
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

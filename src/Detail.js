import React from 'react';
import { withRouter, useParams } from 'react-router';

function App() {
  const { id } = useParams();

  return (
    <React.Fragment>
      {id}
    </React.Fragment>
  );
}

export default withRouter(App);

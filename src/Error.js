import React from 'react';
import { withRouter } from 'react-router';


function Error() {
  return (
    <React.Fragment>
      <div>
        404
      </div>
    </React.Fragment>
  );
}

export default withRouter(Error);

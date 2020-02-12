import React from 'react';
import { withRouter } from 'react-router';

const LocationDisplay = withRouter(({ location }) => (
  <div
    style={{
      textIndent: '-9999px',
      position: 'absolute',
    }}
    data-testid="location-display"
  >
    {location.pathname}
  </div>
));

export default LocationDisplay;

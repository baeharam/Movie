import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const withRouter = (component, path = '/') => (
  <MemoryRouter initialEntries={[path]} initialIndex={0}>
    {component}
  </MemoryRouter>
);

export default withRouter;

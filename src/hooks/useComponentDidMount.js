import { useEffect } from 'react';

const useComponentDidMount = func => useEffect(func, []);

export default useComponentDidMount;

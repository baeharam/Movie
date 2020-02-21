import { useRef } from 'react';
import useComponentDidMount from './useComponentDidMount';

const useComponentWillMount = func => {
  const willMount = useRef(true);

  if (willMount.current) {
    func();
  }

  useComponentDidMount(() => {
    willMount.current = false;
  });
};

export default useComponentWillMount;

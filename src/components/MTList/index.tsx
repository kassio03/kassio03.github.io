import MTListApp from './app';
import { EndpointContextProvider } from './contexts/EndpointContext';

const MTList = () => {
  return (
    <EndpointContextProvider>
      <MTListApp />
    </EndpointContextProvider>
  );
};

export default MTList;

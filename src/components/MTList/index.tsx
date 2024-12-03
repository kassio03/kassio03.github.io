import MTListApp from './app';
import { DialogContextProvider } from './contexts/DialogContext';
import { EndpointContextProvider } from './contexts/EndpointContext';

const MTList = () => {
  return (
    <EndpointContextProvider>
      <DialogContextProvider>
        <MTListApp />
      </DialogContextProvider>
    </EndpointContextProvider>
  );
};

export default MTList;

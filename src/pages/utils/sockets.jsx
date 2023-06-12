import { createContext, useContext } from 'react';
import io from 'socket.io-client';

const socket = io('175.45.200.17:6379');
const SocketContext = createContext(null);

export function useSocket() {
  const socket = useContext(SocketContext);
  if (!socket) {
    throw new Error('Socket context not found!');
  }
  return socket;
}

export function SocketProvider({ socket, children }) {
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}

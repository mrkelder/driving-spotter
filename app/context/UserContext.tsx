import { createContext, useState, ReactNode } from "react";

interface UserContextProps {
  userId: string | null;
  setUserContextId: (id: string | null) => void;
}

export const UserContext = createContext<UserContextProps>({
  userId: null,
  setUserContextId: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);

  const setUserContextId = (id: string | null) => {
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userId, setUserContextId }}>
      {children}
    </UserContext.Provider>
  );
};

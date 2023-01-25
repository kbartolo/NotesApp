import {FC, useState, createContext, useContext, ReactNode} from 'react';

interface IContextMenu {
  showMenuOptions: boolean;
  onShowMenuOptions: (visible:boolean) => void;
}

interface MenuProviderProps {
  children: ReactNode;
}

const MenuContext = createContext<IContextMenu>({} as IContextMenu);

export const MenuProvider: FC<MenuProviderProps> = ({children}) => {
  const [showMenuOptions, setShowMenuOptions] = useState<boolean>(false);

  const onShowMenuOptions = (visible:boolean) => {
    console.log('showMenuOptions ', showMenuOptions);
    setShowMenuOptions(visible);
  };

  const payload = {showMenuOptions, onShowMenuOptions};

  return (
    <MenuContext.Provider value={payload}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);

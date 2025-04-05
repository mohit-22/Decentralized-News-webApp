
import React, { createContext, useState, useEffect } from 'react';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        localStorage.setItem('account', accounts[0]);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const updateUserInfo = (info) => {
    setUserInfo(info);
    localStorage.setItem('userInfo', JSON.stringify(info));
  };

  const logout = () => {
    setAccount(null);
    setUserInfo(null);
    localStorage.removeItem('account');
    localStorage.removeItem('userInfo');
    localStorage.removeItem("walletUser");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) setUserInfo(JSON.parse(storedUser));

    const storedAccount = localStorage.getItem('account');
    if (storedAccount) setAccount(storedAccount);

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          localStorage.setItem('account', accounts[0]);
        } else {
          logout();
        }
      });
    }
  }, []);

  return (
    <WalletContext.Provider value={{ connectWallet, account, userInfo, setUserInfo: updateUserInfo, logout }}>
      {children}
    </WalletContext.Provider>
  );
};


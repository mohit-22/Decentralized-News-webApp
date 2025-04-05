


import React, { useContext, useState } from 'react';
import { WalletContext } from './WalletContext';

const Login = () => {
  const { connectWallet, account, setUserInfo } = useContext(WalletContext);
  const [username, setUsername] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [error, setError] = useState('');

  const handleConnect = async () => {
    try {
      await connectWallet();
    } catch (err) {
      setError('MetaMask connection failed. Please try again.');
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value.trim() !== '') {
      setError('');
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      setProfilePic(file);
    }
  };

  const handleSave = () => {
    if (!username.trim()) {
      setError('Username is required');
      return;
    }

    setUserInfo({
      username,
      profilePic: previewUrl,
      loginTime: new Date().toLocaleString()
    });

    alert('✅ User info saved!');
  };

  return (
    <div className="container d-flex flex-column align-items-center" style={{ marginTop: '100px' }}>
      {!account ? (
        <>
          <button className="btn btn-primary" onClick={handleConnect}>
            Connect to MetaMask
          </button>
          {error && <p className="text-danger mt-2">{error}</p>}
        </>
      ) : (
        <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
          <h5 className="mb-3 text-center">🦊 Connected: {account.slice(0, 6)}...{account.slice(-4)}</h5>

          <input
            className="form-control mb-2"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsernameChange}
          />

          <input
            className="form-control mb-2"
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
          />

          {previewUrl && (
            <div className="text-center mb-2">
              <img
                src={previewUrl}
                alt="Profile Preview"
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
              />
            </div>
          )}

          {error && <p className="text-danger text-center">{error}</p>}

          <button className="btn btn-success w-100" onClick={handleSave}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;



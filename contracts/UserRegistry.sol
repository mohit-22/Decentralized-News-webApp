// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract UserRegistry {
    struct User {
        string username;
        string profilePicUrl;
        uint256 registeredAt;
    }

    mapping(address => User) public users;

    event UserRegistered(address user, string username, string profilePicUrl, uint256 registeredAt);

    function registerUser(string memory username, string memory profilePicUrl) external {
        require(bytes(username).length > 0, "Username required");

        users[msg.sender] = User({
            username: username,
            profilePicUrl: profilePicUrl,
            registeredAt: block.timestamp
        });

        emit UserRegistered(msg.sender, username, profilePicUrl, block.timestamp);
    }

    function getUser(address userAddress) external view returns (string memory, string memory, uint256) {
        User memory u = users[userAddress];
        return (u.username, u.profilePicUrl, u.registeredAt);
    }
}

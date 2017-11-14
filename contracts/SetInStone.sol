pragma solidity ^0.4.18;

import "./Challenge.sol";

contract SetInStone {

    event ChallengeCreated(address sender, string url, string snippet, address contract_addr);

    mapping(string => address) URLtoContract;

    function SetInStone() public {

    }

    function createChallenge(string url, string snippet) public {
        address contract_addr = new Challenge(msg.sender, url, snippet);
        URLtoContract[url] = contract_addr;
        ChallengeCreated(msg.sender, url, snippet, contract_addr);
    }

    function getChallenge(string url) view public returns (address) {
        return URLtoContract[url];
    }

}
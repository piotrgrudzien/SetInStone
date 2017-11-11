pragma solidity ^0.4.18;

import "./Challenge.sol";

contract SetInStone {

    mapping(string => address) URLtoContract;

    function SetInStone() public {

    }

    function createChallenge(string url, string snippet) public {
        URLtoContract[url] = new Challenge(msg.sender, url, snippet);
    }

    function getChallenge(string url) view public returns (address) {
        return URLtoContract[url];
    }

}
pragma solidity ^0.4.18;

contract Challenge {

    address challenger;
    string public url;
    string public snippet;

    function Challenge(address _challenger, string _url, string _snippet) public {
        challenger = _challenger;
        url = _url;
        snippet = _snippet;
    }

}

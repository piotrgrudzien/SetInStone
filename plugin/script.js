//web3 = new Web3(web3.currentProvider);
console.log("Using Metamask - wait 1s to avoid race condition");
setTimeout(function() {
    //run();
}, 1000);

//var url = "Sunday night test URL";
//var snippet = "Sunday night test snippet";
var myaddr = "0xb4fA10a8f8262a5abf80E94D63385d35eF4f0DE4";

function run(url, snippet) {

    var SetInStone = web3.eth.contract(SetInStone_abi).at(SetInStone_addr);

    //check(SetInStone);

    console.log("Sending transaction from account " + myaddr);
    console.log("URL " + url + " and snippet " + snippet);

    SetInStone.createChallenge.sendTransaction(url, snippet, {from: myaddr}, function (err, tr_hash) {
        if(err) {
            console.log("Error submitting challenge for URL " + url + ": " + err);
        }
        else {
            console.log("Submitted transaction for challenge for URL " + url + ": " + tr_hash);
        }
    });
}


function check(s) {
    setTimeout(function() {
        s.getChallenge(url, function(err, challenge_addr) {
            if(err) {
                console.log("Error getting challenge address for url " + url + ": " + err);
            }
            else {
                console.log("Got challenge address: " + challenge_addr);
                web3.eth.contract(Challenge_abi).at(challenge_addr, function(e, challenge_contract) {
                    console.log("Got challenge contract");
                    challenge_contract.snippet(function(e, snip) {
                        console.log("Snippet: " + snip);
                    });
                });
            }
        });
        check(s);
    }, 10000);
}


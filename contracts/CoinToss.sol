pragma solidity ^0.8.0;

contract CoinToss {
    
    uint256 randomNumber;
    event Message(string _msg, uint amount);

    constructor() payable {
    }
    
    function flip() public payable {
        emit Message('asd: ', address(this).balance);
        emit Message('asd1: ', msg.value * 2 );
        
        require(msg.value * 2 <= address(this).balance, 'we can not support this amount of money');    
        randomNumber = generateRandomNumber();
        if(randomNumber <= 499 ) {
            emit Message('win: ', randomNumber);
            payable(msg.sender).transfer(msg.value * 2);
        }
        else {
            emit Message('loss: ', randomNumber);
        }
    }

    function generateRandomNumber() public view returns(uint){
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty))) % 1000;
    }
}
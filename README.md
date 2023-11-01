# ELO Rating System in JavaScript

This repository contains a player rating system based on the ELO rating system used in online competitive games. The ELO system is a rating method that assigns a score to each player, which is adjusted based on the results of their matches.

## How to use

First, call the ranked(win, defeat) function with the player's number of wins and losses as arguments. This will return the player's point balance.

let elo = rankeada(57, 23);
console.log(elo); // Saída: 34

- Then, the switch statement is used to determine the player's rating category based on their point balance. The switch(true) expression is a way of using the switch statement to execute different blocks of code based on a series of case conditions.

- Each case checks whether the player's point balance is within a specific range and then calls the corresponding output function. For example, if the player's point balance is between 0 and 10, the eloFerro() function is called and the message "You have 10 points. Your ELO is Iron" is printed on the console.

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch with a descriptive name for your change.
3. Make your changes to the created branch.
4. Submit a pull request to the master branch of this repository.

## Contact

If you have any questions or suggestions, please contact me via my email or my GitHub profile.

## Thanks

This project was made possible thanks to the support and guidance of DIO

## References

This project was inspired by a DIO challenge

function getCompChoice () {
    let max = 3;
    let min = 1;
    let rand = Math.floor(Math.random() * (max) + min);
    console.log(rand);

    let compChoice;

    switch (rand) {
        case 1:
            compChoice = "Rock"
            break;

        case 2:
            compChoice = "Paper";
            break;

        case 3:
            compChoice = "Scissors";
            break;
    }
    console.log(compChoice);
}

getCompChoice();
getCompChoice();
getCompChoice();
let input = "2 0 0 2 6 0 7 0 1\n6 8 0 0 7 0 0 9 0\n1 9 0 0 0 4 5 0 0\n8 2 0 1 0 0 0 4 0\n0 0 4 6 0 2 9 0 0\n0 5 0 0 0 3 0 2 8\n0 0 9 3 0 0 0 7 4\n0 4 0 0 5 0 0 3 6\n7 0 3 0 1 8 0 0 0"

// Pushing only numbers to a new array by eleminating non numbers.
let input1 = []

for (let i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) {
        input1.push(Number(input[i]))
    }
}

// making a 2d array
let input2 = []

for (let i = 0; i < input1.length; i += 9) {
    for (let j = i; j < i + 9; j += 9) {
        input2.push([input1[j], input1[j + 1], input1[j + 2], input1[j + 3], input1[j + 4], input1[j + 5], input1[j + 6], input1[j + 7], input1[j + 8]])
    }
}

// console.log(input1)
// console.log(input2)

// Converting all elements to numbers.

// for (let i = 0; i < input2.length; i++) {
//     for (let j = 0; j < input2[i].length; j++) {
//         for (let k = 0; k < input2[i][j].length; k++) {
//             input2[i][j][k] = Number(input2[i][j][k])
//         }
//     }
// }

// Check if the input is valid or not.
function isTheInputValid(unsolvedSudoku) {

    //check horizontally for repeated entries except 0.

    for (let i = 0; i < unsolvedSudoku.length; i++) {

        for (let j = 0; j < unsolvedSudoku[i].length - 1; j++) {

            var currentValue;

            if (unsolvedSudoku[i][j] != 0) {
                currentValue = unsolvedSudoku[i][j];

                if (unsolvedSudoku[i][j + 1] == currentValue) {
                    console.log("Invalid Input")
                    console.log(`The number ${unsolvedSudoku[i][j + 1]} is already existed in row ${i + 1}`);
                    return false
                }
            }

        }
    }

    //check vertically for repeated entries except 0.

    for (let k = 0; k < unsolvedSudoku.length; k++) {

        for (let l = 0; l < unsolvedSudoku[k].length - 1; l++) {

            var currentValue;

            if (unsolvedSudoku[l][k] != 0) {
                currentValue = unsolvedSudoku[l][k];

                if (unsolvedSudoku[l + 1][k] == currentValue) {
                    console.log("Invalid Input")
                    console.log(`The number ${unsolvedSudoku[l + 1][k]} is already existed in column ${k + 1}`);
                    return false
                }
            }

        }
    }
}


// Check if the input is presolved. If not invoke the function
function isTheInputPresolved(unsolvedSudoku) {

    //check horizontally if 0 or repeated entries exist.

    for (let i = 0; i < unsolvedSudoku.length; i++) {

        for (let j = 0; j < unsolvedSudoku[i].length - 1; j++) {

            if (unsolvedSudoku[i][j] == 0) {
                isUnsolved = true;
                return false;
            }
        }
    }

    //check vertically for repeated entries except 0.

    for (let k = 0; k < unsolvedSudoku.length; k++) {

        for (let l = 0; l < unsolvedSudoku[k].length - 1; l++) {

            var currentValue;

            if (unsolvedSudoku[l][k] != 0) {
                currentValue = unsolvedSudoku[l][k];

                if (unsolvedSudoku[l + 1][k] == currentValue) {
                    console.log("Invalid Input")
                    console.log(`The number ${unsolvedSudoku[l + 1][k]} is already existed in column ${k + 1}`);
                    return false
                }
            }

        }
    }
}

isTheInputPresolved(input2)

console.log(input2)
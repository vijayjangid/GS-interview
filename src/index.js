/* Problem Name is &&& JS Object to String &&& PLEASE DO NOT REMOVE THIS LINE. */

/**
 * Instructions to candidate:
 *
 *  1) Given the below code. Write a function (ES6 recommended) that loops through all the properties of the Employee and create a comma-seperated string with the values
 *     For e.g.
 *     {
 *        firstName: "X",
 *        lastName: "Y",
 *        project: {
 *           id: 1,
 *           name: "ABC"
 *         }
 *     }
 *     should be converted to a string like this "X, Y, 1, ABC, "
 *
 *
 *  NOTE: The function shouldn't convert the prototypically inherited properties For e.g. in this case "managerId"
 *
 */
/*const Employee = function (fName, lName, project) {
  this.firstName = fName;
  this.lastName = lName;
  this.project = project;

  this.getFullName = function () {
  return this.lastName + ", " + this.firstName;
  }
};
Employee.prototype.managerId = 123;
Employee.prototype.sayHello = function () {
  console.log("Hello");
};
// ---------------------------------------------

/**
 * TODO: Write a function here called 'convertToString' that will return the expected result.
 */

// const convertToString = (input) => {
//   const props = Array.isArray(input)? input : Object.values(input);
//   const outputAsArray =  props.reduce((acc, val) => {
//     if(typeof val === 'function'){
//       acc.push('');
//     }
//     else if(Array.isArray(val) || typeof val === 'object') {
//       acc.push(convertToString(val));
//     } else {
//     acc.push(val.toString());
//     }

//     return acc;

//   }, []);
//   return outputAsArray.join(', ');
// }
// // ---------------------------------------------
// /**
//  * Returns true if all tests pass; otherwise, returns false.
//  */
// function doTestsPass(testCases)
// {
//   // todo: add more test cases
//   return testCases.reduce((result, testCase) => {
//     const answer = convertToString(testCase.inputs);
//     console.info("expected: ", testCase.expected, ", answer: ", answer);
//     return result && (answer === testCase.expected);
//   }, true);
// }

// const testCases = [
//   {
//   expected: "Frank, Sinatra, 1, Trader Platform, ",
//   inputs: new Employee(['vijay', { family: 'jangid'}], "Sinatra", { id: 1, name: "Trader Platform"})
//   }
// ];

// /**
//  * Main execution entry.
//  */
// if(doTestsPass(testCases))
// {
//   console.log("All tests pass!");
// }
// else
// {
//   console.log("There are test failures.");
// }
// */

/* Problem Name is &&& Best Average Grade &&& PLEASE DO NOT REMOVE THIS LINE. */

/*
 **  Instructions:
 **
 **  Given a list of student test scores, find the best average grade.
 **  Each student may have more than one test score in the list.
 **
 **  Complete the bestAverageGrade function in the editor below.
 **  It has one parameter, scores, which is an array of student test scores.
 **  Each element in the array is a two-element array of the form [student name, test score]
 **  e.g. [ "Bobby", "87" ].
 **  Test scores may be positive or negative integers.
 **
 **  If you end up with an average grade that is not an integer, you should
 **  use a floor function to return the largest integer less than or equal to the average.
 **  Return 0 for an empty input.
 **
 **  Example:
 **
 **  Input:
 **  [ [ "Bobby", "87" ],
 **    [ "Charles", "100" ],
 **    [ "Eric", "64" ],
 **    [ "Charles", "22" ] ].
 **
 **  Expected output: 87
 **  Explanation: The average scores are 87, 61, and 64 for Bobby, Charles, and Eric,
 **  respectively. 87 is the highest.
 */

function bestAverageGrade(scores) {
  // TODO: implement this function
  const dict = {};
  scores.forEach(([name, score]) => {
    console.log(name, score);
    if (!dict[name]) {
      dict[name] = { score: Number(score), count: 1 };
    } else {
      dict[name] = {
        score: Number(dict[name].score) + Number(score),
        count: dict[name].count + 1
      };
    }
  });
  console.log(dict);
  const result = Object.values(dict).reduce((acc, { score, count }) => {
    acc = Math.max(acc, score / count);
    return acc;
  }, -10000);
  console.log(result);
  return result;
}

/**
 * boolean doTestsPass()
 * Returns true if all the tests pass. Otherwise returns false.
 */
/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass() {
  const tc1 = [
    ["Bobby", "87"],
    ["Charles", "100"],
    ["Eric", "64"],
    ["Charles", "22"]
  ];

  return bestAverageGrade(tc1) === 87;
}

/**
 * Main execution entry.
 */
if (doTestsPass()) {
  console.log("All tests pass!");
} else {
  console.error("There are test failures.");
}

/*1. Create two variables as strings with your first name and then last name.
2. Create a number variable with your age
3. Print out in the console each of these on a separate line.
4. Print out a concatenated string of Hi, my name is 'yourfullname'. I am 'yourage' years old.
5. Print out what your age would be if you were 10 years younger
6. Repeat steps 1-5 using an object
7. Repeat steps 1-5 using an array. */

//1 2 3
// var firstName = 'lexus';
// var lastName = 'davis'
// var myAge = 31;

// console.log(firstName)
// console.log(lastName)
// console.log(myAge)

// //4 5
// console.log("Hi, my name is " + firstName + ' ' + lastName +  " and I am " + myAge + " years old.")
// console.log(myAge - 10)

// //6
// const lexusDavis = {
//     myFirstName: 'Lexus',
//     myLastName: 'Davis',
//     myRealAge: 31
// }
// console.log(lexusDavis)

// //7
// const myArray = ['Lexus', 'Davis', 31]
// console.log("Hi, my name is " + myArray[0])




/*function createPerson(lastname, firstname, age) {
    let person = {};
    person.lastname = lastname;
    person.firstname = firstname;
    person.age = age;
    return person;
  }
  
  // Create multiple person objects using the createPerson function
  let person1 = createPerson("Doe", "John", 30);
  let person2 = createPerson("Smith", "Jane", 25);
  
  // Access and modify the values of the person objects
  console.log(person1.lastname);  // Output: "Doe"
  console.log(person2.firstname); // Output: "Jane"
  
  person1.age = 31;
  console.log(person1.age);       // Output: 31*/

  //Array Operation

  //Push
  let myFavoriteSportsTeams = ['Columbus Crew', 'Pittsburg Steelers', 'Cleveland Cavaliers', 'Cleveland Browns'];
  myFavoriteSportsTeams.push('Ohio University Bobcats');
  //console.log(myFavoriteSportsTeams);
  
  //Pop
  let mVP = myFavoriteSportsTeams.pop();
  //console.log(mVP);
  //console.log(myFavoriteSportsTeams);

  //Splice
  let myFavoriteTeam = myFavoriteSportsTeams.splice(2,2);
  //console.log(myFavoriteTeam);
  //console.log(myFavoriteSportsTeams);

  //Shift & Unshift
  let myFavoriteSoccerTeam = myFavoriteSportsTeams.shift();
  console.log(myFavoriteSoccerTeam);
  console.log(myFavoriteSportsTeams)

  //Unshift
  myFavoriteSportsTeams.unshift('Bengals');
  console.log(myFavoriteSportsTeams);

  

//loop through the object using forEach so that it logs, (eg,for user1)
//'user1 is called Jon and is 23 years old'
//the loop should not return a data structure
// Use one or more of the object methods to solve
const obj = {
  user1: {
    name: 'Jon',
    age: 23,
  },
  user2: {
    name: 'Jen',
    age: 25,
  },
  user3: {
    name: 'Jan',
    age: 21,
  },
};

Object.entries(obj).forEach(key => {
  console.log(`user1 is called ${key[1].name} and is ${key[1].age}`);
});






// Use Object Methods
//Create a list of every folder in the documents object (the keys are the folders)
//Create a list of every file in the documents object. one list.
const documents = {
  taxes: ['2010.xlx', '2020.xlx'],
  records: ['rec1.docx', 'rec2.docx', 'rec3.docx'],
  miscellaneous: ['pic.jpg', 'passwords.pdf', 'docs.txt'],
  Clubhouse: ['paty.jpg', 'christmasRules.pdf', 'pool.txt'],
};

let alphabetValues = Object.entries(documents).flat(2)
console.log(alphabetValues)



//Are the two books alike? Create a function and Use Object methods to find out. Change object values to test for non-alike objects
const book1 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
const book2 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};

const compare = (book1, book2) => {
  const values1 = Object.values(book1);// returns an array of keys
  const values2 = Object.values(book2);
  const keys1 = Object.keys(book1)
  const keys2 = Object.keys(book2)
  
  if (values1 !== values2) {
    return false;
  } else {
    true
  }

  if (keys1 === keys2) {
    return true
  } else {
    false
  }
}


console.log(compare(book1,book2))



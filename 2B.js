const users = [
    {
      name: 'Brook',
      scores: 75,
      skills: ['HTM', 'CSS', 'JS'],
      age: 16
    },
    {
      name: 'Alex',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
    },
    {
      name: 'David',
      scores: 75,
      skills: ['HTM', 'CSS'],
      age: 22
    },
    {
      name: 'John',
      scores: 85,
      skills: ['HTM'],
      age: 25
    },
    {
      name: 'Sara',
      scores: 95,
      skills: ['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name: 'Martha',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
    },
    {
      name: 'Thomas',
      scores: 90,
      skills: ['HTM', 'CSS', 'JS'],
      age: 20
    }
  ];
  
console.log("\n2\n");
function addUser(users, newuser) {
  let count = 0
  for (let per of users) {
    if (per.name == newuser.name) {
      count++
      return "User already exists"
    }
  }
  if (count == 0) {
    users.push(newuser)
    return users
  }

}
const newuser = {
  name: 'Mrudula',
  scores: 90,
  skills: ['HTM', 'CSS', 'JS'],
  age: 20
}
console.log(addUser(users, newuser))

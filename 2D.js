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
  
console.log("\n4\n");
function editUser(users, newdata) {
  let count = 0;
  for (let per of users) {
    if (per.name == newdata.name) {
      count = 1;
      per.name = newdata.newname;
      per.scores = newdata.scores;
      per.age = newdata.age;
      for (let sub of newdata.skills) {
        per.skills.push(sub);
      }
    }
  }
  if (count == 0) {
    return "User doesnot exists"
  }
  return users

}
const newdata = {
  name: 'Alex',
  newname: 'Alex new',
  scores: 70,
  skills: ['node', 'node2', 'node3'],
  age: 60
}	
console.log(editUser(users, newdata))

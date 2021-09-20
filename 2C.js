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
  
console.log("\n3\n");
function addUserSkill(users, newSkill) {
  let count = 0;
  for (let per of users) {
    if (per.name == newSkill.name) {
      count = 1;
      for (let sub of newSkill.skills) {
        per.skills.push(sub)
      }
    }
  }
  if (count == 0) {
    return "User doesnot exists"
  }
  return users

}
const newSkill = {
  name: 'Martha',
  scores: 80,
  skills: ['React'],
  age: 18
}
console.log(addUserSkill(users, newSkill))

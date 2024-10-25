class User {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
  greet() {
    return `Hi I'm ${this.name}`
  }

  print() {
    console.log(`Hello world`);
  }
}


class Admin extends User {
  constructor(...args) {
    super(...args)
    this.skills = args[3] || []
  }

  greet() {
    const result = super.greet()
    return `${result}! I am admin`
  }
}


const user1 = new User('Pavel', 27, 'male')
console.log('user1: ', user1);


const admin1 = new Admin('Bob', 30, 'male', ['HTML', 'JavaScript', 'CSS'])
console.log('admin1: ', admin1);



console.log('------------------------------');

console.log('user1.greet(): ', user1.greet());
console.log('admin1.greet(): ', admin1.greet());
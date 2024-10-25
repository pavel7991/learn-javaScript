const User = function (name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex

  // private method
  const _showAge = () => console.log(`Age: ${this.age}`)
  this.print = () => _showAge()
}

User.prototype = {
  greet() {
    console.log(`Hi I'm ${this.name}`);
  },
  print() {
    console.log(`Hello world`);
  }
}
User.prototype.constructor = User

const user1 = new User('Pavel', 27, 'male')
console.log('user1: ', user1);
console.log(user1.print());
console.dir(User)


user1.greet()



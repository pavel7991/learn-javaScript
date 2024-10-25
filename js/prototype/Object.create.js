const User = {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    return this
  },
  greet() {
    console.log(`Hi I'm ${this.name}`);
  }
}

const user1 = Object.create(User).constructor('Pavel', 27, 'male')
console.log('user1: ', user1)

user1.greet()

const Admin = Object.create(User)
Admin.constructor = function (name, age, sex, skills) {
  User.constructor.apply(this, arguments)
  this.skills = skills
  return this
}

Admin.showMsg = function () {
  console.log(`Hi, I'm Admin, ${this.name}`);
}

const admin1 = Object.create(Admin).constructor('Bob', 30, 'male', ['HTML', 'JavaScript', 'CSS'])
console.log('admin1: ', admin1);


admin1.showMsg()

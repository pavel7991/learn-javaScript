const skills = ['HTML', 'CSS', 'JavaScript', 'React']
console.log('skills: ', skills);

const nameLength = skills.map((el) => el.length)
console.log('nameLength: ', nameLength);

const nameInUpperCase = skills.map((el, i) => `${i}: ${el}`)
console.log('nameInUpperCase: ', nameInUpperCase);

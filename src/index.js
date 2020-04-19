const person = {
  name: 'Asgar';
  walk() {},
  talk() {}
};

person.talk();
person.name = '';

const targetMember = 'nam e';
person[targetMember.value] = 'Asgar';
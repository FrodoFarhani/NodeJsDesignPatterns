var Person = require('./Person');

class PersonBuilder {
  constructor(name) {
    this.name = name;
  }
  makeEmployee() {
    this.isEmployee = true;
    return this;
    /**
     * we return this because we modify this instance and return it
     * so we can have chain on it while using, visit index file
     */
  }
  makeManager(hours = 40) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }
  makePartTime(hours = 20) {
    this.hours = hours;
    return this;
  }
  withMoney(money) {
    this.money = money;
    return this;
  }
  withList(list = []) {
    this.shoppingList = list;
    return this;
  }
  build() {
    return new Person(this);
  }
}
module.exports = PersonBuilder;

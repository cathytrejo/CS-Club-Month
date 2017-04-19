function Person (personName) {
  this.name = personaName;
  this.info = "I am called " + this.name;
  this.showInfo = function () {
    alert(this.info);
  }
}
var person1 = new Person('Eve');
var person2 = new Person('Adam')
    

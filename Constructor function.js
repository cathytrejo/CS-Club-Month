function Car(Color, Year, Make, Miles) {
  this.color = Color;
  this.year = Year;
  this.make = Make;
  this. odometerReading = Miles;
  this.setOdometer = funcion(newMiles) {
    this.odometerReadin = newMiles;
  }
var car1 = new Car("blue", "1998", "Ford", 79500);
var car2 = new Car("yellow", "2004", "Nissan", 56350);
car1.setOdometer(82450);

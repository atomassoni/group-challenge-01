/**
*Calculates bonuses for a list of employees then displays salary and
*bonus info for each person.
*/

/**
 * A Person
 * @constructor
 */
function Person(name, employeeNum, salary, reviewRating) {

  this.name = name;
  this.employeeNum = employeeNum;
  this.salary = salary;
  this.reviewRating = reviewRating;

}
var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);


var employees = [atticus, jem, boo, scout];

/**
 * A function that finds and returns an employee's total
 * bonus amount given different conditions of employment.
 */
function findBonus(employee) {

  var array = [];
  var rating = employee.reviewRating;
  var bonusPercent = 0;
  var salary = parseInt(employee.salary);
  var bonusAmount = 0;

  array[0] = employee.name;
  /**
   * Given an employee rating, assign a bonus percentage
   */
  switch (rating) {
    case 3:
    bonusPercent = .04;
    break;
    case 4:
      bonusPercent = .06;
      break;
    case 5:
      bonusPercent = .1;
      break;
    default:
      bonusPercent = 0;
      break;
  }

  /**
   * If an employee has 4 employee numbers, this means they have been with the
   * company for longer than 15 years, and should receive an additional 5%
   */
  if(employee.employeeNum.length == 4){
    bonusPercent += .05;
  }

  /**
   * If an employee has an annual salary of more than $65000, lower the
   * bonus by 1%
   */

  if(salary > 65000){
    bonusPercent -= .01;
  }

  /**
   * No employees may have a bonus more than 13%.
   */

  if(bonusPercent > .13) {
    bonusPercent = .13;
  }

  array[1] = bonusPercent;

  bonusAmount = salary * bonusPercent;

  array[2] = salary + bonusAmount;

  array[3] = Math.round(bonusAmount);

  return array;
}

/**
 * Print out the employee info to HTML using Javascript (not JQuery!)
 */
for (var i = 0; i<employees.length; i++){

  var face = findBonus(employees[i]);
  document.write("<ul><li>Name: " + face[0] + "</li><li>Bonus percentage: " + (face[1] * 100) + "%</li><li>Total compensation: $" + face[2] + "</li><li>Rounded bonus: $" + face[3] + "</li></ul>");
}

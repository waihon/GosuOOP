//
// TextBox
//
var textBox1 = new TextBox()
textBox1.Text = "Text Box 1"
print(textBox1.Text.toUpperCase()) // TEXT BOX 1

var textBox2 = new TextBox()
textBox2.Text = "Text Box 2"
print(textBox2.Text) // Text Box 2

var textBox3 = textBox1
textBox3.Text = "Text Box 3"
print(textBox1.Text) // Text Box 3

print("-----")

//
// Proocedural programming
//
var baseSalary = 13000
var extraHours = 10
var hourlyRate = 20
var wage = Procedural.calculateWage(baseSalary, extraHours, hourlyRate)
print(wage) // 13200

print("-----")

//
// Encapsulation
//
var employee = new Employee()
employee.BaseSalary = 13000
employee.HourlyRate = 20
wage = employee.calculateWage(10)
print(wage) // 13200

print("-----")

var employee2 = new Employee2()
employee2.BaseSalary = 13000
employee2.HourlyRate = 20
wage = employee2.calculateWage(10)
print(wage) // 13200

print("-----")

var employee3 = new Employee3()
employee3.BaseSalary = 13000
employee3.HourlyRate = 20
wage = employee3.calculateWage(10)
print(wage) // 13200

print("-----")

//
// Reducing Coupling
//
var browser = new Browser()
browser.navigate("http://localhost")

print("-----")

//
// Constructors
//
var employee4 = new Employee4(13000, 20)
wage = employee4.calculateWage(10)
print(wage) // 13200

print("-----")

//
// Method Overloading
//
wage = employee4.calculateWage()
print(wage) // 13000

print("-----")

//
// Constructor Overloading
//
employee4 = new Employee4(13000)
wage = employee4.calculateWage(10)
print(wage) // 13000 because _hourlyRate remains as 0

print("-----")

//
// Static members
//
print(Employee4.NumberOfEmployees) // 2
Employee4.printNumberOfEmployees() // 2

print("-----")

//
// Access Modifiers
// 
External.main()
CheckBox.main()

//1-CLASS MASALASI
// {
//   class Student {
//     constructor(fname, lname, tel, address) {
//       this.fullName = fname;
//       this.lastName = lname;
//       this.phoneNumber = tel;
//       this.address = address;
//     }
//     getFulName() {
//       return `Students Full name ${this.fullName} ${this.lastName}`;
//     }
//     info() {
//       return `Studetnt info: ${this.fullName} ${this.lastName}, Phone number: ${this.phoneNumber}, Adderss: ${this.address}`;
//     }
//   }
//   let student = new Student(
//     "John",
//     "Doe",
//     "+1 347 632 2489",
//     "New York Times Sq"
//   );
//   console.log(student.getFulName());
//   console.log(student.info());
// }
//2-CLASS MASALASI
// {
//   class Teacher {
//     constructor(fname, lname, address, level, salary) {
//       this.fullName = fname;
//       this.lastName = lname;
//       this.address = address;
//       this.level = level;
//       this.salary = salary;
//     }

//     getFulName() {
//       return `Teacher Full name ${this.fullName} ${this.lastName}`;
//     }

//     description() {
//       return `Teacher description: ${this.fullName}, ${this.lastName}, Adderss: ${this.address}, Level is ${this.level}, Salary: ${this.salary}`;
//     }
//   }
//   let teacher = new Teacher("Boburmirzo", "BRM", "Jorsu", "Senior", "$10.000"); // => manimcha tahminan yozdim salarysini
//   console.log(teacher.getFulName());
//   console.log(teacher.description());
// }
//3-CLASS MASALASI
// {
//   class Group {
//     constructor(name, room, level, taacher, studentsCount) {
//       this.groupName = name;
//       this.groupRoom = room;
//       this.groupLevel = level;
//       this.groupTeacher = taacher;
//       this.groupStudentsCount = studentsCount;
//     }
//     fullInformation() {
//       return `Group name: ${this.groupName}, room: ${this.groupRoom}, level: ${this.groupLevel}, group techer: ${this.groupTeacher}, studetns: ${this.groupStudentsCount}`;
//     }
//   }

//   let group = new Group(
//     "Frontend ReactJS N83",
//     "Slack",
//     "4-month",
//     "Boburmirzo",
//     "15"
//   );
//   console.log(group.fullInformation());
// }
//4-CLASS MASALASI
// {
//   class Payment {
//     constructor(from, to, amount, status) {
//       this.paymentFrom = from;
//       this.paymentTo = to;
//       this.paymentAmount = amount;
//       this.paymentStatus = status;
//     }
//     getStatus() {
//       return `This money payment from: ${this.paymentFrom}, to: ${this.paymentTo}, Amount: ${this.paymentAmount}, Stratus: ${this.paymentStatus}`;
//     }
//   }

//   let payment = new Payment("John", "Mike", "$5 000", "false"); // ustoz shu statusga nima qilishshi chunmadim yana date ni ham qilaolmadim
//   console.log(payment.getStatus());
// }
//5-CLASS MASALASI
// {
//   class Salary {
//     constructor(to, amount, type, status) {
//       this.salaryTo = to;
//       this.salaryAmount = amount;
//       this.salaryType = type;
//       this.salaryStatus = status;
//     }
//     getInfo() {
//       return `This salary to ${this.salaryTo}, Amount: ${this.salaryAmount}, Type: ${this.salaryType}, Status: ${this.salaryStatus}`;
//     }
//   }
//   let salary = new Salary("Mike", "200", "USD", "true");
//   console.log(salary.getInfo());
// }
//6-CLASS MASALASI
{
  class Organization {
    constructor(name, founder, adderss, employeeCount) {
      this.name = name;
      this.founder = founder;
      this.adderss = adderss;
      this.employeeCount = employeeCount;
    }
    getInfo() {
      return `Bu oquv markazning nomi ${this.name}, Asoschisi: ${this.founder}, Adderss: ${this.adderss}, oquv markazning hodimlari tahminan ${this.employeeCount} taga teng`;
    }
  }
  let organization = new Organization(
    "Najot Talim",
    "Temurbek Adhamov",
    "Najot Ta'lim Chilonzor Filial, 76P3+6G4, 100",
    "400"
  );
  console.log(organization.getInfo());
}

interface Person {
  name: string;
  age: number;
  email: string;
  address: string;
  isHuman: boolean;
}

interface Student extends Person {
  studentId: number;
  course: string;
  gpa: number;
  yearOfStudy: number;
}

interface Teacher extends Person {
  employeeId: number;
  subjectSpecialization: string;
  yearsOfExperience: number;
}

// Function to output details of either a Student or Teacher
function createPerson(person: Student | Teacher) {
  let output = `
    Name: ${person.name},
    Age: ${person.age},
    Email: ${person.email},
    Address: ${person.address}
  `;

  // Check if the person is a Student (has studentId)
  if ("studentId" in person) {
    const student = person as Student; // Type assertion
    output += `
    Student ID: ${student.studentId},
    Course: ${student.course},
    GPA: ${student.gpa},
    Year of Study: ${student.yearOfStudy}
    `;
  }

  // Check if the person is a Teacher (has employeeId)
  if ("employeeId" in person) {
    const teacher = person as Teacher; // Type assertion
    output += `
    Employee ID: ${teacher.employeeId},
    Subject Specialization: ${teacher.subjectSpecialization},
    Years of Experience: ${teacher.yearsOfExperience}
    `;
  }

  console.log(output);
}

// Create a Student object (anime character)
const student: Student = {
  name: "Naruto Uzumaki",
  address: "Konoha, Hidden Leaf Village",
  age: 16,
  email: "naruto.uzumaki@hokage.com",
  isHuman: true,
  studentId: 1001,
  course: "Ninjutsu",
  gpa: 4.0,
  yearOfStudy: 2,
};

// Create a Teacher object (anime character)
const teacher: Teacher = {
  name: "Kakashi Hatake",
  address: "Konoha, Hidden Leaf Village",
  age: 30,
  email: "kakashi.hatake@hokage.com",
  isHuman: true,
  employeeId: 2001,
  subjectSpecialization: "Ninjutsu and Leadership",
  yearsOfExperience: 15,
};

// Call the function with both Student and Teacher
createPerson(student);
createPerson(teacher);

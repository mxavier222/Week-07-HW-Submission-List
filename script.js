
const students = [
  "Samira",
  "Sepideh",
  "Evelina",
  "Maglin",
  "Anastasia",
  "Sulakshana",
  "Janaki",
  "Irmak",
  "Christy",
  "Chanakarn",
  "Narges",
  "Yana",
  "Seda",
  "Vanitha",
  "Afrin",
  "Lucia",
  "Hajra",
];

const teachers = ["Mack", "Kumaran", "Lukáš", "Tim"];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

  const assignments = students.map((student, index) => ({
    student,
    teacher: teachers[index % teachers.length]
  }));

  let display = "Student                 Teacher\n";
  display += "----------------------------------\n";

  assignments.forEach(({ student, teacher }) => {
    display += student.padEnd(25) + teacher + "\n";
  });

  document.getElementById("output").textContent = display;


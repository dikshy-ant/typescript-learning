interface Assignment {
  id: string;
  title: string;
  description?: string;
  grade: string;
}

const assignmentEvaluation = (assignment: Assignment) => {
  console.log(
    `The assignment ${assignment.id} titled "${assignment.title}" has been graded: ${assignment.grade}`,
  );

  let assignmentDesc = assignment.description
    ? assignment.description
    : "No description provided.";
  console.log(`Description: ${assignmentDesc}`);
};

assignmentEvaluation({
  id: "A1",
  title: "TypeScript Basics",
  grade: "A",
});

assignmentEvaluation({
  id: "A2",
  title: "Advanced TypeScript",
  description: "Covers advanced topics in TypeScript.",
  grade: "B+",
});

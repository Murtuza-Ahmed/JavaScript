const myWork = [];
for (let i = 1; i <= 10; i++) {
  const lessonName = `Lesson ${i}`;
  const isRunningThisYear = i % 2 === 0 ? true : false;
  const tempLesson = {
    name: lessonName,
    status: isRunningThisYear,
  };
  myWork.push(tempLesson);
}
console.log(myWork);

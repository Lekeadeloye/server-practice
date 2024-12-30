import express from 'express';

const coursesRouter = express.Router();

const courses = [
  {
    subject: 'Maths',
    duration: 2,
  },
  {
    subject: 'Science',
    duration: 3,
  },
  {
    subject: 'Chemistry',
    duration: 4,
  },
  {
    subject: 'Biololgy',
    duration: 3,
  },
  {
    subject: 'Software Engineering',
    duration: 3,
  },
];

coursesRouter.get('/', (req, res, next) => {
  res.status(200).send(courses)
})

// interface Course {
//   subject: string,
//   duration: number,
// }

coursesRouter.get('/:course', (req, res, next) => {
  const course = req.params.course;

  console.log(course)

  res.send(courses)

  // const isCourse = courses.find(el => el.subject === course)

  // if (isCourse) {
  //   res.send(course);
  // } else {
  //   res.status(404).send('We do not provide this course at out establishment')
  // }
})

export default coursesRouter
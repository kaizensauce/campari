import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const pomodoros = [
    {
      "_id": "579d77a70ff2c1a833915b31",
      "key": "1",
      "startTime": "2016-07-31T03:59:35.872Z",
      "description": "do some stuff",
      "__v": 0
    },
       {
      "_id": "579d77a70ff2c1a833915b32",
      "key": "2",
      "startTime": "2016-07-31T03:59:35.872Z",
      "description": "do some more stuff",
      "__v": 0
    }
];

class PomodoroService {
  static getAllPomodoros() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], pomodoros));
      }, delay);
    });
  }

//   static saveCourse(course) {
//     course = Object.assign({}, course); // to avoid manipulating object passed in.
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Simulate server-side validation
//         const minCourseTitleLength = 1;
//         if (course.title.length < minCourseTitleLength) {
//           reject(`Title must be at least ${minCourseTitleLength} characters.`);
//         }

//         if (course.id) {
//           const existingCourseIndex = courses.findIndex(a => a.id == course.id);
//           courses.splice(existingCourseIndex, 1, course);
//         } else {
//           //Just simulating creation here.
//           //The server would generate ids and watchHref's for new courses in a real app.
//           //Cloning so copy returned is passed by value rather than by reference.
//           course.id = generateId(course);
//           course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
//           courses.push(course);
//         }

//         resolve(course);
//       }, delay);
//     });
//   }

//   static deleteCourse(courseId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const indexOfCourseToDelete = courses.findIndex(course => {
//           course.courseId == courseId;
//         });
//         courses.splice(indexOfCourseToDelete, 1);
//         resolve();
//       }, delay);
//     });
//   }
}

export default PomodoroService;
// -------- DATA --------
const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// -------- LOGIC --------
const getPublishedCourses = (courses) =>
  courses.filter(course => course.published);

const sortCoursesByPriceDesc = (courses) =>
  [...courses].sort((a, b) => b.price - a.price);

const getCourseSummary = (courses) =>
  courses.map(({ title, price }) => ({ title, price }));

const getTotalPublishedValue = (courses) =>
  courses
    .filter(course => course.published)
    .reduce((sum, course) => sum + course.price, 0);

const addCourse = (courses, newCourse) =>
  [...courses, newCourse];

// -------- EXECUTION --------
console.log("Published Courses:", getPublishedCourses(courses));
console.log("Sorted Courses:", sortCoursesByPriceDesc(courses));
console.log("Course Summary:", getCourseSummary(courses));
console.log("Total Published Value:", getTotalPublishedValue(courses));
console.log(
  "Add Course:",
  addCourse(courses, {
    id: 104,
    title: "MongoDB",
    price: 899,
    published: true
  })
);

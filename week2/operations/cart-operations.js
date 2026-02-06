// -------- DATA --------
const courses = [
  { id: 101, title: "JavaScript", price: 999 },
  { id: 103, title: "Node", price: 1299 }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// -------- LOGIC --------
const mergeCartWithCourses = (cart, courses) =>
  cart.map(item => {
    const course = courses.find(c => c.id === item.courseId);
    return { ...course, qty: item.qty };
  });

const getCartTotal = (cart, courses) =>
  mergeCartWithCourses(cart, courses).reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

const increaseQuantity = (cart, courseId) =>
  cart.map(item =>
    item.courseId === courseId
      ? { ...item, qty: item.qty + 1 }
      : item
  );

const removeFromCart = (cart, courseId) =>
  cart.filter(item => item.courseId !== courseId);

const areAllPaidCourses = (cart, courses) =>
  cart.every(item => {
    const course = courses.find(c => c.id === item.courseId);
    return course.price > 0;
  });

// -------- EXECUTION --------
console.log("Cart With Details:", mergeCartWithCourses(cart, courses));
console.log("Cart Total:", getCartTotal(cart, courses));
console.log("Increase Qty:", increaseQuantity(cart, 101));
console.log("Remove Course:", removeFromCart(cart, 101));
console.log("All Paid Courses:", areAllPaidCourses(cart, courses));

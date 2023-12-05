
## Documentation

live link:https://illegal-treatment.surge.sh/

[Documentation](https://linktodocumentation)

•Thre Features of This Project:

1.Course catalog:The system provides a course catalog that list all available course.This catalog includes course names,descriptions and other relevant detais.

2.Credit Limits:The system enforces credit limits to ensure that students do not purchase more courses than allowed by their author policies.

3.Toast:The system will show toast when a student select one course more than one time or cross their credit limits.



•State management in this assignment project:

At first, I initialize the state variables,When component is first rendered, these variables are set to their initial values.Then,to update the variables,we can use the corresponding update functions (setSelectCourses, setTotalPrice, setTotalCreditOurs, setRemainingCreditOurs) provided by the useState hook.These functions accept new values and trigger a re-render of handleSelect function with the updated state.Then I handle user interaction based by some condition(such as limite credit hours or course not select more than one).Then I use these state in UI .By managing these state variables and their updates within this project component, I use dynamic and responsive user interfaces in this project.

// 1.3
// const App = () => {
//   const course = "Half Stack application development";
//   const part1 = {
//     name: "Fundamentals of React",
//     exercises: 10,
//   };
//   const part2 = {
//     name: "Using props to pass data",
//     exercises: 7,
//   };
//   const part3 = {
//     name: "State of a component",
//     exercises: 14,
//   };

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1.name} {part1.exercises}
//       </p>
//       <p>
//         {" "}
//         {part2.name} {part2.exercises}
//       </p>
//       <p>
//         {part3.name} {part3.exercises}
//       </p>
//     </div>
//   );
// };

// 1.4
// const App = () => {
//   const course = "Half Stack application development";
//   const parts = [
//     // const part1 = {
//     {
//       name: "Fundamentals of React",
//       exercises: 10,
//     },
//     // const part2 = {
//     {
//       name: "Using props to pass data",
//       exercises: 7,
//     },
//     // const part3 = {
//     {
//       name: "State of a component",
//       exercises: 14,
//     },
//   ];

//   return (
//     <div>
//       <h1> {course} </h1>
//       <p>
//         {parts[0].name}={parts[0].exercises}
//       </p>
//       <p>
//         {parts[1].name}={parts[1].exercises}
//       </p>
//       <p>
//         {parts[2].name}={parts[2].exercises}
//       </p>
//       <p>
//         Total...{parts[0].exercises + parts[1].exercises + parts[2].exercises}
//       </p>
//     </div>
//   );
// };

// 1.5
// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };
//   1.5
//   return (
//     <div>
//       <h1> {course.name} </h1>
//       <p>
//         {course.parts[0].name}={course.parts[0].exercises}
//       </p>
//       <p>
//         {course.parts[1].name}={course.parts[1].exercises}
//       </p>
//       <p>
//         {course.parts[2].name}={course.parts[2].exercises}
//       </p>
//       <p>
//         Total...
//         {course.parts[0].exercises +
//           course.parts[1].exercises +
//           course.parts[2].exercises}
//       </p>
//     </div>
//   );
// };

export default App;

//original stuff-
// import React from "react";

// const App = () => {
//   const course = "Half Stack application development";
//   const part1 = "Fundamentals of React";
//   const exercises1 = 10;
//   const part2 = "Using props to pass data";
//   const exercises2 = 7;
//   const part3 = "State of a component";
//   const exercises3 = 14;

//   return (
//     <div>
//       <Header course={course} />
//       <Content
//         part1={part1}
//         part2={part2}
//         part3={part3}
//         exercises1={exercises1}
//         exercises2={exercises2}
//         exercises3={exercises3}
//       />

//       <Total exercises={exercises1 + exercises2 + exercises3} />
//     </div>
//   );
// };
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   );
// };
// const Content = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part1} = {props.exercises1}
//       </p>
//       <p>
//         {props.part2} = {props.exercises2}
//       </p>
//       <p>
//         {props.part3} = {props.exercises3}
//       </p>
//     </div>
//   );
// };

// const Total = (props) => {
//   return (
//     <div>
//       <p>Total {props.exercises}</p>
//     </div>
//   );
//

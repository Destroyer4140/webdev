import React from "react";
import ReactDOM from "react-dom/client"


// React Element
const heading = React.createElement('h1', {id: "Header"}, "Namaste React 🚀"); // This is an Object. After rendering it's become html element.

// JSX - HTML like or XML like syntax, it's not html in js. also know as react element
const jsxHeading = (<h1 id="header">Namaste React using JSX 🚀</h1>) // JS engine don't understand jsx. SO parcel's babel component transpile these syntax to pure JS. and thta is how js engine understand.

// React component
/**
 * 1). Class based componenet => old way, very less used
 * 2). Functional Component => current new way to write component (Just normal js function)
 */

const Title = () => (
  <h1 id="header">Namaste React using JSX 123🚀</h1>
);

// Functioncal component which returns react element
const HeadingComponent = () => {
  return (
    <div id ="heading">
      {jsxHeading}
      {Title()}
      <h2 className="shubham">Namaste React Functional Component.</h2>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);

# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

As I understand it, using DOM on an app with multiple points of data entry and reception, will begin to cause delays in speed and data needs to be stored and received in a way that will not render instantaneously and can become challenging to maintain if there are hundreds of data points . By using React and It's UI library, components can handle data and it can be utilized instantaneously with spaces that handle response to data and changes to data, creating a seamless UI.  

1. What does it mean to think in react?
When using React you must think about the UI in terms of components and props as well a state data. Think about the data that needs to rendered. Building components that allow your code to remain DRY.
1. Describe state.

State is data specific to a component, you can set your component to 'setState' or update through the operations you classify in your component.
1. Describe props.
Props are dependent on parent functions. Props are like a place holder for data that will be specified in your parent component.
A function can be created in a separate function, that uses data that needs to be received from the parent. Using props as  place holder you are able to use the function in regards to multiple sets of data.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is data or an operation that effects things outside of it's own scope; We can control and assign those side effects by using UseEffect/ Effect Hook which specifies that a component needs to utilize a side effect in some way

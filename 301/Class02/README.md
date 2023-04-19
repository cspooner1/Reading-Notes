# Reading

## React lifecycle
Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?
>Render

What is the very first thing to happen in the lifecycle of React?
>Mounting

Put the following things in the order that they happen: componentDidMount, render, constructor, componentWillUnmount, React Updates
>constructor, render, componentDidMount, React Updates, componentWillMount

What does componentDidMount do?
> This method is invoked immediately after a component is mounted. If you need to load anything using a network request or initialize the DOM, it should go here. This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().

## React State vs Props
What types of things can you pass in the props?
> A component in react that you want to render

What is the big difference between props and state?
>Props you pass into the component and state is handled inside of that compononet and props are handled outside of the component.

When do we re-render our application?
> When you change the state inside your application.

What are some examples of things that we could store in state?
> What the user is updating the value to.

I want to know more about what I can store in state.
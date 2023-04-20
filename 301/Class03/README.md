# Reading

## React Docs - Lists and keys
What does .map() return?
>A new array of elements.

If I want to loop through an array and display each value in JSX, how do I do that in React?
> array.map(x => {})

Each list item needs a unique Key.

What is the purpose of a key?
>Keys help React identify which items have changed, are added, or are removed.

## The Spread Operator
What is the spread operator?
> The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments.


List 4 things that the spread operator can do.
>Copying an array, Concatenating or combining arrays, Using Math functions, Using an array as arguments

Give an example of using the spread operator to combine two arrays.
> [...["😋😛😜🤪😝"]] // Array [ "😋😛😜🤪😝" ]
[..."🙂🙃😉😊😇🥰😍🤩!"] // Array(9) [ "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "!" ]

const hello = {hello: "😋😛😜🤪😝"}
const world = {world: "🙂🙃😉😊😇🥰😍🤩!"}

const helloWorld = {...hello,...world}
console.log(helloWorld) // Object { hello: "😋😛😜🤪😝", world: "🙂🙃😉😊😇🥰😍🤩!" }

Give an example of using the spread operator to add a new item to an array.
> const fewFruit = ['🍏','🍊','🍌']
const fewMoreFruit = ['🍉', '🍍', ...fewFruit]
console.log(fewMoreFruit) //  Array(5) [ "🍉", "🍍", "🍏", "🍊", "🍌" ]

Give an example of using the spread operator to combine two objects into one.
> const objectOne = {hello: "🤪"}
const objectTwo = {world: "🐻"}
const objectThree = {...objectOne, ...objectTwo, laugh: "😂"}
console.log(objectThree) // Object { hello: "🤪", world: "🐻", laugh: "😂" }
const objectFour = {...objectOne, ...objectTwo, laugh: () => {console.log("😂".repeat(5))}}
objectFour.laugh() // 😂😂😂😂😂

## How to Pass Functions Between Components
In the video, what is the first step that the developer does to pass functions between components?
> Creat a function where the state is that when you click on the button inside the object to change the value of the state up.

In your own words, what does the increment function do?
> By using map it allows the array to be passed back into the ppl variable but with an updated count.

How can you pass a method from a parent component into a child component?
> By calling the same method that exists up in the parent.

How does the child component invoke a method that was passed to it from a parent component?
> It uses the same function you used for your parent component.

## I want to know more about how the spread operator works.
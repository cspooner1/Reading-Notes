# Reading

## HTML

Why are forms so important in web development?
> Web forms are one of the main points of interaction between a user and a website or application. Forms allow users to enter data, which is generally sent to a web server for processing and storage.


When designing a form, what are some key things to keep in mind when it comes to user experience?
> Before starting to code, it's always better to step back and take the time to think about your form. Designing a quick mockup will help you to define the right set of data you want to ask your user to enter. From a user experience (UX) point of view, it's important to remember that the bigger your form, the more you risk frustrating people and losing users. Keep it simple and stay focused: ask only for the data you absolutely need. Designing forms is an important step when you are building a site or application. It's beyond the scope of this article to cover the user experience of forms


List 5 form elements and explain their importance.
> Form- This element formally defines a form. It's a container element like a <section> or <footer> element, but specifically for containing forms; it also supports some specific attributes to configure the way the form behaves.
Label- The <label> element is the formal way to define a label for an HTML form widget. This is the most important element if you want to build accessible forms.
Input- <input> elements of type email are used to let the user enter and edit an email address, or, if the multiple attribute is specified, a list of email addresses.
Textarea- The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
Button- The markup for our form is almost complete; we just need to add a button to allow the user to send, or "submit", their data once they have filled out the form.

## JS
How would you describe events to a non-technical friend?
> Events are things that happen in the system you are programming.

When using the addEventListener() method, what 2 arguments will you need to provide?
> Adding a function or object that implements EventListener.

Describe the event object. Why is the target within the event object useful?
> It is automatically passed to event handlers to provide extra features and information. The target property of the event object is always a reference to the element the event occurred upon.

What is the difference between event bubbling and event capturing?
> Event capturing is like event bubbling but the order is reversed: so instead of the event firing first on the innermost element targeted, and then on successively less nested elements, the event fires first on the least nested element, and then on successively more nested elements, until the target is reached.
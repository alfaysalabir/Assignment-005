<div align="center">

# 🧱 Dev Stack

### Build Your Ideal Development Stack

A simple, responsive website to explore dev technologies and build your own personal tech stack. 🚀

</div>

---

## 📖 About

**Dev Stack** is a website where you can browse popular frontend, backend,
database, and DevOps technologies. Each one is shown as a card with its
logo, category, rating, and difficulty level. Found something you like?
Click **Add to Stack** and it shows up in your personal "Your Stack"
panel, where you can remove it anytime.

I built this project as a beginner while learning React, and it helped me
practice components, props, state, and working with JSON data. 💻

## ⚙️ Technology Used

- ⚛️ **React.js**
- 🎨 **Tailwind CSS**
- 🔔 **React-Toastify** (for alerts)
- 📦 **JSON** (technology data)
- ⚡ **Vite** (build tool)

## ✨ 3 Features

1. 🧩 **Add / Remove from Stack** — add any technology to your stack, and
   remove one item or clear the whole stack with one click.
2. 🚫 **No Duplicates** — trying to add the same technology twice shows a
   warning alert instead of adding it again.
3. 📱 **Fully Responsive** — looks great on mobile, tablet, and desktop,
   with a hamburger menu on small screens.

---

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX lets us write HTML-like code inside our JavaScript files. It's used
because it's much easier to see what the UI looks like this way, instead
of writing plain JavaScript function calls for every element.

**2. What is the difference between props and state?**
Props are data passed **into** a component from its parent, and the
component can't change them. State is data a component keeps and manages
**itself**, and it can change over time, like when a user clicks a
button.

**3. What does the `useState` hook do, and where did you use it in this
project?**
`useState` lets a component remember a value and re-render whenever that
value changes. I used it to store the technology list, the user's stack,
and the loading state, and also inside the navbar for the mobile menu.

**4. What does the `useEffect` hook do, and why did you need it to load
the JSON data?**
`useEffect` runs code after the component renders, like fetching data.
I needed it because fetching the JSON file is a side effect — it
shouldn't happen during rendering — so I used `useEffect` to load the
data once when the app first opens.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` helps React know which item is which. This way, when the list
changes, React only updates the item that actually changed instead of
re-rendering the whole list.

**6. What is conditional rendering? Show one place you used it (example:
the empty stack message).**
Conditional rendering means showing different UI based on a condition. I
used it for the empty stack message:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <ul>{/* stack items */}</ul>
)}
```

**7. How do you pass data from a parent component to a child component,
and how does a child send something back to the parent?**
A parent passes data down to a child using **props**, like
`<TechCard tech={tech} />`. For a child to send data back up, the parent
passes a **function** as a prop, and the child calls it. I used this for
the "Add to Stack" button — clicking it calls a function passed down from
the parent, which then updates the stack.

---

<div align="center">

Made with ❤️ while learning React

</div>
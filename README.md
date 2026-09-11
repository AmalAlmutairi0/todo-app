# 📝 To-Do List Application

A clean, responsive, and lightweight To-Do List application built as a practical web development project to implement core DOM manipulation techniques and event handling using Vanilla JavaScript, HTML5, and CSS3.

---

## 🌟 Key Features

* **Task Management:** Add new tasks seamlessly using the UI button or the `Enter` key.
* **Task Deletion:** Remove tasks instantly from the list.
* **Priority Toggling:** Mark urgent tasks with a star icon that updates item styling and priority status.
* **Input Validation:** Prevents empty task creation using string sanitization.
* **Micro-interactions:** Smooth CSS hover states and card animation feedback.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Flexbox, CSS Animations, Custom Pastel Palette), Vanilla JavaScript (ES6+).
* **Typography:** Google Fonts (`Poppins` & `Tajawal`).

---

## 💡 Key Web Concepts Practiced

* **Event Delegation Pattern:** Attached a single event listener to the parent list (`.task-list`) to efficiently control dynamically generated child actions (delete and priority toggle).
* **Dynamic DOM Manipulation:** Generated dynamic element nodes (`<li>`) using template literals and managed element lifecycles (`appendChild`, `remove`, `classList.toggle`).
* **Keyboard Accessibility:** Handled `keypress` events for better user experience.

---

## 📂 Project Architecture

```text
├── index.html    # Structural HTML markup
├── style.css     # Styling, layout, and keyframe animations
├── main.js       # Core application logic & event handlers
└── README.md     # Project documentation


💻 How to Run
1. Clone or download the repository files:
git clone [https://github.com/AmalAlmutairi0/todo-list-app.git](https://github.com/AmalAlmutairi0/todo-list-app.git)

2. Open index.html directly in any standard web browser.

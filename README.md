# ContactPage: A Modern React-Based Contact Manager

ContactPage is a clean, responsive, and modern contact management web app built with React, Context API, and Tailwind CSS.
It provides an intuitive interface to create, view, update, search, and delete contacts — all in real-time.

[**Live Demo**](https://contact-page-gamma-two.vercel.app/) 

![ContactPage App Screenshot](/public/Screenshot.png)

## Features

* **Full CRUD Support:** Add, edit, view, and delete contacts easily.

* **Global State Management:** Uses React's Context API (`ContactsContext`) to manage all contact data in a single, centralized store.

* **Real-Time Search:** Instantly filter contacts by name, email, or phone number.

* **Clean UI/UX:**

  * Responsive, mobile-first layout.

  * Reusable `Modal` and `ConfirmDialog` components.

  * Subtle animations for smoother animations.

* **Reusable Components:** Includes modular components like `ContactCard`, `SearchBar`, and `ContactForm`, and more.

* **User-Friendly Empty State:** Displays a welcoming message when no contacts exist.

## Tech Stack & Libraries

This following tech stack has been used in this project:

* [**React**](https://react.dev/): Frontend framework for building the user interface.

* [**React Context API**](https://react.dev/learn/passing-data-deeply-with-context): Global state management for contacts. 

* [**Tailwind CSS**](https://tailwindcss.com/):Utility-first CSS framework for responsive styling.

* [**Lucide React**](https://lucide.dev/): Lightweight SVG icons.

* [**tailwindcss-animate**](https://github.com/jamiebuilds/tailwindcss-animate): Provides simple animation utilities.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

You will need [Node.js](https://nodejs.org/) (v18 or later is recommended) and `npm` (comes with Node.js) or `yarn` installed on your computer.

### Installation & Setup

1. **Clone the repository:**


```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```


2. **Install dependencies:**
(Using npm)


```
npm install
```


(Or using yarn)


```
yarn install
```


3. **Run the development server:**
(This project is likely set up with Vite)


```
npm run dev
```


If it's a Create React App setup:


```
npm start
```


4. Open [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) (or the URL shown in your terminal).

## Project Structure

The project follows a logical component-based structure:


```
src/
├── components/
│   ├── Home/
│   │   ├── MainPage.jsx       # Main layout and logic container
│   │   ├── ContactList.jsx    # Displays list of contacts
│   │   ├── ContactCard.jsx    # Individual contact display
│   │   ├── ContactForm.jsx    # Add/Edit form
│   │   ├── SearchBar.jsx      # Search functionality
│   │   └── ConfirmDialog.jsx  # Delete confirmation modal
│   ├── Modal.jsx            # Reusable modal wrapper
│   └── Navbar.jsx           # Top navigation bar
├── context/
│   └── ContactsContext.jsx  # Handles all CRUD logic and global state
├── App.jsx                  # Root component (wraps ContactsProvider)
└── main.jsx                 # Entry point rendering App
```

## Design Choices & Assumptions

* **Context-Based State Management-** All contact logic (add, edit, delete) is handled inside`ContactsContext.jsx` using the `useContacts()` hook.
This keeps UI components clean and focused purely on rendering.
* **Data Persistence-** Currently, contact data is stored in-memory.
For production, you can extend `ContactsContext` to use localStorage or integrate a backend API..

* **Reusable Components –** Common UI elements `Modal`, `SearchBar`, and `ConfirmDialog` are independent and reusable, promoting scalability.

* **Tailwind Styling –** All design and animations are built with Tailwind CSS for simplicity, speed, and maintainability.

* **Dynamic Avatars –** `ContactCard.jsx` auto-generates avatars using user initials and gradient backgrounds — no image uploads needed.

## Author

Developed by: [Sahil Kumar Gupta]
GitHub: https://github.com/sahilgupta630
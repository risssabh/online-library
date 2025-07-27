
## 📚 Online Book Library

> *“Where Stillness Meets Stories”*

A modern, responsive React application for browsing, searching, and adding books across genres like Fiction, Fantasy, Sci-Fi, Anime/Manga, and more — complete with Redux state management and beautiful Gen Z styling.

---

### 🚀 Features

* 📌 Home Page with book categories and popular books
* 🔍 Browse books by category or search by title/author
* 📘 View detailed book info (title, author, description, rating)
* ➕ Add your own books using a form with validation
* 🧠 Redux for book state management
* ❌ Custom 404 Page for undefined routes
* 🎨 Stylish UI using CSS Grid, Flexbox, pastel emoji icons, and Gen Z–inspired theme

---

### 🛠️ Technologies Used

* React
* React Router DOM
* Redux Toolkit
* React Redux
* Vanilla CSS (Responsive, Grid/Flexbox, Animations)
* Emoji icons (📖✨)

---

### 📁 Folder Structure

```
online-library/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── BookCard.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── BrowseBooks.js
│   │   ├── BookDetails.js
│   │   ├── AddBook.js
│   │   ├── NotFound.js
│   ├── redux/
│   │   ├── store.js
│   │   ├── booksSlice.js
│   ├── App.js
│   ├── index.js
│   └── main.css
├── README.md
└── package.json
```

---

### 🧪 Getting Started


#### 1. ⬇️ Clone the Repo

```bash
git clone [https://github.com/your-username/online-library.git]
cd online-library
```

#### 2. 🔨 Install Dependencies

```bash
npm install
# OR
yarn install
```

---

### ▶️ Run the App

```bash
npm start
# OR
yarn start
```

The app will open in your browser at:

```
http://localhost:3000
```

---

### 🧩 Available Routes

| Route              | Description                         |
| ------------------ | ----------------------------------- |
| `/`                | Home page with welcome + categories |
| `/books/:category` | Browse books by category            |
| `/book/:id`        | Book details                        |
| `/add-book`        | Add a new book                      |
| `/does-not-exist`  | Custom 404 page                     |

---

### 🧠 Redux Usage

* `booksSlice.js` holds book data
* All books (default + added) live in the Redux state
* Use `useSelector` to access, and `useDispatch` to add books

---

### 💡 Notes

* Rating input must be between **1 and 5**
* Search bar shows 404 if no book matches


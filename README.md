# React Form with Modal and Validation

A simple React project where users can enter their details through a form displayed inside a modal. The form collects **username, email, phone number, and date**, and performs basic validation before submission.

---

## 🚀 Features

- Modal popup for form input
- Form fields:
  - Username
  - Email
  - Phone Number
  - Date

- Input validation
- Close modal by clicking outside
- Reusable components
- TypeScript support
- CSS Modules for styling

---

## 🛠️ Tech Stack

- React
- TypeScript
- ReactDOM Portal (for Modal)
- CSS Modules

---

## 📂 Project Structure

```
src
│
├── components
│   ├── Modal
│   │   ├── Modal.tsx
│   │   └── Modal.module.css
│   │
│   ├── Button
│   │   ├── Button.tsx
│   │   └── Button.module.css
│
├── utils
│   └── validation.ts
│
├── App.tsx
└── index.tsx
```

---

## 📋 Form Fields

The form collects the following information:

| Field    | Validation                          |
| -------- | ----------------------------------- |
| Username | Required                            |
| Email    | Must be a valid email               |
| Phone    | Must be a valid Indian phone number |
| Date     | Cannot be a future date             |

---

## ✅ Validation Rules

### Username

- Cannot be empty

### Email

- Must follow valid email format

Example:

```
example@email.com
```

### Phone Number

- Must be a **10 digit Indian phone number**
- Must start with **6, 7, 8, or 9**

Example:

```
9876543210
```

### Date

- Future dates are not allowed

---

## 🧩 Modal Behavior

The modal is implemented using **React Portal**.

Features:

- Opens on button click
- Closes when clicking outside
- Renders above the main application

---

## ▶️ How to Run the Project

### 1. Clone the repository

```
git clone https://github.com/your-username/react-form-modal.git
```

### 2. Navigate to project folder

```
cd react-form-modal
```

### 3. Install dependencies

```
npm install
```

### 4. Start the development server

```
npm run dev
```

---

## 📸 Demo Flow

1. Click **Open Form**
2. Modal appears
3. Enter user details
4. Form validates input
5. Submit form

---

## 🎯 Learning Objectives

This project demonstrates:

- Creating reusable React components
- Handling forms in React
- Basic validation techniques
- Using React Portal for modals
- Managing state with `useState`
- TypeScript with React components

---

## 📄 License

This project is open-source and available for learning purposes.

## Toast App
This App creates customizable notifications for web applications.

### Features:
* Creates custom toast messages with varying types
* Animations for toast appearance and disappearance
* Easy deletion of individual or all toasts

##### Inspired by the Joy of React course, the Toast app demonstrates React component structure, context management, custom hooks, and animation using Framer Motion.

### Technologies:
* React
* Context for state management
* Framer Motion for animations
* Custom hook (useEscapeKey) to detect Esc key presses and delete all toast

### Structure:
* App (Parent Component)
* ToastMaker (Form for message input and type selection)
* ToastTray (Container for toasts)
* Toast this is the notification created (child of the ToastTray)

### Installation and Setup
* Download repo
#### Install dependencies:

* cd toast-app
* npm install

#### Run development server:
* npm run dev

#### Live demo: https://toastmaker.netlify.app/

### __React Product Dashboard App – Setup & Explanation__


 This guide explains how to set up a React application using Vite, configure Tailwind CSS, clone the project from GitHub, and understand the complete structure and flow of the Product Dashboard application.


### __1. Clone GitHub Repository__



```
 git clone https://github.com/ubaid0409/React-Components-Library.git


 cd PRODUCT-DASHBOARD
```

---


### __2. Install Dependencies__

Make sure __Node.js (LTS version)__ is installed on your system.

Check Node and npm:


```
node -v
npm -v
```


Install project dependencies:


```
npm install


---
```



### __3. Run the Application__

Start the Vite development server:


```
npm run dev

```



* This will start the React app using Vite. \

* Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser. \



---


### __4. Create React App Using Vite (From Scratch)__

If you want to create this project from scratch:


```
npm create vite@latest product-dashboard
```


Select:



* Framework: __React \
__
* Variant: __JavaScript \
__

Then run:


```
cd product-dashboard
npm install
npm run dev


---
```



### __5. Set Up Tailwind CSS__


#### __Install Tailwind CSS__


```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


---
```



#### __Configure <code>tailwind.config.js</code></strong>


```
content: ["./index.html", "./src/**/*.{js,jsx}"],


---
```



#### __Add Tailwind Directives to <code>index.css</code></strong>


```
@tailwind base;
@tailwind components;
@tailwind utilities;


---
```



### __6. Project Folder Structure__


```
src/
 ├── components/
 │   ├── Button.jsx
 │   ├── Card.jsx
 │   └── Modal.jsx
 └── pages/
     └── Dashboard.jsx


---
```



### __7. Application Overview__

The Product Dashboard allows users to:



* Add a product using a modal \

* View products in card format \

* Delete products from the list \


The application follows a __component-based architecture__ where logic is handled in the parent component and UI is handled by reusable child components.


---


### __8. Dashboard.jsx (Main Component)__

This is the __parent component__ of the application.


#### __Responsibilities:__



* Manages application state \

* Controls modal open and close \

* Adds and deletes products \

* Passes data to child components using props \



#### __State Variables:__



* `products` – Stores product list \

* `isOpen` – Controls modal visibility \

* `name` – Product name input \

* `price` – Product price input \


The modal opens when `isOpen` is `true` and closes when `isOpen` is `false`.


---


### __9. Button.jsx (Reusable Button)__

A reusable button component used throughout the application.


#### __Props:__



* `children` – Button text \

* `variant` – Button style (primary, danger, secondary) \

* `onClick` – Function executed on click \


This allows consistent button styling across the app.


---


### __10. Card.jsx (Product Card)__

Used to display product details in a card layout.


#### __Props:__



* `title` – Product name \

* `price` – Product price \

* `children` – Product description \

* `footer` – Action button (Delete) \


This component focuses only on UI rendering.


---


### __11. Modal.jsx (Modal Component)__

Handles the modal popup behavior.


#### __Key Behavior:__



* Renders only when `isOpen` is `true \
`
* Returns `null` when `isOpen` is `false \
`


#### __Props:__



* `isOpen` – Controls modal visibility \

* `onClose` – Function to close modal \

* `title` – Modal heading \

* `children` – Modal content (form inputs) \


The modal is fully controlled by `Dashboard.jsx`.


---


### __12. Application Flow__



1. User clicks __Add Product \
__
2. Modal opens \

3. User enters product name and price \

4. User clicks __Save \
__
5. Product is added to state \

6. Modal closes \

7. Product appears as a card \

8. User deletes product if needed \



---


### __13. Concepts Covered__



* React `useState \
`
* Props and children \

* Conditional rendering \

* Reusable components \

* Component-based architecture \

* Vite + React setup \

* Tailwind CSS integration \



---


### __Author__

__M Ubaid Hashmi__

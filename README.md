# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

For screenshots please refer to the live website provided on the cotents below.

### Links

- Solution URL: [https://github.com/jowix311/multi-step-form](https://github.com/jowix311/multi-step-form)
- Live Site URL: [https://multi-step-form-jowix311.netlify.app/](https://multi-step-form-jowix311.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind
- Flexbox
- CSS Grid
- Mobile-first workflow
- React
- React Hook Form
- React Router DOM
- GIT
- Netlify - to host the web app

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

- Used Tailwind style create Grid, custom Checkbox, custom Radio
  - Learned to use arbitrary to specify 1fr and auto
    ```html
    <div className="grid grid-cols-[1fr_auto]"></div>
    ```
    - Learned to apply two row span ona single column e.g., row-span-2
    ```html
      <div className="row-span-2 flex items-center md:row-span-2>
    ```
- Used React Hook Form library for creating form and validation
  - Leaned to use it with reusable React components for inputs, checkboxes and radio fields. (See input-field, input-checkbox-custom, and radio-custom folders)
- Used React Router DOM library for creating routes and apply Singe Page Application
  - Learned to identify current by route and apply activate state styles on step indicators. This is done bu using useLocation();

    ```jsx
    const location = useLocation();

    <span
      className={`font-ubuntu font-medium text-marineBlue ${
        stepName === location.pathname ? "text-marineBlue" : "text-white"
      }`}
    >
      {stepNumber}
    </span>;
    ```
  - Learned how to redirect to other page like using navigate
    ```jsx
    const navigate = useNavigate();
    

    navigate(RoutePath.STEP_3);
    ```
  - Learned to add simple protected routes by forcing users to step 1 if they have not accomplished it.

    ```jsx
    const navigate = useNavigate();
    const state = useAppSelector((state) => state.yourInfo);

    useEffect(() => {
      if (!state.isInfoComplete) {
        navigate(RoutePath.STEP_1);
      }
    }, [navigate, state]);
    ```

- Learned Redux Toolkit to handle the state of the "forms", accessing the states between pages.

  - Learned to setup Redux Toolkit
  - Access store, dispatch, create update methods and registering reducers

- Maybe used form validation library like Zod

### Continued development
- Find and identify areas for optimization
- Better component structure
- Use validation libraries like Zod
- Check for more styling errorss

### Useful resources
- Read the documentation for the libraries used.

## Author

- Website - [https://jowi-englis.vercel.app/](https://jowi-englis.vercel.app/)
- Frontend Mentor - [@jowix311](hhttps://www.frontendmentor.io/profile/jowix311)


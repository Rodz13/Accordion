## User Profile Accordion style profile

The idea is to create a widget that shows the current progress of the profile creation of the user.
The user should be able to see the missing tasks of a specific area and be able to mark them as done.

The widget can be seen live at [https://accordion-theta.vercel.app/](https://accordion-theta.vercel.app/).

### How to run
- Development mode - `npm run dev` - locally - http://localhost:3000/
- Production mode - `npm run build` then `npm run start` - http://localhost:3000/

### Tests
 - E2E tests
    Run the e2e tests with:
        - Terminal - `npm run cypress`
        - Cypress interactive tool - `npm run cypress:open`

### Summary
    Built using ReactJS and NextJS to take advantage of its feature and provide a better experience for the user and the developer.
    With NextJS server rendering, automatic code splitting for faster page loads and built-in CSS, Sass support, and support for any CSS-in-JS library make React applications has never been easier, plus it is easy to configure and it has a very easy to navigate documentation.

    Data is fetched from the api that's mentioned on the [task instructions](https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress) via getStaticProps() function that we export from the page component used to generate data on the build time.
    Note that there are a couple of typos on the data provided, such as `"name": "Accomiplishment"` and `birthdate`. Also 2 properties have the handler `name` instead of `description`.


    Icons are imported from [Bootstrap Icons](https://icons.getbootstrap.com/#icons).

    The end-to-end(e2e) tests rely on [cypress](https://docs.cypress.io).
    Cypress is a developer-friendly tool operates directly in the browser using a DOM manipulation technique and enables front-end developers and QA engineers to write automated web tests while eliminating pain points.
    Also, it helps to test high value features and the developer is able to similate the user experience during developemnt and see the components interacting with each other.

    

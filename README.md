# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


React Calendar Application

Overview:
  This is a calendar application built using React. It allows users to view, add, and manage events in a user-friendly interface.
Features:
  1. View calendar by month, week, or day.
  2. Add and edit events.
  3. Responsive design for mobile and desktop.
  4. Event reminders and notifications.
Technologies Used:
  1. React: Frontend library
  2. React Router: For navigation
  3. CSS/SCSS: For styling
  4. Netlify: For deployment


Setup and Installation

Prerequisites:
  Ensure you have the following installed on your machine:
     1. Node.js (v16.x or higher).
     2. Git.
Steps:
  1. Clone the Repository
     Use Git to clone the repository from GitHub:
        git clone https://github.com/snigdha416/React-based-Calendar-Application.git
        cd React-based-Calendar-Application
  2. Install Dependencies
     Navigate to the project folder and install all required dependencies using npm:
        npm install
  3. Start the Development Server
     Run the application locally in development mode:
        npm start
    The application will open in your default browser at:
        http://localhost:3000/.

Additional Notes

  If your environment encounters issues during setup:
    Ensure Node.js and npm are properly installed by checking their versions
       node --version
       npm --version
  If the development server does not start, ensure all dependencies are correctly installed and retry:
    npm install
    npm start
    

Deployment Instructions

1. Build the Application
      npm run build
2. Deploy the Build Folder
     1. In the Netlify Dashboard, click on "Add New Site" → "Deploy manually".
     2. Drag and drop the build folder into the upload area.
     3. Netlify will process and deploy your application.
3. Project Live URL
   https://6777673d55c34f3d6a5ee64d--neon-toffee-3c3c84.netlify.app/
   

Application Functionality

1. Admin Module
    Company Management:
     Add, edit, and delete companies with details like:
       1. Name
       2. Location
       3. LinkedIn Profile
       4. Emails
       5. Phone Numbers
       6. Comments.
       2. Set default communication periodicity (e.g., every 2 weeks).
    Communication Method Management:
       Define communication methods, such as:
         1. LinkedIn Post
         2. Email
         3. Phone Call.
       Specify: 
         1. Order of execution 
         2. Mandatory flags for communication methods.

2. User Module
    Dashboard: 
      Displays:
         1. Last five communications for each company.
         2. Upcoming scheduled communication with type and date.
      Uses color-coded highlights:
         1. Red: Overdue communication.
         2. Yellow: Communication due today.
    Interactive Features:
       Tooltips: Show notes for completed communications when hovering over them.
       Log Communications: Log new communications via the "Communication Performed" action modal:
           1. Select the type of communication.
           2. Input the date.
           3. Add notes.
    Notifications:
       1. Separate grids for:
           1. Overdue communications.
           2. Today’s communications.
       2. A notification badge shows the count of overdue and due communications.
    Calendar View:
       Interactive calendar to:
         1. Manage past communications (view dates and methods).
         2. Manage upcoming communications (scheduled dates and methods).

3. Reporting and Analytics Module(Optional)
    Communication Frequency Report:
      1. Visualize frequency of methods used (e.g., bar chart, pie chart).
    Engagement Effectiveness Dashboard:
      1. Metrics for successful responses by communication method.
    Overdue Communication Trends:
      1. Trendline or heatmap for overdue communications over time.
    Downloadable Reports:
      Export data as:
        1. PDF for presentations.
        2. CSV for further analysis.


Known Limitations

1. Admin Module
   1. No real-time validation for fields such as:
      1. LinkedIn profiles.
      2. Email addresses.
   2. Communication periodicity settings are static and may not adapt to dynamic scheduling needs.
2. User Module
   1. Tooltip information for completed communications is limited to basic notes.
   2. Manual override of color-coded highlights (e.g., Red or Yellow) could lead to inconsistencies in communication tracking.
3. Reporting Module (Optional)
   1. Engagement metrics require accurate and consistent response tracking, which might involve additional complexity in implementation.
   2. Reporting capabilities may have limited depth if the optional module is not fully implemented.


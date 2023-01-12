# Rewards Points UI

### About

This demo app will display a generated dataset of customers and random purchase data, calculate their accrued 
rewards points based on dollars spent per transaction, per month, and overall total, and display the 
resulting data in a table.

A demo can be viewed here: [https://mflorida.github.io/demos/customer-rewards/](https://mflorida.github.io/demos/customer-rewards/)

### Run locally

To run the app under Node.js using the pre-generated data (in the `/public/data` folder), simply
run `yarn install` to make sure necessary dependencies are installed, then `npm start` from the project's root folder.

### Generate new customer data

To generate a new customer dataset, either manually execute `/utils/createRewardsData.js`, or execute `run.sh` from the
project root, which will generate new data and start the demo server on your local machine at `http://localhost:3000`.

### Build and deploy

To build a new deployable application, run `yarn build` or to build then copy to the `demo` folder for uploading
to the repo, run the `build-demo.sh` script.

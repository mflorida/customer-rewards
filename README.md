# Rewards Points UI

### About

This is a demo app to show some basic functionality of retrieving data via fetch and rendering it to the page with React. 

This pre-generated data contains an array of objects with customer names, purchase data, and pre-calculated rewards
points numbers based on dollars spent per purchase, per month, and overall total. The totals are calculated
when generating the data (using [node CLI scripts](https://github.com/mflorida/customer-rewards/tree/main/utils)) 
to simulate a real-world app where the calculations are done on the back end and stored in a database. The front end 
will retrieve this data on-the-fly with a fetch GET and render with React (and Bootstrap React components).

The calculations used are as follows:
 - 0 points for transactions less than $50
 - 1 point for every dollar spent over $50 (up to 50 points max)
 - 2 points for every dollar spent over $100

### Run locally

To run this locally, clone this repo, install the dependencies `npm install` and start the dev server `npm run start`.

> NodeJS must be installed - version 16 or higher is recommended.

### Generate _new_ customer data

To generate a new customer dataset, from the project root, run `node ./utils/createRewardsData.js` from a bash shell. 
This will generate two JSON files: one with randomly generated names (`./public/data/customers.json`) and another 
with randomly generated purchase amounts (`./public/data/customerData.json`) which are then used to calculate 
rewards points per transaction as well as totals per month.

# Rewards Points UI

### About

This demo app will display a generated dataset of customers and random purchase data, calculate their accrued 
rewards points based on dollars spent per purchase, per month, and overall total, and display the resulting
data in a table. 

The rewards points data is calculated beforehand and stored in a static JSON file that is 
fetched on-the-fly via HTTP request and used as the data source for the table rendered with React.

The calculations used are as follows:
 - 0 points for transactions less than $50
 - 1 point for every dollar spent over $50 (up to 50 points max)
 - 2 points for every dollar spent over $100

### Run locally

To run this locally, clone this repo, install the dependencies `npm install` and start the dev server `npm run start`.

> NodeJS must be installed - version 16 or higher is recommended.

### Generate new customer data

To generate a new customer dataset, run `node ./utils/createRewardsData.js`. This will generate two JSON files: one
with randomly generated names (`./public/data/customers.json`) and another with randomly generated purchase amounts
(`./public/data/customerData.json`) which are then used to calculate rewards points per transaction as well as totals 
per month.

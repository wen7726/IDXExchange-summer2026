import { parsePropertyQuery } from "./parser";

const tests = [
  "Show me 3-bedroom condos in Irvine under $1.5M with a pool.",
  "Find townhomes in Tustin under 900k.",
  "Single family homes in Pasadena with a view.",
  "Show me land in Corona under 500k.",
  "I want a 4 bed 2.5 bath house in San Diego.",
  "Condos in Newport Beach under 2 million with ocean view.",
  "Find homes in Irvine with HOA under 500.",
  "Show me 2500 sqft single family in Riverside.",
  "3 bedroom townhouse with pool in Anaheim under $850,000.",
  "Find condos in Los Angeles with 2 baths and view."
];

for (const query of tests) {
  console.log("Query:", query);
  console.log(parsePropertyQuery(query));
  console.log("----------------------");
}
import { parsePropertyQuery } from "../week2-property-search/parser";
import { searchActiveListings } from "./search-active";
import { getSoldComps } from "./sold-comps";
import {
  formatPropertyCard,
  formatSoldComp,
} from "./format-results";

async function main() {
  const userQuery =
    "Show me 3-bedroom condos in Irvine under $1.5M with a pool.";

  const filters = parsePropertyQuery(userQuery);

  console.log("=== Parsed Filters ===");
  console.log(filters);

  const listings = await searchActiveListings(filters, 1, 5);

  console.log("\n=== Active Listings (Raw Data) ===");
  console.table(listings);

  console.log("\n=== Active Property Cards ===");
  listings.forEach((listing) => {
    console.log(formatPropertyCard(listing));
    console.log("-----------------------------------");
  });

  const soldComps = await getSoldComps("Irvine", 12, 5);

  console.log("\n=== Sold Comps (Raw Data) ===");
  console.table(soldComps);

  console.log("\n=== Sold Property Cards ===");
  soldComps.forEach((comp) => {
    console.log(formatSoldComp(comp));
    console.log("-----------------------------------");
  });
}

main().catch((error) => {
  console.error("Week 3 test failed:", error);
  process.exit(1);
});
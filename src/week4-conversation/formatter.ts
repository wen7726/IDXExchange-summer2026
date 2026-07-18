// formatter.ts

import type { ListingRow } from "../week3-mls-database/types";

/**
 * Formats a single property listing into a WhatsApp-friendly message.
 */
export function formatListing(listing: ListingRow): string {
  const price =
    listing.price !== null
      ? `$${listing.price.toLocaleString()}`
      : "N/A";

  const beds = listing.beds ?? "N/A";
  const baths = listing.baths ?? "N/A";

  const sqft =
    listing.sqft !== null
      ? `${listing.sqft.toLocaleString()} sqft`
      : "N/A";

  const address = listing.L_Address ?? "Unknown Address";
  const city = listing.L_City ?? "Unknown City";
  const zip = listing.L_Zip ?? "";

  const type = listing.type ?? "Unknown";

  const yearBuilt = listing.YearBuilt ?? "N/A";
  const dom = listing.DaysOnMarket ?? "N/A";

  const hoa =
    listing.AssociationFee !== null
      ? `$${listing.AssociationFee}`
      : "N/A";

  const pool =
    listing.PoolPrivateYN === "1" ||
    listing.PoolPrivateYN === "Y"
      ? "Yes"
      : "No";

  const view =
    listing.ViewYN === "True" ||
    listing.ViewYN === "Y"
      ? "Yes"
      : "No";

  return `🏠 ${address}
📍 ${city} ${zip}

💰 ${price}
🛏 ${beds} Beds
🛁 ${baths} Baths
📐 ${sqft}

🏡 ${type}
🏗 Year Built: ${yearBuilt}
📅 Days on Market: ${dom}
💵 HOA: ${hoa}
🏊 Pool: ${pool}
🌅 View: ${view}`;
}

/**
 * Formats multiple listings into one WhatsApp response.
 */
export function formatListings(
  listings: ListingRow[],
  maxResults: number = 5
): string {
  if (listings.length === 0) {
    return "Sorry, I couldn't find any matching properties.";
  }

  const shown = listings.slice(0, maxResults);

  let message = `✅ Found ${listings.length} matching propert${
    listings.length === 1 ? "y" : "ies"
  }.\n\n`;

  message += shown
    .map((listing, index) => {
      return `Property ${index + 1}\n${formatListing(listing)}`;
    })
    .join("\n\n────────────────────\n\n");

  if (listings.length > maxResults) {
    message += `\n\nShowing the first ${maxResults} results.`;
  }

  return message;
}
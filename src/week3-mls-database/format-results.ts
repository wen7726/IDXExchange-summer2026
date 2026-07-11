import type { ListingRow, SoldRow } from "./types";

export function formatPropertyCard(property: ListingRow): string {
  return `
🏠 ${property.L_Address}
📍 ${property.L_City}, ${property.L_Zip}

💰 Price: $${property.price?.toLocaleString() ?? "N/A"}
🛏 Beds: ${property.beds}
🛁 Baths: ${property.baths}
📐 Sqft: ${property.sqft?.toLocaleString() ?? "N/A"}

🏊 Pool: ${property.PoolPrivateYN === "1" ? "Yes" : "No"}
🌅 View: ${property.ViewYN === "1" ? "Yes" : "No"}

🏗 Year Built: ${property.YearBuilt}
🏡 HOA: $${property.AssociationFee ?? 0}
`.trim();
}

export function formatSoldComp(comp: SoldRow): string {
  return `
🏠 ${comp.UnparsedAddress}
📍 ${comp.City}

💰 Sold Price: $${comp.ClosePrice?.toLocaleString() ?? "N/A"}
📅 Close Date: ${comp.CloseDate}

🛏 Beds: ${comp.BedroomsTotal}
🛁 Baths: ${comp.BathroomsTotalInteger}
📐 Sqft: ${comp.LivingArea?.toLocaleString() ?? "N/A"}

🏡 Type: ${comp.PropertySubType}
`.trim();
}
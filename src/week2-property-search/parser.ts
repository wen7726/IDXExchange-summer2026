export type PropertyFilters = {
  city: string | null;
  maxPrice: number | null;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  type: string | null;
  pool: string | null;
  hasView: string | null;
  maxHOA: number | null;
};

export function parsePropertyQuery(query: string): PropertyFilters {
  const lower = query.toLowerCase();

  const cityMatch = query.match(/in ([A-Za-z\s]+?)(?:\s+under|\s+with|\s+at|\s+for|$)/i);
  const priceMatch = query.match(/under\s+\$?([\d,.]+)\s*(k|m|million)\b|under\s+\$([\d,.]+)/i);
  const bedsMatch = query.match(/(\d+)[\s-]*(bed|beds|bedroom|bedrooms)/i);
  const bathsMatch = query.match(/(\d+(?:\.5)?)[\s-]*(bath|baths|bathroom|bathrooms)/i);
  const sqftMatch = query.match(/(\d[\d,]*)\s*(sqft|sq ft|square feet)/i);
  const hoaMatch = query.match(/hoa\s*(under|below|less than)?\s*\$?(\d[\d,]*)/i);

  const typeMap: Record<string, string> = {
    condo: "Condominium",
    condominium: "Condominium",
    townhome: "Townhouse",
    townhouse: "Townhouse",
    "single family": "SingleFamilyResidence",
    land: "UnimprovedLand",
  };

  const typeKey = Object.keys(typeMap).find((key) => lower.includes(key));

  let maxPrice: number | null = null;
  if (priceMatch) {
  const rawPrice = priceMatch[1] || priceMatch[3];
  maxPrice = Number(rawPrice.replace(/,/g, ""));
  const suffix = priceMatch[2]?.toLowerCase();

  if (suffix === "k") maxPrice *= 1000;
  if (suffix === "m" || suffix === "million") maxPrice *= 1_000_000;
}

  return {
    city: cityMatch?.[1]?.trim() || null,
    maxPrice,
    beds: bedsMatch ? Number(bedsMatch[1]) : null,
    baths: bathsMatch ? Number(bathsMatch[1]) : null,
    sqft: sqftMatch ? Number(sqftMatch[1].replace(/,/g, "")) : null,
    type: typeKey ? typeMap[typeKey] : null,
    pool: /pool/i.test(query) ? "1" : null,
    hasView: /view/i.test(query) ? "True" : null,
    maxHOA: hoaMatch ? Number(hoaMatch[2].replace(/,/g, "")) : null,
  };
}
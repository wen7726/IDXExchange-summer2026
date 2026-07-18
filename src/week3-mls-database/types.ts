// types.ts

/**
 * Shared property search filters.
 * Used by:
 * - Week 2 Parser
 * - Week 3 Database Search
 * - Week 4 Conversation Session
 */
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

/**
 * Active Listing returned from MLS database.
 */
export type ListingRow = {
  L_ListingID: string | number;
  L_DisplayId: string | null;
  L_Address: string | null;
  L_City: string | null;
  L_Zip: string | null;

  price: number | null;
  beds: number | null;
  baths: number | null;
  sqft: number | null;

  type: string | null;
  status: string | null;

  lat: number | null;
  lng: number | null;

  YearBuilt: number | null;
  AssociationFee: number | null;
  DaysOnMarket: number | null;

  PoolPrivateYN: string | null;
  ViewYN: string | null;
};

/**
 * Sold property used for comparable sales.
 */
export type SoldRow = {
  ListingKey: string;

  UnparsedAddress: string | null;
  City: string | null;

  CloseDate: string | Date | null;

  ClosePrice: number | null;
  OriginalListPrice: number | null;
  ListPrice: number | null;

  DaysOnMarket: number | null;

  BedroomsTotal: number | null;
  BathroomsTotalInteger: number | null;
  LivingArea: number | null;

  PropertyType: string | null;
  PropertySubType: string | null;

  YearBuilt: number | null;
};
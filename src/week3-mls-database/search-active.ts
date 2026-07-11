import { RowDataPacket } from "mysql2";
import { query } from "./db";
import type { ListingRow, PropertyFilters } from "./types";

type ListingDbRow = ListingRow & RowDataPacket;

export async function searchActiveListings(
  filters: PropertyFilters,
  page = 1,
  limit = 10
): Promise<ListingRow[]> {
  const safePage = Math.max(1, page);
  const safeLimit = Math.min(Math.max(1, limit), 50);
  const offset = (safePage - 1) * safeLimit;

  let sql = `
    SELECT
      L_ListingID,
      L_DisplayId,
      L_Address,
      L_City,
      L_Zip,
      L_SystemPrice AS price,
      L_Keyword2 AS beds,
      LM_Dec_3 AS baths,
      LM_Int2_3 AS sqft,
      L_Type_ AS type,
      L_Status AS status,
      LMD_MP_Latitude AS lat,
      LMD_MP_Longitude AS lng,
      YearBuilt,
      AssociationFee,
      DaysOnMarket,
      PoolPrivateYN,
      ViewYN
    FROM rets_property
    WHERE L_Status = ?
  `;

  const params: unknown[] = ["Active"];

  if (filters.city) {
    sql += " AND L_City = ?";
    params.push(filters.city);
  }

  if (filters.maxPrice !== null) {
    sql += " AND L_SystemPrice <= ?";
    params.push(filters.maxPrice);
  }

  if (filters.beds !== null) {
    sql += " AND L_Keyword2 >= ?";
    params.push(filters.beds);
  }

  if (filters.baths !== null) {
    sql += " AND LM_Dec_3 >= ?";
    params.push(filters.baths);
  }

  if (filters.sqft !== null) {
    sql += " AND LM_Int2_3 >= ?";
    params.push(filters.sqft);
  }

  if (filters.type) {
    sql += " AND L_Type_ = ?";
    params.push(filters.type);
  }

  if (filters.pool) {
    sql += " AND PoolPrivateYN = ?";
    params.push(filters.pool);
  }

  if (filters.hasView) {
    sql += " AND ViewYN = ?";
    params.push(filters.hasView);
  }

  if (filters.maxHOA !== null) {
    sql += " AND AssociationFee <= ?";
    params.push(filters.maxHOA);
  }

  sql += ` ORDER BY L_SystemPrice ASC LIMIT ${safeLimit} OFFSET ${offset}`;

  console.log("SQL:");
  console.log(sql);
  console.log("Params:");
  console.log(params);

  return query<ListingDbRow>(sql, params);
}
import { RowDataPacket } from "mysql2";
import { query } from "./db";
import type { SoldRow } from "./types";

type SoldDbRow = SoldRow & RowDataPacket;

export async function getSoldComps(
  city: string,
  months = 12,
  limit = 50
): Promise<SoldRow[]> {
  // Prevent unreasonable values
  const safeMonths = Math.min(Math.max(1, months), 60);
  const safeLimit = Math.min(Math.max(1, limit), 100);

  const sql = `
    SELECT
      ListingKey,
      UnparsedAddress,
      City,
      CloseDate,
      ClosePrice,
      OriginalListPrice,
      ListPrice,
      DaysOnMarket,
      BedroomsTotal,
      BathroomsTotalInteger,
      LivingArea,
      PropertyType,
      PropertySubType,
      YearBuilt
    FROM california_sold
    WHERE City = ?
      AND CloseDate >= DATE_SUB(CURDATE(), INTERVAL ? MONTH)
      AND PropertyType = ?
    ORDER BY CloseDate DESC
    LIMIT ${safeLimit}
  `;

  const params = [
    city,
    safeMonths,
    "Residential",
  ];

  console.log("Sold SQL:");
  console.log(sql);

  console.log("Sold Params:");
  console.log(params);

  return query<SoldDbRow>(sql, params);
}
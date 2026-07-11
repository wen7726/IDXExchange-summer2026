# Week 3 – MLS Database Integration

## Goal

Connect the natural language parser from Week 2 to the MLS databases using MySQL.

The workflow is:

User Query
    ↓
Natural Language Parser
    ↓
Structured Filters
    ↓
Parameterized SQL Query
    ↓
MySQL Database
    ↓
Formatted Property Results

---

## What I Completed

- Connected to the MySQL MLS database using mysql2
- Built a reusable database connection pool
- Implemented parameterized SQL queries
- Queried active listings from `rets_property`
- Queried sold comparables from `california_sold`
- Added pagination using LIMIT and OFFSET
- Formatted query results into readable property cards

---

## Example Query

User Input

Show me 3-bedroom condos in Irvine under $1.5M with a pool.

Parsed Filters

```json
{
  "city": "Irvine",
  "maxPrice": 1500000,
  "beds": 3,
  "type": "Condominium",
  "pool": "1"
}
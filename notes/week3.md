# Week 3 – MLS Database Integration

## Goal

Connect the Week 2 natural language parser to the MLS databases using MySQL.

## What I completed

- Connected to MySQL using mysql2 connection pool
- Implemented parameterized SQL queries
- Queried active listings from `rets_property`
- Queried sold comparables from `california_sold`
- Added pagination with LIMIT/OFFSET
- Formatted query results into readable property cards

## Challenge

The active listing search initially returned no results.

After checking the database with SQL queries, I found that `PoolPrivateYN` stores `"1"` instead of `"True"`.

I updated the parser to match the actual database values.

## What I learned

- Parameterized SQL
- MySQL connection pools
- SQL debugging
- Validating database values instead of making assumptions
- Formatting query results for downstream AI agents
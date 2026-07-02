# Week 2 - Natural Language Property Search

## Completed
- Built `parsePropertyQuery()`
- Parsed free-text real estate queries into structured filters
- Validated with 10 test queries

## Supported Filters
- city
- maxPrice
- beds
- baths
- sqft
- type
- pool
- hasView
- maxHOA

## Test Command

```bash
cd src
npx tsx week2-property-search/parser.test.ts
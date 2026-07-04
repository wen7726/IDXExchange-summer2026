# Week 2 Notes

## What I worked on

This week I implemented a natural language property query parser.

The goal was to convert free-text real estate requests into structured filter objects that can later be used to query the MLS database.

## Features implemented

The parser can recognize:

- City
- Maximum price
- Bedrooms
- Bathrooms
- Square footage
- Property type
- Pool
- View
- HOA limit

## Example

Input:

Show me 3-bedroom condos in Irvine under $1.5M with a pool.

Output:

- City: Irvine
- Max price: 1500000
- Bedrooms: 3
- Type: Condominium
- Pool: True

## Testing

I created multiple test queries to verify that different combinations of filters could be extracted correctly.

Examples included:

- Irvine condos under $1.5M
- Townhomes in Tustin
- Land in Corona
- Single-family homes with a view
- Properties with HOA limits

Most queries were parsed correctly.

During testing I also found a few edge cases, such as city names not being detected when the query format changed, which helped me improve the regular expressions.

## What I learned

This was my first time building a parser using regular expressions for real estate search.

I learned that users can describe the same requirement in many different ways, so parsing natural language is more challenging than simply matching keywords.

Good testing is just as important as writing the parser itself.

## Completed:

- Built a TypeScript property query parser
- Parsed natural language into structured filters
- Supported city, price, beds, baths, sqft, property type, pool, view, and HOA filters
- Validated the parser with 10+ test queries

## Next week

Connect these structured filters to SQL queries so the parser can search the MLS database directly.
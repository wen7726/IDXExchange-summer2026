cat > notes/week0-database-import.md <<'EOF'
# Week 0 Database Import

## Status

Imported both required MLS datasets into local MySQL database `idx_exchange`.

## Imported Tables

| Table | Row Count |
|---|---:|
| rets_property | 53,122 |
| california_sold | 87,157 |

## Notes

The imported row counts are lower than the handbook reference counts. Need to confirm whether the provided SQL files are sample datasets or partial exports.

## Completed

- Created local MySQL database: `idx_exchange`
- Imported `rets_property.sql`
- Imported `california_sold.sql`
- Verified row counts
EOF
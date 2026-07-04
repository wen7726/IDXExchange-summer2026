# Week 1 Notes

## What I worked on

This week I focused on understanding how OpenClaw works before building any features.

I learned how a user message travels through the system:

WhatsApp
→ Gateway
→ Runtime
→ Skill
→ Tool
→ Database
→ Response

## Main components

- Gateway receives incoming requests.
- Runtime manages the workflow.
- Session Manager keeps conversation history.
- Skills decide what capability should handle a request.
- Tools perform actions like SQL queries.
- Memory stores conversation context.

## What I built

- Created the architecture diagram.
- Documented the message workflow.
- Tested WhatsApp integration with OpenClaw.
- Verified that the MLS database is connected.

## Things I found interesting

I originally thought the agent talked directly to the database. After reading the architecture, I realized every request first goes through the Runtime, then a Skill calls a Tool, and finally the Tool accesses the database. That separation makes the system much easier to extend.

## Next week

Build a natural language property query parser that converts user requests into structured filters.
# Week 1 - OpenClaw Architecture Fundamentals

## Goal

Understand how OpenClaw routes a user message from WhatsApp through the runtime, skill selection, tool execution, memory update, and response delivery.

## Architecture Flow

```mermaid
flowchart LR
    A[User on WhatsApp] --> B[WhatsApp Channel]
    B --> C[OpenClaw Gateway]
    C --> D[OpenClaw Runtime]
    D --> E[Session Manager]
    E --> F[Skill Selector / Orchestrator]
    F --> G[Property Search Skill]
    G --> H[SQL Tool]
    H --> I[(MySQL Database)]
    I --> J[rets_property]
    I --> K[california_sold]
    H --> L[Formatted Response]
    L --> M[Memory Update]
    M --> C
    C --> B
    B --> A



## Key Components:

Component                       Role

WhatsApp Channel        Receives user messages and sends replies

OpenClaw Gateway        Local service that connects channels, agents, and tools

Runtime                 Executes the agent workflow

Session Manager         Maintains per-user conversation state

Skill Selector/Orchestrator   Chooses which skill should handle the query

Skills                  Modular capabilities such as property search, market stats, RAG

Tools                   Typed functions that execute actions such as SQL queries

Memory                  Stores session context and long-term information

MySQL                   Stores MLS datasets used by the agent


## MLS Databases：

Table                          Purpose                             Imported Rows

rets_property           Active property listings                        53,122

california_sold         Sold comps and market analytics                 87,157


## Example Query Flow

User sends:

Show me 3-bedroom condos in Irvine under $1.5M with a pool.

Flow:

1. WhatsApp receives the message.
2. OpenClaw Gateway forwards it to the runtime.
3. Session Manager loads the user session.
4. Orchestrator selects the Property Search Skill.
5. Property Search Skill parses the query into filters.
6. SQL Tool queries rets_property.
7. MySQL returns matching listings.
8. OpenClaw formats the response.
9. Memory stores the interaction.
10. WhatsApp sends the reply to the user.

## Week 1 Deliverable Status

* ✅ OpenClaw runtime understood
* ✅ WhatsApp channel tested
* ✅ Gateway verified
* ✅ MySQL database imported
* ✅ Architecture workflow documented
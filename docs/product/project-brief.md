# Project Brief

## One-Line Description

Branching Tales is a public fantasy RPG content demo that proves Revisium can
model, serve, explain, and evolve a content-heavy product with far less custom
backend code than a traditional implementation.

## Business Purpose

The frontend exists to shorten the evaluation path for developers and technical
buyers. A visitor should not need a sales call or a long documentation read to
answer basic platform questions:

- Can Revisium model nested content?
- Can it expose GraphQL, REST, and MCP from one schema?
- Can it handle files, formulas, foreign keys, search, and revisions?
- Can it participate in a federated graph with a normal application backend?
- Can a small team use it as both dictionary storage and CMS?

The demo answers these questions through working pages with visible requests,
responses, and source links.

## Positioning

Branching Tales is a DevRel product demo, not a production game.

The fantasy RPG domain is useful because it naturally contains:

- regions, locations, factions, heroes, items, monsters, quests, and parties;
- nested arrays and relationships;
- images, portraits, icons, maps, and crests;
- computed values such as rarity, market value, party size, and quest rewards;
- editorial content like news and blog posts.

That makes the product understandable while still exercising serious data
platform features.

## Audience

| Audience | What they need to see |
|---|---|
| Backend/platform engineer | Real schema, generated APIs, query payloads, response JSON, and source rows. |
| Tech lead | Operational story: federation, revisions, migration path, public read, error handling. |
| DevRel/sales engineer | Stable route path for a five-minute live demo. |
| AI coding agent | Machine-readable page contracts, request examples, source links, and implementation patterns. |
| Frontend developer | Clear page specs, design rules, architecture constraints, and review gates. |

## Core Message

Revisium handles the repeatable 80 percent:

- schemas;
- content rows;
- files;
- formulas;
- revisioned data;
- search;
- REST/GraphQL/MCP surfaces;
- federation participation.

The custom application handles the remaining product-specific 20 percent:

- operational counters;
- comments and mutable runtime state;
- recommendations;
- auth if needed;
- UI composition;
- product-specific business logic.

## Product Promise

Within five minutes, a visitor should be able to open the demo, click one or two
pages, and answer whether Revisium supports the capability they care about.

Every meaningful page must therefore show:

- rendered content;
- the request that produced it;
- the response sample;
- source data links;
- what feature is being demonstrated;
- which API surfaces exist;
- which subgraph owns fields when federation is involved.

## V1 Scope

In scope:

- read-only public frontend;
- dictionary catalog and detail pages;
- CMS landing/blog/news surfaces;
- Explainer Widget on data pages;
- localized content rendering;
- responsive layout;
- source links to cloud rows/schemas;
- GraphQL-first implementation with REST/MCP parity shown where available;
- route/page specs as the implementation contract.

Out of scope:

- user accounts and auth;
- write flows;
- playable combat or quest progression;
- payments/billing;
- admin editing UI;
- production-grade game mechanics;
- mobile native applications.

## Success Criteria

| Goal | Success signal |
|---|---|
| Capability discovery | Every Revisium feature in the feature map has a page that demonstrates it. |
| Technical trust | Every data page exposes query, variables, response sample, and source links. |
| Federation clarity | At least one detail page visibly combines Revisium-owned and backend-owned fields. |
| Handoff readiness | A frontend developer can implement pages by reading docs without asking for product basics. |
| Demo usability | Pages work on phone, tablet, and desktop with no horizontal page scroll. |

## Product Boundaries

The app should feel like:

- a polished developer-facing product demo;
- a readable data explorer;
- a public proof of architecture.

The app should not feel like:

- a marketing-only landing page;
- a generic fantasy website;
- a game UI that hides the data/API story;
- a developer console without visual product quality.

---
name: frontend-pr-review-iteration
description: >-
  Address demo-rpg-frontend GitHub PR review threads by triaging unresolved
  feedback, making the smallest docs/code/config fix, verifying it, replying in
  the same thread, and resolving only after verification.
metadata:
  short-description: Address frontend PR review threads
---

# Frontend PR Review Iteration Skill

Use this skill when addressing GitHub PR review threads for
`demo-rpg-frontend`.

## Goal

Close review feedback by fixing the actual docs/code drift, replying in the
review thread, and resolving only after verification. Do not create committed
review artifacts.

## Workflow

1. Fetch unresolved review threads from the PR. Thread-level state is the source
   of truth; use GitHub GraphQL review threads when flat comments are ambiguous.
2. Triage each thread:
   - valid and actionable;
   - already fixed;
   - needs clarification;
   - not applicable, with evidence.
3. For valid feedback, update the smallest necessary surface:
   - docs first when behavior, UX, architecture, design, navigation, data
     contract, or review rules changed;
   - code when the implementation drifted from the docs;
   - bot/review configs when the enforceable review contract changed.
4. Run the relevant verification commands. For frontend implementation changes,
   run the full gate:

   ```bash
   npm run verify
   ```

5. Reply in the same GitHub review thread with:
   - what changed;
   - where it changed;
   - what verification passed;
   - any remaining risk.
6. Resolve the thread only after the fix is present and verified.

## Rules

- Start with [`REVIEW.md`](../../../REVIEW.md).
- Treat [`docs/`](../../../docs/) as the implementation source of truth.
- Do not resolve a thread by only saying "fixed" without pointing to the change.
- Do not batch unrelated review fixes into the same explanation.
- Do not weaken docs, architecture, or review rules to silence a bot unless the
  product contract genuinely changed.

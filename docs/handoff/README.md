# Frontend Developer Handoff

This is the starting point for a frontend developer or coding agent taking over
`demo-rpg-frontend`.

Do not point the developer only at `AGENTS.md`. `AGENTS.md` is the boot file.
The actual work package is this docs tree.

## First Reading Pass

Read in this order:

1. [`AGENTS.md`](../../AGENTS.md) for hard repo rules.
2. [`docs/README.md`](../README.md) for the docs-first contract.
3. [`docs/product/project-brief.md`](../product/project-brief.md) for business context.
4. [`docs/product/page-inventory.md`](../product/page-inventory.md) for all routes and statuses.
5. [`docs/product/site-map.md`](../product/site-map.md) for page transitions and navigation.
6. [`docs/product/feature-map.md`](../product/feature-map.md) for which capability is shown where.
7. [`docs/product/page-patterns.md`](../product/page-patterns.md) for shared UX behaviour.
8. [`docs/design-system/README.md`](../design-system/README.md) for layout and components.
9. [`docs/design-system/art-direction.md`](../design-system/art-direction.md) for world/style/image generation prompts.
10. [`docs/architecture/frontend.md`](../architecture/frontend.md) for FSD/MVVM/codegen rules.
11. [`docs/roadmap/frontend-pages.md`](../roadmap/frontend-pages.md) for implementation order.
12. [`REVIEW.md`](../../REVIEW.md) for human and review-bot rules.
13. [`docs/review/frontend-checklist.md`](../review/frontend-checklist.md) for PR exit criteria.
14. [`docs/handoff/bootstrap-new-frontend-project.md`](./bootstrap-new-frontend-project.md) only when reusing this setup for another repo.

## What To Do First

1. Confirm local setup:

```bash
nvm use
npm install
npm run verify
```

2. Open [`docs/roadmap/frontend-pages.md`](../roadmap/frontend-pages.md).
3. Start with Milestone 1 unless the product owner assigns a different route.
4. For the selected page, open its spec under [`docs/product/pages/`](../product/pages/README.md).
5. If the spec is not ready, update the spec before changing code.
6. Implement using [`docs/playbooks/add-page.md`](../playbooks/add-page.md).
7. Review with [`docs/review/frontend-checklist.md`](../review/frontend-checklist.md).
8. Self-review against [`REVIEW.md`](../../REVIEW.md) before opening or updating a PR.

## Clone-To-First-PR Flow

Use this when a frontend developer or coding agent receives the repository but
no exact branch instructions.

1. Clone and verify the baseline:

```bash
git clone git@github.com:revisium/demo-rpg-frontend.git
cd demo-rpg-frontend
nvm use
npm install
npm run verify
```

2. Read [`AGENTS.md`](../../AGENTS.md), this handoff doc, and
   [`REVIEW.md`](../../REVIEW.md).
3. Check whether the product owner assigned an existing PR/branch. If yes,
   switch to that branch and use
   [`frontend-pr-review-iteration`](../../.agents/skills/frontend-pr-review-iteration/SKILL.md)
   for unresolved review threads.
4. If no PR/branch is assigned, start from fresh `master`:

```bash
git switch master
git pull
git switch -c feat/<route-or-capability>
```

5. Choose the next task from
   [`docs/roadmap/frontend-pages.md`](../roadmap/frontend-pages.md) unless the
   product owner names a different route.
6. Update or confirm the affected page spec before code.
7. Implement through [`docs/playbooks/add-page.md`](../playbooks/add-page.md).
8. Run
   [`frontend-general-checks`](../../.agents/skills/frontend-general-checks/SKILL.md)
   and
   [`frontend-self-review`](../../.agents/skills/frontend-self-review/SKILL.md).
9. Open a PR with docs/spec changes, architecture notes, screenshots or
   responsive audit notes, and command results.

The developer should ask for clarification only when the assigned PR/branch,
target route, or product decision is missing from the docs. They should not ask
general "what should I do now?" questions before reading the handoff, roadmap,
and page specs.

## Agent Automation

Agents should use the repo-local skills in this order:

1. [`frontend-general-checks`](../../.agents/skills/frontend-general-checks/SKILL.md)
   after clone, before PR, and after review fixes.
2. [`frontend-self-review`](../../.agents/skills/frontend-self-review/SKILL.md)
   before handoff and PR updates.
3. [`frontend-pr-review-iteration`](../../.agents/skills/frontend-pr-review-iteration/SKILL.md)
   when the work is driven by GitHub review threads.

The skills output evidence in the response or PR notes. They do not create a
separate committed source of truth.

## Recommended First Implementation Task

Build `/regions` into the reference catalog:

- app shell basics;
- catalog layout;
- loaded/loading/error/empty states;
- `totalCount`;
- locale-ready data selection;
- Explainer Widget v1;
- cloud table/schema links;
- responsive phone/tablet/desktop layout.

This creates reusable patterns for the rest of the route set.

## Required Handoff Output Per Page

For each page delivered, the developer should provide:

- changed files summary;
- page spec status update;
- screenshot or manual audit note for phone/tablet/desktop;
- `npm run verify` result;
- remaining blockers or open questions.
- explicit self-review notes for MVVM ownership, DataSource usage, List/Item
  ViewModel boundaries, React component thinness, and responsive behavior.

## Communication Contract

When a spec conflicts with live schema/code:

1. Stop and identify the mismatch.
2. Update the page spec or architecture/design doc.
3. Then update code.
4. Note the mismatch in PR notes.

Do not silently adapt code away from the docs.

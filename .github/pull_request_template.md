# Pull Request Summary

-

## Docs Source Of Truth

- [ ] Updated the affected page spec or confirmed no spec change is needed.
- [ ] Updated architecture/design/review docs if this changes a shared rule.
- [ ] Checked [`REVIEW.md`](../REVIEW.md) and [`docs/review/frontend-checklist.md`](../docs/review/frontend-checklist.md).

## Self-Review

- [ ] React components render model state and forward events only.
- [ ] ViewModels own page state, actions, derived values, and descriptors.
- [ ] Non-trivial API work is isolated behind DataSources.
- [ ] Lists/details use Item ViewModels where rows need formatting, links, or actions.
- [ ] No generated files were edited manually.
- [ ] Phone/tablet/desktop behavior was checked for UI changes.

## Checks

```bash
npm run verify
```

# Portfolio Code Review

Reviewed: August 26, 2026  
Scope: Astro single-page portfolio, static metadata, responsive layout, and maintained profile data.

## Summary

The site has a strong foundation: the terminal concept is coherent, the data is cleanly separated from the page template, outbound links consistently use safe new-tab handling, and the production build completes successfully.

Before publishing, fix the missing social preview image. The other findings improve the mobile reading order and prevent public profile details from silently becoming stale.

## Findings

### 1. Missing Open Graph image breaks social previews — High

`src/pages/index.astro` advertises `https://imazhar101.dev/og.png` in its Open Graph and Twitter metadata, but `public/og.png` does not exist. Link previews on LinkedIn, Slack, X, and other services will therefore have a broken or missing image.

**Recommendation:** create a real 1200×630 `public/og.png` (or change the metadata to a committed image that exists), then validate it after deployment with a social-card debugger.

### 2. Mobile layout promotes the sidebar above the introduction — Medium

At screen widths below 900px, `.side { order: -1; }` makes the neofetch, stats, and achievements panels appear before the `whoami` introduction. On a phone, visitors should first see the name, role, short professional summary, and contact links—not secondary proof points.

**Recommendation:** remove the negative order on mobile, or move the sidebar below the main content. If early proof points are important, render a small, intentional mobile summary rather than relocating the full sidebar.

### 3. Public facts are duplicated and manually maintained — Medium

Package totals, MCP-server totals, achievement counts, versions, and sidebar status are hard-coded in `src/data/site.js`. They can easily drift from npm and GitHub, which would weaken an otherwise polished public portfolio.

**Recommendation:** keep the curated package descriptions, but either automate the numeric totals during build or establish a simple release checklist that updates the data file together with package releases.

### 4. Verify the LinkedIn URL before launch — Low

The data file marks the LinkedIn URL as a placeholder to confirm. A bad professional-profile link is highly visible because it appears in the contact card.

**Recommendation:** open the link while signed out or in a private browser window, then remove the confirmation comment once verified.

### 5. Review public wording for ownership and confidentiality — Low

The roadmap references a unified MCP gateway and the introduction describes specific capabilities. This may be completely appropriate, but public portfolio copy should not imply ownership of employer work or expose internal roadmap detail without approval.

**Recommendation:** confirm the wording is safe to publish. Where necessary, describe the problem domain and your role without naming internal systems, scale, partners, or unreleased plans.

## What is already working well

- Metadata includes canonical, Open Graph, Twitter, and `Person` structured data.
- Theme preference is applied before paint and persisted safely in local storage.
- External links use `target="_blank"` together with `rel="noopener"`.
- The presentation separates data from the Astro page, making updates straightforward.
- The responsive grid has clear breakpoints and the project/package cards use readable content rather than icon-only navigation.

## Validation performed

- Ran `npm run build` successfully.
- Confirmed the generated site builds as one static page.
- Confirmed that `public/og.png` is absent while the metadata references it.

## Recommended publish sequence

1. Add and test the social-preview image.
2. Correct the mobile content order.
3. Verify external profile and credential links.
4. Confirm public wording is approved and current.
5. Deploy, then inspect the live page on a phone and test a shared link preview.

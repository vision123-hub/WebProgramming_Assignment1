# Week 8 Accessibility Report

I checked my course website with Lighthouse 13.6.0 before and after the improvements. Both homepage checks used the same live GitHub Pages URL, mobile emulation, and simulated throttling.

Website: [Web Programming Assignments](https://vision123-hub.github.io/WebProgramming_Assignment1/)

## Scores

- Before: **90/100**
- After deployment: **100/100**

## Problems found and fixes

1. The homepage introduction text was too low-contrast. I darkened its text color.
2. The Week 3 “Task 5” link briefly had low contrast while its colors changed. I kept its movement effect but stopped animating its text and background colors.
3. Lighthouse found a missing main landmark on the Week 8 pages. I added a semantic `<main>` area to each page.

The first two problems were reported in the initial homepage contrast audit. The missing-main-landmark problem was reported on all four Week 8 pages. The final deployed Lighthouse checks scored 100/100 on the homepage and all four Week 8 pages, with no failed accessibility audits.

I also added a “Skip to main content” link. I tested it with the keyboard: Tab reaches the link, and Enter moves focus to the main content.

## Screenshots

- [Before Lighthouse score](./accessibility-before.png)
- [After Lighthouse score](./accessibility-after.png)

The detailed Lighthouse HTML and JSON reports are saved in the backup folder outside Week 8.

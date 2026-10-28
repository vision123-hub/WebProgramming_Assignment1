# Week 8 Accessibility Report

I audited my course website with Lighthouse 13.6.0. I ran the before and after checks on the same local website URLs with the same mobile emulation and simulated throttling settings. The before check used a copy of the original committed files. The after check used my updated files.

Website: [Web Programming Assignments](https://vision123-hub.github.io/WebProgramming_Assignment1/)

## Scores

- Before: **90/100**
- After: **100/100**

## Problems found and fixes

1. The homepage introduction text did not have enough color contrast. I darkened the text color.
2. The Week 3 “Task 5” link briefly had low contrast while its colors were changing. This was reported by the initial deployed-site audit. I kept its movement effect but stopped animating the text and background colors.
3. Lighthouse found a missing main landmark on the Week 8 pages. I added a semantic `<main>` area to each page.

The homepage report had one failed audit category, color contrast, affecting two text elements. The missing-main-landmark audit was repeated on all four Week 8 pages. These are three actual failing elements/findings, not three different Lighthouse rule names. Lighthouse reported them in the initial reports and no failed accessibility audits in the final reports.

The matching homepage screenshot pair compares the original committed files with the updated files at the same local URL. The supporting initial deployed-site report, which recorded the Week 3 link contrast issue, is preserved in the backup folder.

I also added a “Skip to main content” link. I tested it with the keyboard; pressing Tab shows the link, and pressing Enter moves focus to the main content.

## Screenshots

- [Before Lighthouse score](./accessibility-before.png)
- [After Lighthouse score](./accessibility-after.png)

The detailed Lighthouse HTML and JSON reports are kept in the `lighthouse-backup-2026-10-28` folder outside Week 8. The final screenshots compare the original committed site and the updated site at the same local URLs. The updated files have not been pushed to GitHub Pages.

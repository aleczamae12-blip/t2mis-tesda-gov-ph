# Student Profile Template

Reusable website template for student training, assessment, and renewal records.

This repository is intended as a blank template. Replace placeholder values only when preparing a copy for a specific person.

## Files

- `index.html` - page structure
- `styles.css` - layout and styling
- `script.js` - tab switching

## Template Notes

- Keep this repository as the master template.
- Clone it whenever you need a fresh copy for a different person.
- Replace placeholders such as `student name`, `[REGION]`, and `[QUALIFICATION]` only in the cloned copy.

## Long-Term Hosting

This project is ready for GitHub Pages deployment through `.github/workflows/pages.yml`.

To publish it long-term:

1. Create a GitHub repository and push this folder to the `main` branch.
2. In GitHub, open `Settings` > `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push any change to `main` and wait for the `Deploy GitHub Pages` workflow to finish.
5. Use the resulting public URL for the final QR code.

If you want a branded URL, connect a custom domain in GitHub Pages after the first deployment.

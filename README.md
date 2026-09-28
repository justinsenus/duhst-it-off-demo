# DUHst It Off website demo

A responsive, static one-page website concept for DUHst It Off, based on the supplied desktop and mobile reference.

## Demo behavior

- Navigation scrolls to each page section, and the mobile menu opens and closes.
- Service cards open the booking preview with that service selected.
- The request form validates its fields. It does not send or store submissions; connect the approved booking destination after review.

## Run locally

From this folder, run:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

This is plain HTML, CSS, and JavaScript. It can be served from the repository root with GitHub Pages or deployed to Vercel without a build command.

## Logo assets

- `assets/images/duhst-logo-original.jpg` is the supplied logo file, kept unchanged.
- `assets/images/duhst-logo-full.png` is a transparent-background display copy made by removing only the connected white outside background. White details inside the illustration and lettering are preserved.
- `assets/images/duhst-logo-header.png` is the separate wordmark used in the navigation and footer.

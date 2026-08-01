# Luckora Launch Checklist

Use this checklist for the final production deployment of Luckora MVP.

## Before Deploy

- [ ] `npm run build` passed locally.
- [ ] Environment variables are ready.
- [ ] `NEXT_PUBLIC_GA_ID` is set if GA4 tracking is needed.
- [ ] No real secrets are committed.
- [ ] Production domain `luckora.online` is ready.
- [ ] DNS access is available.
- [ ] Sitemap is ready.
- [ ] Robots file is ready.
- [ ] Open Graph image is ready.
- [ ] Favicon/icon is ready.

## Deploy

- [ ] Import the project into Vercel.
- [ ] Set project root to `luckora-global` if needed.
- [ ] Confirm build command is `npm run build`.
- [ ] Add `NEXT_PUBLIC_GA_ID` in production environment variables if available.
- [ ] Deploy production build.
- [ ] Bind `luckora.online`.
- [ ] Confirm HTTPS is active.

## After Deploy

- [ ] Homepage works: `/`.
- [ ] Tests hub works: `/tests`.
- [ ] Personality test landing page works: `/tests/personality-test`.
- [ ] Test intro works: `/test`.
- [ ] 12-question test flow works.
- [ ] Report page works after completion: `/report`.
- [ ] Personality page works: `/personality/visionary-creator`.
- [ ] Mobile test passed on a real phone.
- [ ] No console errors in Chrome.

## SEO Setup

- [ ] `https://luckora.online/robots.txt` works.
- [ ] `https://luckora.online/sitemap.xml` works.
- [ ] `https://luckora.online/opengraph-image` works.
- [ ] `https://luckora.online/icon` works.
- [ ] Google Search Console property is created.
- [ ] Domain ownership is verified.
- [ ] Sitemap is submitted in Google Search Console.
- [ ] Main URLs are inspected and indexing is requested.

## Google Analytics

- [ ] GA4 property is created.
- [ ] Web data stream is created for `https://luckora.online`.
- [ ] Measurement ID is added as `NEXT_PUBLIC_GA_ID`.
- [ ] Production site is redeployed after adding GA ID.
- [ ] `test_start` appears in GA4 Realtime or DebugView.
- [ ] `test_complete` appears in GA4 Realtime or DebugView.
- [ ] `result_view` appears in GA4 Realtime or DebugView.

## URLs To Submit Or Inspect

```text
https://luckora.online/
https://luckora.online/tests
https://luckora.online/tests/personality-test
https://luckora.online/personality/visionary-creator
https://luckora.online/robots.txt
https://luckora.online/sitemap.xml
```

## Stop Rule

After this checklist is complete, stop changing product code and observe real
launch data first.

# Robotics Engineering Team Portfolio

A responsive Next.js portfolio for a multidisciplinary robotics team.

## Run locally

Requirements: Node.js 20.9+ recommended for current Next.js 16 releases.

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Build production version

```bash
npm run build
npm start
```

## Where to edit content

All team members, project descriptions, capabilities, and YouTube URLs are in:

```text
data/portfolio.ts
```

### Reception robot YouTube URL

The original request did not include a verifiable URL for the reception-robot video, so its `youtubeUrl` is intentionally blank. Replace:

```ts
youtubeUrl: "",
```

with the real YouTube URL.

## Verified project video links included

- ViART: https://www.youtube.com/watch?v=VvaEkjHHqJM
- Deformable propeller related demo: https://www.youtube.com/watch?v=IQQy3kAtIfw
- Vi2TaP: https://www.youtube.com/watch?v=apDyYN9bh5Y

## Team role titles used

- Embedded Firmware Engineer
- PCB Design Engineer
- Mechanical Design Engineer (3D CAD)
- Electronics Hardware Engineer (Schematic Design)
- Hardware Test & Validation Engineer

These titles are phrased for a professional engineering portfolio and can be edited in `data/portfolio.ts`.

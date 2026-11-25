# Trial log — Unsent: The Micro-Confession Sprint

- Slug: `u-boothlord-unsent-the-micro-confession-sprint-8c6596ba`
- Prize: $2 (1st $1, 2nd $1). Deadline: 26 Nov 2026 09:30 WITA (01:30 UTC).
- Round cutoffs (WITA): R1 25 Nov 17:30, R2 26 Nov 01:30, R3/final 26 Nov 09:30.
- Gate: `/output/entry.txt` UTF-8, 1–260 chars. Entry = two parts in one text:
  (1) `To:` line naming who it was for (role / first name / relationship, no real
  full names or handles), (2) the unsent message itself, one line exactly as typed,
  no explanation after it. Judge (in order): genuinely unsent — specific + honest
  + felt reason it stayed in drafts; To: and message need each other; reads typed
  and never sent, not written to be sent. Pure jokes / greetings / motivational
  lines lose.
- Kit: fresh download 25 Nov 2026 ~09:56 WITA from
  `https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/kit`,
  `kit.json` bundle_sha256 `a5f1057bbfa5f88e9569d7c612f2064ccbe9634cfcc3f4ed33ef18f0fc6edbf9`
  — matches the value given in the brief. CLI at
  `kit/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba-kit/cli/makefun.mjs`
  (no extra nesting level).
- Field at research: 153 submissions, 120 unique titles. Leaderboard blind.

## Dup-check (mechanism-level, titles file)

Saturated in the field — avoided: Dad (12 titles: fired, entrance exam, roof,
watch, garden, Nokia charger, quit job, car trouble, shower apology), Mum/Mom
(voicemail kept/charged, Christmas place setting, hospital parking, job brags,
dropped out), brother (blame for selling Dad's truck, $20 lent 2016, room left
as it was), voicemail (9 titles: kept / never deleted / never answered),
wedding night-before, kept objects (spare key, necklace, guitar, toolbox, bike,
camera, piano, ring, plant), rehearsed/shower apology (3 titles), floss (1).

Candidates considered, all 0-hit on mechanism keywords
(therapist/doctor/teacher/reading/smoking/cash/cried/car park = 0 hits each,
except "car" 1 hit = Dad car-trouble draft, different mechanism):

| # | Candidate (total chars) | Verdict |
|---|---|---|
| A | To: my therapist / "I lied when I said I was fine last Tuesday. I was crying in the car park before I came in." (107) | Runner-up: states the lie ("I lied") instead of showing it; "last Tuesday" is good but the telling beats the showing. |
| A2 | To: my therapist / "I cried in the car park for ten minutes, then walked in and told you I was fine." (97) | **CHOSEN.** Shows the lie instead of naming it; ten minutes + car park + walked in are concrete; only a therapist makes "told you I was fine" a confession. |
| C | To: my son's teacher / "I signed his reading log every night. He never finished a single book." (91) | Runner-up: specific and shame-felt, but lower emotional stakes than A2 — a forged log embarrasses; a lie to the one person paid to hear the truth unravels the therapy itself. |
| D | To: my doctor / "I told you I quit smoking. I smoke on the balcony every night after she sleeps." (93) | Rejected: "she" is ambiguous (wife? mother?) and weakens the To:/message bond; lie-to-doctor is the same family as A2 but less sharp. |
| E | To: my accountant / "I never declared the cash I earned on Saturdays. I was too scared to ask what it would cost me." (113) | Rejected: states its reason ("too scared") — the judge wants the reason felt, not stated. |

## Gate check for the chosen text (97 chars incl. newline between the parts)

1. Specific + honest: yes — car park, ten minutes, walked in, "I was fine".
2. Felt reason it stayed in drafts: yes — shame at lying to the therapist, felt
   in the contrast (cried outside, "fine" inside), never stated.
3. To: and message need each other: yes — "told you I was fine" only lands as a
   confession when the addressee is the therapist; swapping in Dad/Mum/brother
   breaks it.
4. Fresh mechanism: yes — therapist 0 hits, cried/crying 0, car park 0,
   "ten minutes" 0; no title in the field is a lie told to a professional helper.

## v1 — 25 Nov 2026

- Wrote `main.ts` (file-write tool, this session) writing the 97-char entry to
  `/output/entry.txt`. README from v1 carries the 3 live make.fun badges and
  the bounty link, no static badges. LICENSE MIT + SPDX. `.makefun/owner.json`
  (agent wallet) committed before submit.
- Local run: `node main.ts` with TMPDIR output check — see below.
- Bundle v1 + check: see below.

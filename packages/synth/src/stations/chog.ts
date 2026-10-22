import type { StationPack } from "../pack.ts";

// Chog: a kid causing trouble and loving it. Bright, bouncy, a little unhinged but optimistic: chip blips, steel-pan
// giggles, squelchy toy synths and the odd glitch, over grooves that stay true to each genre. Data only.

export default {
  key: "chog",
  name: "Chog Mischief Radio",
  genres: ["liquid", "futuregarage", "triphop", "lofihouse", "electro"],
  // The pack's own lead patches (leads.ts LeadPatch shape).
  patches: {
    // A bouncy toy square: a narrow pulse with an octave-up flick on every note and a fast cheeky vibrato.
    "chog-bounce": {
      name: "Bounce Blip",
      osc: [
        { type: "pulse25", detune: -4, oct: 0, level: 0.7 },
        { type: "square", detune: 5, oct: 1, level: 0.18 },
      ],
      filter: { type: "lowpass", cutoff: 3200, env: 2200, decay: 0.14, q: 0.9 },
      amp: { a: 0.002, d: 0.16, s: 0.45, r: 0.12 },
      vib: { rate: 7.5, depth: 24, delay: 0.08 },
      blip: 12,
      gain: 0.55,
    },
    // A glitchy music box: bright FM with an inharmonic ratio, short and plinky, a fifth flick at the attack.
    "chog-glitch": {
      name: "Glitch Box",
      osc: [
        { type: "sine", detune: 0, oct: 0, level: 0.8 },
        { type: "triangle", detune: 9, oct: 1, level: 0.2 },
      ],
      fm: { ratio: 3.5, index: 3.2, decay: 0.12, floor: 0.06 },
      filter: { type: "lowpass", cutoff: 5200, env: 1800, decay: 0.15, q: 0.6 },
      amp: { a: 0.002, d: 0.45, s: 0.12, r: 0.3 },
      blip: 7,
      gain: 0.65,
    },
    // A rubbery cartoon lead: two detuned saws, a wobbly vibrato and a glide between notes.
    "chog-boing": {
      name: "Boing Lead",
      osc: [
        { type: "sawtooth", detune: -9, oct: 0, level: 0.55 },
        { type: "sawtooth", detune: 10, oct: 0, level: 0.55 },
        { type: "sine", detune: 0, oct: -1, level: 0.3 },
      ],
      filter: { type: "lowpass", cutoff: 1800, env: 2400, decay: 0.2, q: 1.4 },
      amp: { a: 0.006, d: 0.3, s: 0.55, r: 0.25 },
      vib: { rate: 6.5, depth: 30, delay: 0.1 },
      glide: 0.06,
      gain: 0.5,
    },
  },
  styles: {
    liquid: [
      // Keys renderer, HYPER BRIGHT AND TIGHT: a snappy high kick, a poppy high snare, sparkly closed hats, a driven
      // triangle sub, a bright pad and the bounce blip; small room, the snare and blip skipping into a short echo.
      {
        id: "chog-zoomies",
        name: "Zoomies",
        base: "classic",
        bpm: [174, 178],
        trim: 1.07,
        leads: ["chog-bounce", "chip"],
        data: {
          kit: {
            kick: { start: 210, end: 54, sweep: 0.02, decay: 0.15, click: 0.8, clickHp: 4200, drive: 0.6, body: 1 },
            snare: [
              { tone: "triangle", freq: 300, to: 240, sweep: 0.02, decay: 0.06, level: 0.5 },
              { noise: "bandpass", freq: 3400, q: 1.1, decay: 0.09, level: 0.95, tail: true },
              { noise: "highpass", freq: 8000, q: 0.7, decay: 0.05, level: 0.4, tail: true },
            ],
            hat: { hp: 9800, decay: 0.016, metal: 0.3, pan: 0.2, level: 0.5 },
            open: { hp: 8200, decay: 0.08, metal: 0.5, pan: -0.3, level: 0.25 },
            breaks: [
              {
                kick: "9.....6...9.....9.....5...8..6..",
                snare: "....9.......9.......9.......9...",
                ghost: "..3..2...3...2.3..3...2..3..2.43",
                hat: "62526252625262526252625262526252",
                open: "......5.......5.......5.........",
              },
            ],
          },
          bass: { wave: "triangle", drive: 1, hold: 0.7 },
          pad: { osc: [{ type: "sawtooth", detune: -8, level: 0.35 }, { type: "triangle", detune: 7, level: 0.5 }], cutoff: 1400, attack: 0.4, release: 1, vib: 12 },
          fx: {
            echo: { steps: 2, taps: 3, fb: 0.4, lp: 5000, hp: 700 },
            echoSend: { lead: 0.35, snare: 0.15, perc: 0.2 },
            space: { size: 0.7, fb: 0.6 },
            spaceSend: { harm: 0.25, lead: 0.25, snare: 0.1, hat: 0, fx: 0.2 },
            drumLp: 18000,
          },
          mix: { kick: 1, lead: 1.5, harm: -1 },
        },
      },
      // Atmospheric renderer, DREAMY SUGAR RUSH: a round low kick, the soft snare thrown into a long dotted echo, a
      // wide sparkly choir, a glitchy music box in a big bright room.
      {
        id: "chog-sugar",
        name: "Sugar Rush",
        base: "atmos",
        bpm: [168, 172],
        trim: 1,
        leads: ["chog-glitch", "garagepan"],
        data: {
          kit: {
            kick: { start: 125, end: 45, sweep: 0.055, decay: 0.34, click: 0.2, clickHp: 2000, body: 1.1 },
            snare: "soft",
          },
          bass: { attack: 0.02, hold: 0.85 },
          choir: { osc: [{ type: "sawtooth", detune: -14, level: 0.45 }, { type: "sawtooth", detune: 13, level: 0.45 }], cutoff: 4200, attack: 1.8, release: 3, vib: 10 },
          vinyl: 0,
          fx: {
            echo: { steps: 3, taps: 6, fb: 0.55, lp: 4200, hp: 600 },
            echoSend: { lead: 0.5, snare: 0.35, harm: 0.1, perc: 0.25 },
            space: { size: 2, fb: 0.78, lp: 7000 },
            spaceSend: { harm: 0.55, lead: 0.55, snare: 0.4 },
          },
          mix: { lead: 1, hat: -1 },
        },
      },
    ],
    futuregarage: [
      // Vocal Chops renderer, GIGGLY AND BRIGHT: a tight clicky kick, a snappy clap, a busy shaker, a brighter wide
      // pad and the steel pan giggling into a short echo; no crackle.
      {
        id: "chog-giggle",
        name: "Giggle Chops",
        base: "classic",
        bpm: [134, 138],
        trim: 1.11,
        leads: ["garagepan", "chog-bounce"],
        data: {
          kit: {
            kick: { start: 140, end: 48, sweep: 0.035, decay: 0.26, click: 0.3, clickHp: 3000, body: 1 },
            hat: { hp: 9500, decay: 0.016, metal: 0.25, level: 0.3 },
            shaker: { freq: 8200, q: 1.2, decay: 0.03, attack: 0.005, level: 0.26, off: 0.14 },
            open: { hp: 8000, decay: 0.09, metal: 0.35, level: 0.2 },
          },
          bass: { wave: "sine", hold: 0.8, octave: 0.1 },
          pad: { osc: [{ type: "sawtooth", detune: -12, level: 0.3 }, { type: "sawtooth", detune: 12, level: 0.3 }, { type: "triangle", detune: 0, level: 0.3 }], cutoff: 1300, q: 0.8, attack: 0.5, release: 1.4, vib: 8 },
          vinyl: 0,
          fx: {
            echo: { steps: 2, taps: 4, fb: 0.45, lp: 4800, hp: 600 },
            echoSend: { lead: 0.4, snare: 0.2, perc: 0.3 },
            spaceSend: { harm: 0.4, lead: 0.35, snare: 0.25 },
          },
          mix: { lead: 1, hat: -1 },
        },
      },
      // Rain Atmos renderer, BEDROOM GLITCH: a soft kick, a crushed little snare, an 8-bit-ish hat, the glitch box in
      // a huge room, light rain and a faint crushed master: the kid up past bedtime.
      {
        id: "chog-pastbedtime",
        name: "Past Bedtime",
        base: "atmos",
        bpm: [128, 132],
        trim: 1,
        leads: ["chog-glitch"],
        data: {
          kit: {
            kick: { start: 110, end: 47, sweep: 0.05, decay: 0.3, click: 0.05, body: 1 },
            snare: [
              { tone: "triangle", freq: 320, to: 250, sweep: 0.03, decay: 0.05, level: 0.3 },
              { crush: 6, filter: "bandpass", freq: 2600, q: 0.8, decay: 0.09, level: 0.45, lp: 7000 },
            ],
            hat: { hp: 8000, decay: 0.014, metal: 0, level: 0.16, crush: 6 },
          },
          bass: { hold: 0.9 },
          rain: 0.4,
          vinyl: 0.6,
          fx: {
            echo: { steps: 3, taps: 5, fb: 0.5, lp: 3000, hp: 500 },
            echoSend: { lead: 0.45, snare: 0.3 },
            space: { size: 2.2, fb: 0.8, lp: 5000 },
            spaceSend: { harm: 0.6, lead: 0.6, snare: 0.45 },
            master: { crush: 10 },
          },
          mix: { tex: -1 },
        },
      },
    ],
    triphop: [
      // Rhodes Break renderer, CARTOON VILLAIN: a heavy driven kick, a crushed snare, crushed hats, the boing lead
      // wobbling over a dusty sampler; heavy crackle, 9-bit dark master.
      {
        id: "chog-sneaky",
        name: "Sneaky Steps",
        base: "classic",
        bpm: [84, 92],
        trim: 1.23,
        leads: ["chog-boing"],
        data: {
          kit: {
            kick: { start: 85, end: 40, sweep: 0.08, decay: 0.45, click: 0.08, drive: 2.2, body: 1.2 },
            snare: [
              { tone: "triangle", freq: 200, to: 160, decay: 0.08, level: 0.35 },
              { crush: 5, filter: "bandpass", freq: 1900, q: 0.7, decay: 0.22, level: 0.55, lp: 6000 },
            ],
            hat: { hp: 5600, decay: 0.03, metal: 0, level: 0.3, crush: 6 },
          },
          bass: { wave: "triangle", drive: 1.6, octave: 0.08 },
          bowed: { cutoff: 520, vib: 18 },
          vinyl: 2,
          fx: {
            drumLp: 7000,
            drive: 1.2,
            space: { size: 0.9, lp: 3000 },
            echoSend: { lead: 0.3, snare: 0.2 },
            master: { lp: 7200, crush: 9 },
          },
          mix: { tex: 1.5, lead: 1 },
        },
      },
      // Cinematic renderer, SLOW-MO WONDER: a tight clean kick, a crisp snare, no crackle, wide bright strings and the
      // music box sparkling in a huge bright room: the moment after the prank works.
      {
        id: "chog-slowmo",
        name: "Slow-mo Wonder",
        base: "cinematic",
        bpm: [88, 96],
        trim: 1.55,
        leads: ["chog-glitch", "bell"],
        data: {
          kit: {
            kick: { start: 150, end: 50, sweep: 0.035, decay: 0.24, click: 0.4, clickHp: 3200, body: 1.05 },
            hat: { hp: 7800, decay: 0.03, metal: 0.35, level: 0.24 },
            open: { hp: 7200, decay: 0.15, metal: 0.5, level: 0.32 },
          },
          bassTone: { wave: "sine", cutoff: 600, color: 300, q: 0.5, drive: 0.4, level: 0.18, sustain: 0.08 },
          bowed: { osc: [{ type: "sawtooth", detune: 14, level: 0.3 }, { type: "triangle", detune: 5, level: 0.3 }], cutoff: 2000, vib: 6 },
          vinyl: 0,
          fx: {
            drumLp: 17000,
            space: { size: 2.3, fb: 0.82, lp: 7500 },
            spaceSend: { harm: 0.55, snare: 0.5, lead: 0.5, fx: 0.4 },
            echoSend: { lead: 0.3, snare: 0.15 },
          },
          mix: { lead: 1 },
        },
      },
    ],
    lofihouse: [
      // Dusty Keys renderer, BOUNCY CASTLE: a punchy kick, a bright clap, open-hat skips, the bounce blip and chip pulse
      // into a short echo; a little dust, a driven octave sub.
      {
        id: "chog-bouncy",
        name: "Bouncy Castle",
        base: "classic",
        bpm: [124, 128],
        trim: 1.2,
        leads: ["chog-bounce", "chip"],
        data: {
          kit: {
            kick: { start: 130, end: 50, sweep: 0.045, decay: 0.28, click: 0.25, clickHp: 2600, body: 1 },
            hat: { hp: 8800, decay: 0.018, metal: 0.2, level: 0.24 },
            open: { hp: 7200, decay: 0.12, metal: 0.4, level: 0.34 },
          },
          bass: { wave: "triangle", drive: 0.8, hold: 0.7, octave: 0.3 },
          vinyl: 0.5,
          fx: {
            echo: { steps: 3, taps: 4, fb: 0.45, lp: 4500, hp: 600 },
            echoSend: { lead: 0.4, snare: 0.25, perc: 0.25 },
            spaceSend: { harm: 0.3, lead: 0.3, snare: 0.25 },
          },
          mix: { lead: 1, kick: -1.5 },
        },
      },
      // Sample Chop renderer, MEME TAPE: the chord sample crushed and wobbly like a meme ripped from a phone, deep
      // pump, heavy crackle, an 8-bit-ish hat, a dark 9-bit master.
      {
        id: "chog-memetape",
        name: "Meme Tape",
        base: "chop",
        bpm: [118, 124],
        trim: 1,
        leads: ["chog-glitch"],
        data: {
          kit: {
            kick: { start: 100, end: 45, sweep: 0.07, decay: 0.4, click: 0.04, drive: 1.4, body: 1.05 },
            hat: { hp: 7000, decay: 0.02, metal: 0, level: 0.2, crush: 5 },
          },
          chop: { osc: [{ type: "triangle", detune: -8, level: 0.6 }, { type: "sawtooth", detune: 14, level: 0.24 }], cutoff: 900, vib: 16, drive: 1.6 },
          pump: { bass: 0.3, harm: 0.18 },
          vinyl: 1.8,
          fx: {
            drumLp: 7500,
            master: { lp: 7000, crush: 9 },
            spaceSend: { lead: 0.35, snare: 0.2 },
          },
          mix: { tex: 1 },
        },
      },
    ],
    electro: [
      // Cold 808 renderer, TOY ROBOT: a tight clicky 808, a rubbery squelchy machine bass (more color, short decay),
      // shiny closed hats; dry and bouncy, only the snare into a short echo.
      {
        id: "chog-toybot",
        name: "Toy Robot",
        base: "classic",
        trim: 1.16,
        leads: ["chog-bounce"],
        data: {
          kit: {
            kick: { start: 200, end: 48, sweep: 0.04, decay: 0.4, click: 0.35, clickHp: 2600, drive: 1.2, body: 1 },
            hat: { hp: 8800, decay: 0.02, metal: 0.6, q: 1.2 },
            open: { hp: 7800, decay: 0.1, metal: 0.6, q: 1.2, level: 0.4 },
            accents: [0.5, 0.3, 0.55, 0.35],
          },
          bassTone: { cutoff: 700, color: 2400, q: [5, 6], decay: [0.1, 0.14], level: [0.2, 0.22], sub: [0.45, 0.45] },
          fx: {
            echo: { steps: 3, taps: 3, fb: 0.4, lp: 4000, hp: 600 },
            echoSend: { snare: 0.25, lead: 0.3 },
            spaceSend: { snare: 0.15, lead: 0.25 },
          },
          mix: { bass: 1 },
        },
      },
      // Alien Rave renderer, HYPER ALIEN: a wider, brighter hoover bending further, a squelchier FM bass, the robot
      // call ringing; a bright room on the hoover and snare.
      {
        id: "chog-hyperalien",
        name: "Hyper Alien",
        base: "alienrave",
        trim: 0.73,
        leads: ["chog-boing"],
        data: {
          bassTone: { cutoff: 200, color: 520, q: [5, 7], fm: [1.6, 2.6] },
          hoover: { cutoff: 1100, color: 3000, q: 2.6, bend: 3, detune: [-22, 3, 21], level: 0.2 },
          vox: { ring: 2, level: 0.75 },
          fx: {
            space: { size: 1.6, fb: 0.7, lp: 7000 },
            spaceSend: { harm: 0.35, snare: 0.3, lead: 0.3 },
            echoSend: { lead: 0.3, snare: 0.2 },
          },
          mix: { lead: 1 },
        },
      },
    ],
  },
} satisfies StationPack;

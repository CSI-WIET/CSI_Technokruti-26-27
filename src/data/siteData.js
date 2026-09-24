// All site copy and structured content lives here — edit freely,
// the components read from this single source of truth.

export const SITE = {
  name: "Technokruti",
  tagline: "The Game Is Afoot.",
  dates: "9-10 October 2026",
  venue: "Watumull Institute of Engineering and Technology, Ulhasnagar",
  blurb:
    "Somewhere between a locked-room mystery and a hackathon, a college festival went missing its imagination — until now. Technokruti is a two-day technical investigation: build, debug, and out-think 40+ teams across code, robotics, design and strategy, all staged as one long case file waiting to be solved.",
};

export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "The Case" },
  { id: "events", label: "Events" },
  { id: "schedule", label: "Schedule" },
  { id: "team", label: "The Bureau" },
  { id: "sponsors", label: "Patrons" },
  { id: "contact", label: "Contact" },
];

export const ABOUT_CLUES = [
  {
    label: "Exhibit A",
    title: "A Festival, Disguised as a Mystery",
    text:
      "Technokruti is our department's flagship technical festival — two days of competitive engineering wrapped in the atmosphere of 221B Baker Street. Every event is a 'case': a problem statement to interrogate, evidence to gather, and a solution to defend before the panel.",
  },
  {
    label: "Exhibit B",
    title: "Who It's For",
    text:
      "Undergraduate investigators from any discipline — coders, makers, designers and strategists — working solo or in teams of up to four. No deerstalker required, though we won't stop you.",
  },
  {
    label: "Exhibit C",
    title: "Why It Exists",
    text:
      "Because the best engineering, like the best detective work, starts with a question nobody else thought to ask. We built Technokruti to reward curiosity as much as correctness.",
  },
];

export const EVENT_GROUPS = [
  {
    id: "inter-college",
    label: "Inter-College",
    eyebrow: "Open to All Colleges",
    blurb: "Cross-campus cases, open to investigators from any institute.",
  },
  {
    id: "intra-college",
    label: "Intra-College",
    eyebrow: "WIET Investigators Only",
    blurb: "In-house cases, open exclusively to Watumull Institute students.",
  },
  {
    id: "fun-event",
    label: "Fun Events",
    eyebrow: "Light Cases, Low Stakes",
    blurb: "Quick, casual cases for anyone who just wants to play detective.",
  },
];

export const EVENTS = [
  // ---------- Inter-College ----------
  {
    id: "ideathon",
    group: "inter-college",
    title: "Ideathon",
    poster: "Ideathon.jpeg",
    date: "10 October 2026",
    prizePool: "₹25,000",
    entryFee: "₹250",
    registrationLink: "https://forms.gle/9ir3rzy9sHoufh7PA",
    coordinators: [
      { name: "Aarti Nipurte", phone: "7448087153" },
      { name: "Sofiya Shaikh", phone: "9820289381" },
    ],
  },
  {
    id: "the-courtroom",
    group: "inter-college",
    title: "The Courtroom",
    poster: "courtroom.jpeg",
    date: "10 October 2026",
    prizePool: "₹25,000",
    entryFee: "₹200",
    registrationLink:"https://docs.google.com/forms/d/e/1FAIpQLSdGSnpcwQ4U5ESMGfCekdm33zsKCsnCydmAPr51wbHQ3ByBJg/viewform?usp=publish-editor",
    coordinators: [
      { name: "Shrishti Pathak", phone: "9082897495" },
      { name: "Rounak Singh", phone: "8779031645" },
      { name: "Nirjara Gaonkar", phone: "8652556555" }
    ],
  },
  {
    id: "design-detective",
    group: "inter-college",
    title: "Design Detective",
    poster: "Design Detective.jpeg",
    date: "10 October 2026",
    prizePool: "₹25,000",
    entryFee: "₹150",
    registrationLink: "https://forms.gle/CtmAsepVZbicmCsg7",
    coordinators: [
      { name: "Soham Vaity", phone: "9321629301" },
      { name: "Nikhil More", phone: "9594452632" },
      { name: "Vikas Yadav", phone: "9820609671" },
      { name: "Muskan Rajput", phone: "7021160546" },
    ],
  },

  // ---------- Intra-College ----------
  {
    id: "crack-the-code",
    group: "intra-college",
    title: "Crack the Code",
    poster: "Crack the Code.jpeg",
    date: "10 October 2026",
    prizePool: "₹25,000",
    entryFee: "₹150",
    registrationLink: "https://forms.gle/pRDDqmbo329NcCu26",
    coordinators: [
      { name: "Nikhil More", phone: "9594452632" },
      { name: "Vedashree Jadhav", phone: "8329656560" },
      { name: "Raj Tribhuvane", phone: "9867122306" },
    ],
  },
  {
    id: "bug-detective",
    group: "intra-college",
    title: "Bug Detective",
    poster: "Bug detective.jpeg",
    date: "9 October 2026",
    prizePool: "₹25,000",
    entryFee: "₹150",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdnMvoep_bcFq57wtyXyNm27TBgUDGFrjZw7-6gjs4LmcYwrA/viewform?usp=header",
    coordinators: [
      { name: "Nikhil More", phone: "9594452632" },
      { name: "Sumit Rane", phone: "7977184901" },
      { name: "Rishikesh Taleti", phone: "9322542642" },
    ],
  },
  {
    id: "mind-palace",
    group: "intra-college",
    title: "The Mind Palace",
    poster: "mind palace.jpeg",
    date: "9 October 2026",
    prizePool: "₹25,000",
    entryFee: "₹50",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfOLI_qv9q_znlF-7IZHdkyG0VwozHKQ0mK8GIhUEHi5OMYww/viewform?usp=publish-editor",
    coordinators: [
      { name: "Srushti Devrukhkar ", phone: "9769353679" },
      { name: "Vedshree Jadhav", phone: "8329656560" },
      { name: "Ayushi Maurya", phone: "9152844927" },
    ],
  },
  {
    id: "watson-test",
    group: "intra-college",
    title: "Watson Test",
    poster: "Watson Test.jpeg",
    date: "9 October 2026",
    prizePool: "₹25,000",
    entryFee: "₹50",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeIAC2Q4n6RjWd5v5ifJs3j3U3smi00aNi2alP1DlBfLVo63g/viewform?usp=publish-editor",
    coordinators: [
      { name: "Soham Vaity", phone: "9321629301" },
      { name: "Raj Tribhuvane", phone: "9867122306" },
      { name: "Aditi Shrivastava", phone: "8261053828" },
    ],
  },
  {
    id: "Sherlock's-solution",
    group: "intra-college",
    title: "Sherlock's Solution",
    poster: "Sherlock's Solution.jpeg",
    date: "9 October 2026",
    prizePool: "₹25,000",
    entryFee: "₹100",
    registrationLink:
    "https://docs.google.com/forms/d/e/1FAIpQLSd2yin8iZcn6GD2SoN-dT3MCsgXFuHFzEXKUdhcWahzZfXoiA/viewform?usp=publish-editor",
    coordinators: [
      { name: "Rounak Singh", phone: "8779031645" },
      { name: "Tanmay Marathe", phone: "8976657972" },
      { name: "Atharva patil", phone: "9819804208" },
    ],
  },

  // ---------- Fun Events ----------
  {
    id: "detectives-map",
    group: "fun-event",
    title: "The Detective's Map",
    poster: "detective  Map.jpeg",
    date: "9–10 October 2026",
    prizePool: "₹25,000",
    entryFee: "₹50",
    coordinators: [
      { name: "Atharva Shinde", phone: "9820523573" },
      { name: "Darshil", phone: "8668570195" },
      { name: "Anish", phone: "7977949357" },
    ],
  },
  {
    id: "hear-the-clue",
    group: "fun-event",
    title: "Hear the Clue",
    poster: "hear clue.jpeg",
    date: "9–10 October 2026",
    prizePool: "₹25,000",
    entryFee: "₹20",
    coordinators: [
      { name: "Sakshi Gupta", phone: "9763332825" },
      { name: "Gauri Nair", phone: "7558805841" },
    ],
  },
  {
    id: "silent-clues",
    group: "fun-event",
    title: "Silent Clues",
    poster: "Silent Clues.jpeg",
    date: "9–10 October 2026",
    prizePool: "₹25,000",
    entryFee: "₹20",
    coordinators: [
      { name: "Tanvi Sagale", phone: "8369952040" },
      { name: "Sandesh Pawar", phone: "7558775188" },
    ],
  },
  {
    id: "missing-clue",
    group: "fun-event",
    title: "The Missing Clue",
    poster: "missing clue.jpeg",
    date: "9–10 October 2026",
    prizePool: "₹25,000",
    entryFee: "₹200",
    coordinators: [
      { name: "Pranav Tiwari", phone: "8452973171" },
      { name: "Vedant Madiwal", phone: "8850427012" },
    ],
  },
];

export const SCHEDULE = [
  {
    day: "Day I",
    date: "9 October 2026",
    subtitle: "The Summons",
    items: [
      { time: "10:00 ", title: "Inauguration", },
      { time: "11:00", title: "The Mind Palace", },
      { time: "12:00", title: "Bug Detective", },
      { time: "14:00", title: "Watson Test", },
      { time: "15:30", title: "Sherlock's Solution", },
      { time: "17:00", title: "The Missing Clue", },
    ],
  },
  {
    day: "Day II",
    date: "10 October 2026",
    subtitle: "The Investigation",
    items: [
      { time: "9:30", title: "Design Detective", },
      { time: "11:30", title: "Ideathon", },
      { time: "12:00", title: "Crack The code", },
      { time: "13:30", title: "The Courtroom", },

    ],
  },

];

export const FACULTY = [
  {
    name: "Prof. Dhananjay Raut",
    role: "Faculty Coordinator",
    photo: "dhananjay-raut.jpg",
    linkedin: "https://www.linkedin.com/in/dhananjay-raut-4b2b345a",
    github: "",
    email: "dhananjayraut2026@gmail.com",
  },
  {
    name: "Prof. Rucha Patwardhan",
    role: "Faculty Coordinator",
    photo: "rucha-patwardhan.jpg",
    linkedin: "",
    github: "",
    email: "ruchapp06@gmail.com",
  },
  {
    name: "Prof. Kalidas Bhavale",
    role: "Faculty Coordinator",
    photo: "kalidas-bhavale.jpg",
    linkedin: "",
    github: "",
    email: "kalidas.bhawale@gmail.com",
  },
  {
    name: "Prof. Mugdha Joshi",
    role: "Faculty Coordinator",
    photo: "mughdha-joshi.jpeg",
    linkedin: "https://www.linkedin.com/in/mugdha-joshi-434956439?trk=contact-info",
    github: "",
    email: "mughdhaojoshi@gmail.com",
  },
  {
    name: "Prof. Sneha Ingale",
    role: "Faculty Coordinator",
    photo: "sneha-ingale.jpg",
    linkedin: "",
    github: "",
    email: "Sneha.ingale@watumull.edu.in",
  },
];

export const CORE_COMMITTEE = [
  {
    name: "Pranav Tiwari",
    role: "Chairperson",
    photo: "pranav-tiwari.jpg",
    linkedin: "https://www.linkedin.com/in/pranav-tiwari-7ab693347",
    github: "https://github.com/hittydeveloper07",
    email: "",
  },
  {
    name: "Vedant Madiwal",
    role: "Secretary",
    photo: "vedant-madiwal.jpg",
    linkedin: "https://www.linkedin.com/in/vedant-madiwal-0b2859313",
    github: "https://github.com/vedantmadiwal",
    email: "",
  },
  {
    name: "Rounak Singh",
    role: "Co-Secretary",
    photo: "rounak-singh.jpg",
    linkedin: "https://www.linkedin.com/in/rounak-singh-557555389",
    github: "https://github.com/rounak-singh-2007",
    email: "",
  },
  {
    name: "Sai Padwal",
    role: "Treasurer",
    photo: "sai-padwal.jpg",
    linkedin: "https://www.linkedin.com/in/sai-padwal-5798a8332",
    github: "https://github.com/padwalsai5-cyber",
    email: "",
  },
  {
    name: "Soham Cherphale",
    role: "Documentation Head",
    photo: "soham-cherphale.jpg",
    linkedin: "https://www.linkedin.com/in/soham-cherphale-348b783bb",
    github: "https://github.com/001-Soham",
    email: "",
  },
  {
    name: "Raj Tribhuvane",
    role: "Technical Head",
    photo: "raj-tribhuvane.jpg",
    linkedin: "https://www.linkedin.com/in/raj-tribhuvane-b58259375",
    github: "https://github.com/tribhuvaneraj-ship-it",
    email: "",
  },
  {
    name: "Nikhil More",
    role: "Technical Co-Head",
    photo: "nikhil-more.jpg",
    linkedin: "https://www.linkedin.com/in/nikhil-more-586aa634b",
    github: "https://github.com/nik0407-code",
    email: "",
  },
  {
    name: "Vikas Yadav",
    role: "Technical Co-Head",
    photo: "vikas-yadav.jpg",
    linkedin: "https://www.linkedin.com/in/vikas-yadav-068307412",
    github: "https://github.com/vikas2806",
    email: "",
  },
  {
    name: "Soham Vaity",
    role: "Media Head",
    photo: "soham-vaity.jpg",
    linkedin: "https://www.linkedin.com/in/soham-vaity-15567532",
    github: "https://github.com/sohamvaity-weddedmyth",
    email: "",
  },
  {
    name: "Srishti Pathak",
    role: "Media Co-Head",
    photo: "srishti-pathak.jpg",
    linkedin: "https://www.linkedin.com/in/shrishti-pathak-63a0003a8",
    github: "https://github.com/shripathak29",
    email: "",
  },
  {
    name: "Vineet Poojary",
    role: "Media Co-Head",
    photo: "vineet-poojary.jpg",
    linkedin: "https://www.linkedin.com/in/vineet-poojary-3558b13a3",
    github: "https://github.com/Vineet-spec",
    email: "",
  },
  {
    name: "Arnav Shedge",
    role: "Logistics Head",
    photo: "arnav-shedge.jpg",
    linkedin: "https://www.linkedin.com/in/arnav-shedge-823064439?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    github: "https://github.com/arnavshedge007-code",
    email: "",
  },
  {
    name: "Sahil Rangwani",
    role: "Logistics Co-Head",
    photo: "sahil-rangwani.jpg",
    linkedin: "https://www.linkedin.com/in/sahil-rangwani-b761a531a",
    github: "https://github.com/sahilrangwani85",
    email: "",
  },
  {
    name: "Mukti Chetwani",
    role: "Logistics Co-Head",
    photo: "mukti-chetwani.jpg",
    linkedin: "https://www.linkedin.com/in/mukti-chetwani-a0ba44365",
    github: "https://github.com/muktichetwani01",
    email: "",
  },
];

export const SPONSORS = {
  title: [],
  platinum: [
    { name: "Imperial Overseas", tier: "Platinum" },
  ],
  gold: [],
  silver: [],
};

export const CONTACT = {
  email: "csi@watumull.edu",
  phone: "+91 8452973171",

  venueName: "Watumull Institute of Engineering and Technology",
  address:
    "Inside the CHM College Campus, directly opposite Ulhasnagar Railway Station, Ulhasnagar, Maharashtra",
  // Used by the embedded map in Contact.jsx
  map: {
    lat: 19.2203277,
    lng: 73.163027,
    zoom: 16,
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/csi_wiet?utm_source=qr&stkn=MWxobG1mbnZ4MzBwNQ==" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/csi-wiet/posts/?viewAsMember=true" },

  ],
};

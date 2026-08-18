export type Member = {
  name: string;
  role: string;
  shortRole: string;
  description: string;
  initials: string;
};

export type Project = {
  eyebrow: string;
  title: string;
  summary: string;
  highlights: string[];
  youtubeUrl?: string;
  thumbnail?: string;
  linkLabel?: string;
};

export const team: Member[] = [
  {
    name: "Nguyễn Minh Trung",
    role: "Embedded Firmware Engineer",
    shortRole: "Firmware",
    initials: "MT",
    description:
      "Develops low-level embedded software and device-control logic, bridging sensors, actuators, communications, and real-time system behavior.",
  },
  {
    name: "Lê Anh Sơn",
    role: "PCB Design Engineer",
    shortRole: "PCB Design",
    initials: "AS",
    description:
      "Turns electronic architecture into manufacturable PCB layouts with a focus on clean routing, integration, reliability, and hardware readiness.",
  },
  {
    name: "Lê Đình Minh Nhật",
    role: "Team Lead / Project Manager",
    shortRole: "Team Lead",
    initials: "MN",
    description:
      "Leads team coordination, project planning, and cross-discipline execution while guiding mechanical design and system integration toward milestone delivery.",
  },
  {
    name: "Nguyễn Công Thành",
    role: "Electronics Hardware Engineer (Schematic Design)",
    shortRole: "Electronics",
    initials: "CT",
    description:
      "Owns schematic-level hardware design, component-level architecture, signal interfaces, power paths, and electronic system integration.",
  },
  {
    name: "Trần Thị Thơ",
    role: "Hardware Test & Validation Engineer",
    shortRole: "Test & Validation",
    initials: "TT",
    description:
      "Builds repeatable validation workflows, verifies system behavior, documents issues, and helps move prototypes toward reliable demonstrations.",
  },
];

export const projects: Project[] = [
  {
    eyebrow: "Human-Robot Interaction",
    title: "Interactive Reception Robot",
    summary:
      "A full-stack mechatronic platform conceived to welcome visitors, deliver information, and demonstrate how mechanics, electronics, embedded control, sensing, and user interaction come together in one deployable robotic system.",
    highlights: [
      "System-level mechatronic integration",
      "Embedded control and hardware coordination",
      "Human-facing interaction workflow",
    ],
    thumbnail: "/reception-robot.jpg",
    // Paste your team's exact YouTube URL here when available.
    youtubeUrl: "",
    linkLabel: "YouTube link pending",
  },
  {
    eyebrow: "Soft Robotics / Multi-Robot Systems",
    title: "ViART: Swarm Robots with Soft Tactile Sensing for Autonomous Navigation",
    summary:
      "A swarm-oriented robotic navigation concept that brings soft tactile perception directly onto mobile robots. Instead of treating physical contact purely as failure, the platform turns contact into useful environmental information for robust local interaction and autonomous motion.",
    highlights: [
      "Vision-based soft tactile sensing",
      "Autonomous robotic vehicles",
      "Contact-aware swarm navigation",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=VvaEkjHHqJM",
    thumbnail: "https://img.youtube.com/vi/VvaEkjHHqJM/hqdefault.jpg",
    linkLabel: "Watch on YouTube",
  },
  {
    eyebrow: "Aerial Robotics / Safety",
    title: "衝突後落ちないドローン（変形可能なプロペラ付け）",
    summary:
      "A collision-tolerant drone concept built around deformable propellers. The mechanical design is intended to accommodate impact through controlled deformation, reduce damage risk, and preserve flight capability after contact, shifting drone safety from avoidance-only toward physical resilience.",
    highlights: [
      "Deformable propeller architecture",
      "Collision accommodation",
      "Safety-oriented aerial robotics",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=IQQy3kAtIfw",
    thumbnail: "https://img.youtube.com/vi/IQQy3kAtIfw/hqdefault.jpg",
    linkLabel: "Watch related demo",
  },
  {
    eyebrow: "Multimodal Sensing",
    title: "Vi2TaP: A Cross-Polarization Based Mechanism for Perception Transition in Tactile-Proximity Sensing",
    summary:
      "A compact multimodal sensing concept that uses cross-polarization to transition between proximity/visual perception and tactile perception. The approach highlights how optical design and soft sensing can be integrated to give robotic fingertips richer information before and during contact.",
    highlights: [
      "Cross-polarization mechanism",
      "Tactile-proximity perception transition",
      "Soft sensorized robotic fingertips",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=apDyYN9bh5Y",
    thumbnail: "https://img.youtube.com/vi/apDyYN9bh5Y/hqdefault.jpg",
    linkLabel: "Watch on YouTube",
  },
];

export const capabilities = [
  "Embedded Firmware",
  "PCB Design",
  "Schematic Design",
  "Mechanical / 3D CAD",
  "Prototype Integration",
  "Hardware Validation",
  "Robotics",
  "Soft Sensing",
];

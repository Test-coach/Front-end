const dummyCourses = [
  {
    title: "SSC CGL Complete Preparation",
    slug: "ssc-cgl-complete-preparation",
    description: "Prepare for the SSC CGL exam with full syllabus coverage and mock tests.",
    thumbnail: "https://example.com/images/ssc-cgl.jpg",
    duration: 60,
    price: { amount: 999, currency: "INR" },
    features: ["Full syllabus", "Mock tests", "Performance analysis"],
    category: "government",
    level: "intermediate",
    tests: [
      {
        title: "CGL Tier-I Mock",
        description: "Mock test for Tier-I covering Quant, Reasoning, English, and GA.",
        duration: 60,
        difficulty: "medium",
        content: "Solve questions from Quantitative Aptitude, English, Reasoning, and GA.",
        minWPM: 0,
        maxErrors: null
      }
    ],
    requirements: ["Graduation", "Basic computer knowledge"],
    isPublished: true,
    isFeatured: true,
    enrollmentCount: 1200,
    rating: { average: 4.6, count: 300 },
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  },
  {
    title: "SSC CHSL Typing Mastery",
    slug: "ssc-chsl-typing-mastery",
    description: "Focused typing practice for SSC CHSL skill test with live speed tracking.",
    thumbnail: "https://example.com/images/ssc-chsl.jpg",
    duration: 30,
    price: { amount: 499, currency: "INR" },
    features: ["Typing speed tests", "Keyboard shortcuts", "Skill test simulation"],
    category: "government",
    level: "beginner",
    tests: [
      {
        title: "Typing Skill Test",
        description: "Practice test for CHSL typing skill assessment.",
        duration: 10,
        difficulty: "easy",
        content: "The quick brown fox jumps over the lazy dog...",
        minWPM: 35,
        maxErrors: 3
      }
    ],
    requirements: ["Basic computer usage"],
    isPublished: true,
    isFeatured: false,
    enrollmentCount: 800,
    rating: { average: 4.3, count: 150 },
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  },
  {
    title: "Delhi Police Constable Exam Guide",
    slug: "delhi-police-constable-exam-guide",
    description: "Complete guide for Delhi Police Constable recruitment with practice sets.",
    thumbnail: "https://example.com/images/delhi-police.jpg",
    duration: 45,
    price: { amount: 799, currency: "INR" },
    features: ["Previous year papers", "Mock tests", "Physical test tips"],
    category: "government",
    level: "intermediate",
    tests: [
      {
        title: "Delhi Police Practice Set",
        description: "Mixed questions from reasoning, current affairs, and law awareness.",
        duration: 40,
        difficulty: "medium",
        content: "This practice set includes general awareness and police-specific questions.",
        minWPM: 0,
        maxErrors: null
      }
    ],
    requirements: ["10+2 qualification"],
    isPublished: true,
    isFeatured: true,
    enrollmentCount: 950,
    rating: { average: 4.4, count: 200 },
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  },
  {
    title: "UP Police SI Typing & Paper Practice",
    slug: "up-police-si-typing-paper-practice",
    description: "Typing practice and question bank for UP Police Sub Inspector exam.",
    thumbnail: "https://example.com/images/up-police.jpg",
    duration: 40,
    price: { amount: 699, currency: "INR" },
    features: ["Typing drills", "Law section practice", "Mock tests"],
    category: "government",
    level: "advanced",
    tests: [
      {
        title: "SI Typing Test",
        description: "Typing test simulating real exam conditions.",
        duration: 15,
        difficulty: "hard",
        content: "Type the legal terms and sections provided below as fast and accurately as possible.",
        minWPM: 40,
        maxErrors: 2
      }
    ],
    requirements: ["Graduation", "Hindi typing skill"],
    isPublished: true,
    isFeatured: false,
    enrollmentCount: 650,
    rating: { average: 4.2, count: 100 },
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  }
];

export default dummyCourses;

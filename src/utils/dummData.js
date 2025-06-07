const dummyCourses = [
  {
    _id: "60f7c0d9e1d3c2b1c4a2a8d1", // SSC CGL Complete Preparation
    title: "SSC CGL Complete Preparation",
    slug: "ssc-cgl-complete-preparation",
    description: "Prepare for the SSC CGL exam with full syllabus coverage and mock tests.",
    thumbnail: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    _id: "60f7c0d9e1d3c2b1c4a2a8d2", // SSC CHSL Typing Mastery
    title: "SSC CHSL Typing Mastery",
    slug: "ssc-chsl-typing-mastery",
    description: "Focused typing practice for SSC CHSL skill test with live speed tracking.",
    thumbnail: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    _id: "60f7c0d9e1d3c2b1c4a2a8d3", // Delhi Police Constable Exam Guide
    title: "Delhi Police Constable Exam Guide",
    slug: "delhi-police-constable-exam-guide",
    description: "Complete guide for Delhi Police Constable recruitment with practice sets.",
    thumbnail: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    _id: "60f7c0d9e1d3c2b1c4a2a8d4", // UP Police SI Typing & Paper Practice
    title: "UP Police SI Typing & Paper Practice",
    slug: "up-police-si-typing-paper-practice",
    description: "Typing practice and question bank for UP Police Sub Inspector exam.",
    thumbnail: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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

const dummyTypingTests = [
  // SSC CHSL Typing Mastery Course Tests
  {
    _id: "60f8d0d9e1d3c2b1c4a2a9d1",
    title: "CHSL Basic Typing Practice",
    course: "60f7c0d9e1d3c2b1c4a2a8d2", // SSC CHSL Typing Mastery
    description: "Basic typing practice for SSC CHSL beginners.",
    duration: 10,
    difficulty: "easy",
    passage: {
      content: "The Staff Selection Commission conducts the Combined Higher Secondary Level examination every year for recruiting candidates to various posts in government departments and ministries.",
      wordCount: 25,
      language: "English",
      category: "government"
    },
    requirements: {
      minWPM: 25,
      maxErrors: 5,
      minAccuracy: 80
    },
    settings: {
      allowBackspace: true,
      caseSensitive: false,
      autoScroll: true,
      highlightErrors: true,
      soundEnabled: false
    },
    stats: {
      totalAttempts: 450,
      averageWPM: 28,
      averageAccuracy: 82,
      successRate: 75
    },
    isActive: true,
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  },
  {
    _id: "60f8d0d9e1d3c2b1c4a2a9d2",
    title: "CHSL Speed Typing Test",
    course: "60f7c0d9e1d3c2b1c4a2a8d2", // SSC CHSL Typing Mastery
    description: "Speed typing test for CHSL skill assessment.",
    duration: 10,
    difficulty: "medium",
    passage: {
      content: "The quick brown fox jumps over the lazy dog. This pangram sentence contains every letter of the English alphabet at least once. It is commonly used for typing practice and font display.",
      wordCount: 31,
      language: "English",
      category: "general"
    },
    requirements: {
      minWPM: 35,
      maxErrors: 3,
      minAccuracy: 90
    },
    settings: {
      allowBackspace: true,
      caseSensitive: false,
      autoScroll: true,
      highlightErrors: true,
      soundEnabled: true
    },
    stats: {
      totalAttempts: 320,
      averageWPM: 37,
      averageAccuracy: 92,
      successRate: 68
    },
    isActive: true,
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  },
  {
    _id: "60f8d0d9e1d3c2b1c4a2a9d3",
    title: "CHSL Advanced Typing Challenge",
    course: "60f7c0d9e1d3c2b1c4a2a8d2", // SSC CHSL Typing Mastery
    description: "Advanced typing test with complex sentences for CHSL preparation.",
    duration: 15,
    difficulty: "hard",
    passage: {
      content: "The Government of India has implemented various schemes and policies to promote digital literacy and e-governance initiatives across different sectors including education, healthcare, and public administration.",
      wordCount: 26,
      language: "English",
      category: "government"
    },
    requirements: {
      minWPM: 40,
      maxErrors: 2,
      minAccuracy: 95
    },
    settings: {
      allowBackspace: false,
      caseSensitive: true,
      autoScroll: false,
      highlightErrors: true,
      soundEnabled: true
    },
    stats: {
      totalAttempts: 180,
      averageWPM: 42,
      averageAccuracy: 94,
      successRate: 55
    },
    isActive: true,
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  },

  // UP Police SI Typing & Paper Practice Course Tests
  {
    _id: "60f8d0d9e1d3c2b1c4a2a9d4",
    title: "UP Police SI Basic Typing",
    course: "60f7c0d9e1d3c2b1c4a2a8d4", // UP Police SI Typing & Paper Practice
    description: "Basic typing practice for UP Police Sub Inspector candidates.",
    duration: 15,
    difficulty: "medium",
    passage: {
      content: "उत्तर प्रदेश पुलिस विभाग में सब इंस्पेक्टर के पद के लिए आयोजित होने वाली परीक्षा में टाइपिंग स्किल का विशेष महत्व है। अभ्यर्थियों को हिंदी और अंग्रेजी दोनों भाषाओं में टाइपिंग की गति बढ़ानी चाहिए।",
      wordCount: 32,
      language: "Hindi",
      category: "government"
    },
    requirements: {
      minWPM: 30,
      maxErrors: 4,
      minAccuracy: 85
    },
    settings: {
      allowBackspace: true,
      caseSensitive: false,
      autoScroll: true,
      highlightErrors: true,
      soundEnabled: false
    },
    stats: {
      totalAttempts: 280,
      averageWPM: 32,
      averageAccuracy: 87,
      successRate: 62
    },
    isActive: true,
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  },
  {
    _id: "60f8d0d9e1d3c2b1c4a2a9d5",
    title: "UP Police Legal Typing Test",
    course: "60f7c0d9e1d3c2b1c4a2a8d4", // UP Police SI Typing & Paper Practice
    description: "Legal terminology typing test for UP Police SI exam preparation.",
    duration: 15,
    difficulty: "hard",
    passage: {
      content: "The Indian Penal Code, Criminal Procedure Code, and Indian Evidence Act are the three fundamental laws that govern the criminal justice system in India. Section 302 of IPC deals with punishment for murder.",
      wordCount: 33,
      language: "English",
      category: "legal"
    },
    requirements: {
      minWPM: 40,
      maxErrors: 2,
      minAccuracy: 95
    },
    settings: {
      allowBackspace: false,
      caseSensitive: true,
      autoScroll: false,
      highlightErrors: true,
      soundEnabled: true
    },
    stats: {
      totalAttempts: 150,
      averageWPM: 41,
      averageAccuracy: 93,
      successRate: 48
    },
    isActive: true,
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  },
  {
    _id: "60f8d0d9e1d3c2b1c4a2a9d6",
    title: "UP Police Procedure Typing",
    course: "60f7c0d9e1d3c2b1c4a2a8d4", // UP Police SI Typing & Paper Practice
    description: "Police procedure and law enforcement typing practice.",
    duration: 12,
    difficulty: "medium",
    passage: {
      content: "Law enforcement officers must follow proper procedures during arrests, investigations, and evidence collection. The chain of custody must be maintained to ensure the integrity of evidence in court proceedings.",
      wordCount: 29,
      language: "English",
      category: "legal"
    },
    requirements: {
      minWPM: 35,
      maxErrors: 3,
      minAccuracy: 90
    },
    settings: {
      allowBackspace: true,
      caseSensitive: false,
      autoScroll: true,
      highlightErrors: true,
      soundEnabled: false
    },
    stats: {
      totalAttempts: 210,
      averageWPM: 37,
      averageAccuracy: 91,
      successRate: 65
    },
    isActive: true,
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  },

  // SSC CGL Complete Preparation Course Tests (General typing for overall preparation)
  {
    _id: "60f8d0d9e1d3c2b1c4a2a9d7",
    title: "CGL General Typing Practice",
    course: "60f7c0d9e1d3c2b1c4a2a8d1", // SSC CGL Complete Preparation
    description: "General typing practice for SSC CGL candidates to improve speed and accuracy.",
    duration: 8,
    difficulty: "easy",
    passage: {
      content: "The Staff Selection Commission Combined Graduate Level examination is conducted annually to recruit candidates for various Group B and Group C posts in ministries and departments of the Government of India.",
      wordCount: 30,
      language: "English",
      category: "government"
    },
    requirements: {
      minWPM: 25,
      maxErrors: 5,
      minAccuracy: 80
    },
    settings: {
      allowBackspace: true,
      caseSensitive: false,
      autoScroll: true,
      highlightErrors: true,
      soundEnabled: false
    },
    stats: {
      totalAttempts: 680,
      averageWPM: 27,
      averageAccuracy: 83,
      successRate: 78
    },
    isActive: true,
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  },
  {
    _id: "60f8d0d9e1d3c2b1c4a2a9d8",
    title: "CGL Technical Typing Test",
    course: "60f7c0d9e1d3c2b1c4a2a8d1", // SSC CGL Complete Preparation
    description: "Technical terminology typing test for CGL aspirants.",
    duration: 10,
    difficulty: "medium",
    passage: {
      content: "Quantitative Aptitude, General Intelligence and Reasoning, General Awareness, and English Comprehension are the four sections in SSC CGL Tier-I examination. Time management is crucial for success.",
      wordCount: 26,
      language: "English",
      category: "academic"
    },
    requirements: {
      minWPM: 30,
      maxErrors: 4,
      minAccuracy: 85
    },
    settings: {
      allowBackspace: true,
      caseSensitive: false,
      autoScroll: true,
      highlightErrors: true,
      soundEnabled: true
    },
    stats: {
      totalAttempts: 420,
      averageWPM: 32,
      averageAccuracy: 87,
      successRate: 72
    },
    isActive: true,
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  },

  // Delhi Police Constable Exam Guide Course Tests
  {
    _id: "60f8d0d9e1d3c2b1c4a2a9d9",
    title: "Delhi Police Basic Typing",
    course: "60f7c0d9e1d3c2b1c4a2a8d3", // Delhi Police Constable Exam Guide
    description: "Basic typing practice for Delhi Police Constable recruitment preparation.",
    duration: 10,
    difficulty: "easy",
    passage: {
      content: "Delhi Police is the law enforcement agency for the National Capital Territory of Delhi. The force is responsible for maintaining law and order, preventing crime, and ensuring public safety in the capital city.",
      wordCount: 32,
      language: "English",
      category: "government"
    },
    requirements: {
      minWPM: 25,
      maxErrors: 5,
      minAccuracy: 80
    },
    settings: {
      allowBackspace: true,
      caseSensitive: false,
      autoScroll: true,
      highlightErrors: true,
      soundEnabled: false
    },
    stats: {
      totalAttempts: 380,
      averageWPM: 28,
      averageAccuracy: 82,
      successRate: 70
    },
    isActive: true,
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  },
  {
    _id: "60f8d0d9e1d3c2b1c4a2a9d10",
    title: "Delhi Police Procedure Typing",
    course: "60f7c0d9e1d3c2b1c4a2a8d3", // Delhi Police Constable Exam Guide
    description: "Police procedures and protocols typing practice for constable exam.",
    duration: 12,
    difficulty: "medium",
    passage: {
      content: "Police constables are the first point of contact between the public and the police force. They are responsible for beat patrolling, traffic management, crowd control, and assisting in criminal investigations.",
      wordCount: 28,
      language: "English",
      category: "government"
    },
    requirements: {
      minWPM: 30,
      maxErrors: 4,
      minAccuracy: 85
    },
    settings: {
      allowBackspace: true,
      caseSensitive: false,
      autoScroll: true,
      highlightErrors: true,
      soundEnabled: true
    },
    stats: {
      totalAttempts: 250,
      averageWPM: 31,
      averageAccuracy: 86,
      successRate: 68
    },
    isActive: true,
    createdBy: "60f7c0d9e1d3c2b1c4a2a8d1"
  }
];


export { dummyCourses, dummyTypingTests };
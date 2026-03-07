// Knowledge Base for RAG-powered Chatbot
// This contains structured information about Yelena Yu for the chatbot to reference

export const knowledgeBase = {
  profile: {
    headline: "AI/ML engineer and researcher focused on generative AI, RAG systems, healthcare ML, and time-series modeling.",
    shortBio:
      "Yelena Yu is a computer science master's student and AI/ML practitioner with experience across generative AI, RAG assistants, healthcare forecasting, deep learning, and cloud-based ML systems.",
    contactBlurb:
      "You can reach Yelena through her portfolio website or by email.",
  },

  personal: {
    name: "Yelena Yu",
    currentStatus: "Master's student in Computer Science at Northeastern University, in final semester",
    education: [
      {
        degree: "Master's in Computer Science",
        university: "Northeastern University",
        status: "Current - Final semester",
        focus: "Machine learning, data mining, healthcare applications"
      },
      {
        degree: "Applied Financial Mathematics",
        university: "Pepperdine University",
        status: "Completed",
        focus: "Mathematical foundations and analytical skills"
      }
    ],
    specializations: [
      "Machine Learning",
      "Data Mining",
      "Healthcare AI",
      "Time Series Forecasting",
      "Generative AI",
      "RAG Systems"
    ],
    contact: {
      email: "yu.yue16@northeastern.edu",
      website: "https://yelena.info"
    }
  },

  experience: [
    {
      title: "Software Engineer Intern",
      company: "Amazon AWS Web Services",
      duration: "May 2025 - August 2025",
      location: "Arlington, VA",
      type: "internship",
      description: "Designed and implemented generative AI agents for internal tools infrastructure used by AWS Security engineering teams. Developed a RAG-enhanced generative AI assistant at Amazon AWS Security, specifically designed to ground LLM outputs in internal documentation including Wiki, Asana, and Taskei.",
      technologies: ["Python", "Generative AI", "LLM", "AWS", "Machine Learning", "AWS Security", "RAG"],
      achievements: [
        "Designed and implemented generative AI agents for AWS Security infrastructure",
        "Developed RAG-enhanced AI assistant grounded in internal documentation",
        "Minimized confabulation risks through verified source retrieval and summarization"
      ],
      keywords: ["aws", "amazon", "security", "rag", "generative ai", "llm", "infrastructure"]
    },
    {
      title: "Graduate Researcher",
      company: "HAI Lab - Northeastern University",
      duration: "January 2025 - Present",
      location: "Remote",
      type: "research",
      description: "Contributing to an HCI-oriented project focused on personality inference using Large Language Models, extracting movie character scripts and celebrity interviews to evaluate personality traits.",
      technologies: ["Python", "LLM", "HCI", "Web Development", "Data Analysis", "Natural Language Processing"],
      achievements: [
        "Contributing to LLM-based personality inference research using movie scripts and interviews",
        "Participating in peer-review processes and research quality assurance",
        "Designing web-based UI demos to improve research accessibility"
      ],
      keywords: ["research", "hci", "personality", "llm", "northeastern", "peer review"]
    },
    {
      title: "Data Scientist Intern - AI/ML for Health Forecasting",
      company: "Arcadia.io",
      duration: "May 2024 - December 2024",
      location: "Remote",
      type: "internship",
      description: "Automated data processing workflows in AWS RedShift for data cleaning and pre-processing, managing processed data in Amazon S3 and reducing data handling time from 1 hour to 5 minutes through reusable SQL queries.",
      technologies: ["Python", "AWS RedShift", "Amazon S3", "PySpark", "Seaborn", "AWS SageMaker", "scikit-learn", "K-means", "KNN", "XGBoost"],
      achievements: [
        "Reduced data handling time from 1 hour to 5 minutes with automated workflows",
        "Improved respiratory disease prediction accuracy by 17% using AUC evaluation",
        "Developed end-to-end ML pipeline from data processing to predictive modeling"
      ],
      keywords: ["arcadia", "health", "forecasting", "aws", "redshift", "s3", "pyspark", "machine learning"]
    }
  ],

  projects: [
    {
      title: "Deep Learning for Heart Failure Prediction",
      category: "research",
      description: "Designed novel architectures for heart failure prediction, enabling integration of time-series vital data with demographic info. Implemented RNN-GRU, RNN-LSTM, and Transformer models in PyTorch, successfully forecasting heart failure for various future time windows.",
      technologies: ["Transformer", "RNN-GRU", "RNN-LSTM", "PyTorch", "Optuna"],
      achievements: [
        "Achieved highest AUC of 0.87",
        "Earned 2nd place at Poster Day among 100+ research projects",
        "Novel architecture design for time-series and demographic data integration"
      ],
      github: "https://github.com/YelenaYY/Arcadia-Northeastern-University_Research_Capstone",
      keywords: ["heart failure", "deep learning", "transformer", "rnn", "lstm", "gru", "pytorch", "healthcare", "prediction"]
    },
    {
      title: "Movie Recommender",
      category: "web application",
      description: "A Movie Recommender system using the R programming language and the Shiny framework with collaborative filtering algorithms.",
      technologies: ["R", "Shiny", "User-Based Collaborative Filtering", "Item-Based Collaborative Filtering"],
      achievements: [
        "Implemented both user-based and item-based collaborative filtering",
        "Created interactive web application using Shiny framework"
      ],
      github: "https://github.com/YelenaYY/Movie-Recommender",
      demo: "https://yelenayu.shinyapps.io/movie_recommender/",
      keywords: ["movie", "recommender", "recommendation", "r", "shiny", "collaborative filtering"]
    },
    {
      title: "Automated Stock Analysis & Trading",
      category: "algorithmic trading",
      description: "A Python algorithm fetching real-time financial market data from open sources, such as IEXCloud, and AlphaVantage, to automate transaction decisions based on calculated indicators.",
      technologies: ["Python", "AWS EC2"],
      achievements: [
        "Real-time data fetching from multiple financial APIs",
        "Automated trading decision algorithms",
        "Cloud deployment on AWS EC2"
      ],
      github: "https://github.com/YelenaYY/Stock-Trading",
      keywords: ["stock", "trading", "finance", "python", "aws", "ec2", "automation", "api"]
    },
    {
      title: "Police Fairness Analysis",
      category: "statistical analysis",
      description: "A project using hierarchical Bayesian regression model to investigate discrimination against Asians during traffic stops.",
      technologies: ["R", "JAGS", "Markov Chain Monte-Carlo Simulations", "Hierarchical Bayesian Regression"],
      achievements: [
        "Advanced statistical modeling using Bayesian methods",
        "Social impact research on racial fairness",
        "MCMC simulation implementation"
      ],
      github: "https://github.com/YelenaYY/Police-Fairness-Analysis",
      keywords: ["police", "fairness", "bayesian", "regression", "discrimination", "statistics", "mcmc"]
    },
    {
      title: "Plant Moisture and Temperature Monitor",
      category: "iot",
      description: "A Raspberry Pi project that measures soil moisture and temperature to help monitor plant health with data visualization.",
      technologies: ["Python", "Raspberry Pi", "D3.js"],
      achievements: [
        "IoT sensor integration with Raspberry Pi",
        "Real-time data visualization using D3.js",
        "Plant health monitoring system"
      ],
      keywords: ["plant", "iot", "raspberry pi", "sensors", "d3js", "monitoring", "temperature", "moisture"]
    }
  ],

  skills: {
    programming: ["Python", "Java", "R", "C/C++", "JavaScript", "HTML", "CSS"],
    frameworks: ["React", "NodeJS", "Flask", "D3.js", "Material UI", "Shiny"],
    databases: ["MongoDB", "MySQL"],
    cloud: ["AWS S3", "AWS EC2", "AWS SageMaker", "AWS RedShift"],
    ml_ai: ["PyTorch", "scikit-learn", "XGBoost", "K-means", "KNN", "Transformer", "RNN-LSTM", "RNN-GRU"],
    tools: ["Git", "Docker", "PySpark", "Seaborn", "Optuna", "JAGS"],
    specialties: ["Machine Learning", "Deep Learning", "Time Series Forecasting", "RAG Systems", "Generative AI", "Statistical Analysis", "Data Mining"]
  },

  openSource: [
    {
      project: "SKTIME",
      role: "Open-source contributor",
      description: "Python ML and AI framework for time series forecasting. Developed outlier detection algorithm using sliding window approach and KNN algorithms, based on latest research publications.",
      achievements: [
        "Developed innovative outlier detection algorithm",
        "Maintained estimator wrappers for SKTIME interface",
        "Collaborated with mentors to enhance library performance"
      ],
      keywords: ["sktime", "open source", "time series", "forecasting", "python", "outlier detection"]
    }
  ],

  interests: [
    "Healthcare AI applications",
    "Time series forecasting",
    "Generative AI and RAG systems",
    "Statistical modeling",
    "Open-source contributions",
    "Research in HCI and personality inference"
  ]
};

export const detectIntent = (query) => {
  const q = String(query || "").toLowerCase();

  if (/\b(contact|email|reach|linkedin|github|website)\b/.test(q)) return "contact";
  if (/\b(skill|skills|tech|stack|technology|technologies|tool|tools)\b/.test(q)) return "skills";
  if (/\b(experience|background|worked|career|internship|research|ai|ml|machine learning|llm|rag)\b/.test(q)) return "experience";
  if (/\b(project|projects|built|build|portfolio|demo)\b/.test(q)) return "projects";
  if (/\b(education|degree|study|university|school)\b/.test(q)) return "education";
  if (/\b(open source|opensource|sktime)\b/.test(q)) return "openSource";
  if (/\b(interest|interests)\b/.test(q)) return "interests";

  return "general";
};

const tokenize = (text) =>
  String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

const scoreItem = (item, queryTokens) => {
  const haystack = JSON.stringify(item).toLowerCase();
  let score = 0;

  for (const token of queryTokens) {
    if (haystack.includes(token)) score += 1;
  }

  return score;
};

export const rankItems = (items, query, limit = 5) => {
  const queryTokens = tokenize(query);

  return (items || [])
    .map((item) => ({ item, score: scoreItem(item, queryTokens) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.item);
};

export const buildContextForIntent = (intent, kb = knowledgeBase) => {
  switch (intent) {
    case "contact":
      return {
        kind: "contact",
        facts: {
          name: kb.personal.name,
          email: kb.personal.contact.email,
          website: kb.personal.contact.website,
          contactBlurb: kb.profile.contactBlurb
        }
      };

    case "skills":
      return {
        kind: "skills",
        facts: {
          headline: kb.profile.headline,
          specializations: kb.personal.specializations,
          skills: kb.skills,
          topExperience: kb.experience.slice(0, 3)
        }
      };

    case "experience":
      return {
        kind: "experience",
        facts: {
          headline: kb.profile.headline,
          shortBio: kb.profile.shortBio,
          specializations: kb.personal.specializations,
          experience: kb.experience,
          selectedProjects: kb.projects.slice(0, 3),
          openSource: kb.openSource
        }
      };

    case "projects":
      return {
        kind: "projects",
        facts: {
          headline: kb.profile.headline,
          projects: kb.projects,
          openSource: kb.openSource
        }
      };

    case "education":
      return {
        kind: "education",
        facts: {
          currentStatus: kb.personal.currentStatus,
          education: kb.personal.education,
          specializations: kb.personal.specializations
        }
      };

    case "openSource":
      return {
        kind: "openSource",
        facts: {
          openSource: kb.openSource,
          skills: kb.skills
        }
      };

    case "interests":
      return {
        kind: "interests",
        facts: {
          interests: kb.interests,
          specializations: kb.personal.specializations
        }
      };

    default:
      return {
        kind: "general",
        facts: {
          headline: kb.profile.headline,
          shortBio: kb.profile.shortBio,
          currentStatus: kb.personal.currentStatus,
          specializations: kb.personal.specializations,
          experience: kb.experience.slice(0, 2),
          projects: kb.projects.slice(0, 2),
          contact: kb.personal.contact
        }
      };
  }
};

export const retrieveForQuestion = (query, kb = knowledgeBase) => {
  const intent = detectIntent(query);

  if (intent === "contact") {
    return buildContextForIntent("contact", kb);
  }

  if (intent === "skills") {
    return {
      kind: "skills",
      facts: {
        headline: kb.profile.headline,
        specializations: kb.personal.specializations,
        skills: kb.skills,
        rankedProjects: rankItems(kb.projects, query, 3),
        rankedExperience: rankItems(kb.experience, query, 2)
      }
    };
  }

  if (intent === "experience") {
    return {
      kind: "experience",
      facts: {
        headline: kb.profile.headline,
        shortBio: kb.profile.shortBio,
        specializations: kb.personal.specializations,
        rankedExperience: rankItems(kb.experience, query, 3),
        rankedProjects: rankItems(kb.projects, query, 2),
        openSource: kb.openSource
      }
    };
  }

  if (intent === "projects") {
    return {
      kind: "projects",
      facts: {
        rankedProjects: rankItems(kb.projects, query, 5),
        openSource: rankItems(kb.openSource, query, 2)
      }
    };
  }

  if (intent === "education") {
    return buildContextForIntent("education", kb);
  }

  if (intent === "openSource") {
    return buildContextForIntent("openSource", kb);
  }

  if (intent === "interests") {
    return buildContextForIntent("interests", kb);
  }

  return buildContextForIntent("general", kb);
};
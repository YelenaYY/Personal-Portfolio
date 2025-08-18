// Knowledge Base for RAG-powered Chatbot
// This contains structured information about Yelena Yu for the chatbot to reference

export const knowledgeBase = {
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

// Helper function to search the knowledge base
export const searchKnowledgeBase = (query) => {
  const queryLower = query.toLowerCase();
  const results = [];
  
  // Search through all sections and return relevant content
  const searchInObject = (obj, context = '') => {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        if (value.toLowerCase().includes(queryLower)) {
          results.push({ context: context + key, content: value, relevance: 'high' });
        }
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (typeof item === 'string') {
            if (item.toLowerCase().includes(queryLower)) {
              results.push({ context: context + key + `[${index}]`, content: item, relevance: 'medium' });
            }
          } else if (typeof item === 'object') {
            searchInObject(item, context + key + `[${index}].`);
          }
        });
      } else if (typeof value === 'object' && value !== null) {
        searchInObject(value, context + key + '.');
      }
    }
  };
  
  searchInObject(knowledgeBase);
  
  // Also search keywords for better matching
  knowledgeBase.experience.forEach(exp => {
    if (exp.keywords && exp.keywords.some(keyword => queryLower.includes(keyword) || keyword.includes(queryLower))) {
      results.push({ 
        context: 'experience.' + exp.title, 
        content: exp, 
        relevance: 'high',
        type: 'experience'
      });
    }
  });
  
  knowledgeBase.projects.forEach(project => {
    if (project.keywords && project.keywords.some(keyword => queryLower.includes(keyword) || keyword.includes(queryLower))) {
      results.push({ 
        context: 'projects.' + project.title, 
        content: project, 
        relevance: 'high',
        type: 'project'
      });
    }
  });
  
  return results;
}; 
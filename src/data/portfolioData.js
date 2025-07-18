import { Home, User, Briefcase, FolderOpen, Layers, MessageCircle } from 'lucide-react';

export const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'contact', label: 'Contact', icon: MessageCircle }
];

export const experiences = [
  {
    company: "Robert Bosch Automotive Electronics Pvt. Ltd",
    role: "Senior Software Engineer - Data Scientist",
    period: "April 2023 – Present",
    location: "Bengaluru, India",
    description: "Leading AI/ML initiatives in automotive manufacturing, developing cutting-edge solutions for quality control and predictive analytics.",
    achievements: [
      "Developed and optimized regression models using PyTorch for forecasting and predictive analytics",
      "Designed and trained image classification models using PyTorch to identify faulty vs. good parts in manufacturing datasets",
      "Developed object detection models using PyTorch, leveraging advanced deep learning techniques for real-time object identification",
      "Designed and deployed generative AI applications leveraging RAG architectures and LangChain",
      "Integrated pre-trained language models (GPT-3.5, GPT-4, BERT) with structured and unstructured data sources",
      "Developed modular FastAPI services to expose GenAI pipelines as APIs for seamless integration",
      "Managed and optimized vector databases like Chroma DB and Pinecone for AI data retrieval",
      "Deployed scalable AI models using Azure App Services, Container Instances, and AKS"
    ],
    technologies: ["PyTorch", "Azure", "LangChain", "FastAPI", "Computer Vision", "RAG", "Chroma DB", "Pinecone"]
  },
  {
    company: "Robert Bosch Automotive Electronics Pvt. Ltd",
    role: "Graduate Trainee – Data Science",
    period: "April 2022 – April 2023",
    location: "Bengaluru, India",
    description: "Specialized in NLP and semantic technologies, building foundation for advanced AI applications.",
    achievements: [
      "Applied advanced text preprocessing techniques using spaCy including tokenization, lemmatization, and POS tagging",
      "Experimented with model architectures and hyperparameter tuning to enhance LLM performance",
      "Integrated pre-trained language models with diverse data sources for context-aware text generation",
      "Worked with semantic web technologies including RDF, OWL, and SPARQL for knowledge representation"
    ],
    technologies: ["spaCy", "NLP", "RDF", "OWL", "SPARQL", "LLMs", "Semantic Web"]
  },
  {
    company: "DXC Technology",
    role: "Associate Professional Software Engineer",
    period: "June 2021 – March 2022",
    location: "Bengaluru, India",
    description: "Focused on knowledge graph construction and semantic data management systems.",
    achievements: [
      "Designed and implemented ontologies and vocabularies to model domain-specific knowledge",
      "Integrated and aligned data from diverse sources to construct unified knowledge graphs",
      "Utilized graph databases and triple stores such as StarDog and Neo4j for efficient data management"
    ],
    technologies: ["Neo4j", "StarDog", "Knowledge Graphs", "Ontologies", "Graph Databases"]
  }
];

export const personalProjects = [
  {
    title: "Image Classification Using PyTorch",
    description: "A comprehensive PyTorch-based project for image classification that demonstrates how to build, train, and deploy deep learning models. Features a complete pipeline from data collection to web deployment with REST API and user-friendly interface.",
    status: "Completed",
    github: "https://github.com/AJAYM888/ImageClassificationUsingPyTorch",
    demo: "https://github.com/AJAYM888/ImageClassificationUsingPyTorch",
    features: [
      "Deep Learning with PyTorch for neural network training",
      "Automated data collection and preprocessing tools",
      "Web interface with drag-and-drop image upload",
      "REST API for programmatic model access",
      "Comprehensive visualization of training metrics",
      "Real-time prediction with confidence scores",
      "Configurable CNN architecture",
      "Model persistence and checkpointing"
    ],
    technologies: [
      "PyTorch",
      "Python",
      "Flask",
      "Computer Vision",
      "Deep Learning",
      "REST API",
      "HTML/CSS",
      "Matplotlib",
      "PIL/Pillow",
      "Scikit-learn"
    ],
    metrics: {
      accuracy: "95%+ Training, 90%+ Validation",
      inference: "<100ms per image",
      version: "1.0.0"
    }
  },
  {
    title: "AI Steering Angle Predictor",
    description: "A full-stack end-to-end deep learning system for autonomous vehicle steering prediction using NVIDIA's DAVE-2 architecture. Features a complete web application with React frontend, Flask API backend, and PyTorch deep learning model that learns to drive by mapping raw camera images directly to steering commands.",
    status: "Completed",
    github: "https://github.com/AJAYM888/SteeringAnglePredictionUsingPytorch",
    demo: "https://github.com/AJAYM888/SteeringAnglePredictionUsingPytorch",
    features: [
      "Full-Stack Web Application with modern React frontend",
      "Real-Time Inference with 23ms prediction time",
      "Interactive Dashboard with model performance metrics",
      "Video Processing with frame-by-frame analysis",
      "Drag-and-drop interface for road image analysis",
      "NVIDIA DAVE-2 CNN architecture implementation",
      "RESTful API with comprehensive error handling",
      "Live steering wheel animation visualization"
    ],
    technologies: [
      "PyTorch",
      "React",
      "Flask",
      "OpenCV",
      "NVIDIA DAVE-2",
      "Computer Vision",
      "Autonomous Driving",
      "Deep Learning",
      "REST API",
      "Framer Motion"
    ],
    metrics: {
      accuracy: "97.3% with 7.2° average error",
      inference: "23ms (43+ FPS)",
      architecture: "NVIDIA DAVE-2 with 250K parameters"
    },
    performance: {
      straightRoads: "0.5-2° error",
      gentleCurves: "3-8° error",
      sharpTurns: "10-20° error",
      apiResponse: "<200ms",
      frontendLoad: "<2s"
    }
  }
];

export const skills = {
  "Programming Languages": {
    items: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "#3776ab"
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        color: "#336791"
      }
    ]
  },
  "Machine Learning & Deep Learning": {
    items: [
      {
        name: "PyTorch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        color: "#ee4c2c"
      },
      {
        name: "Scikit-learn",
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        color: "#f7931e"
      },
      {
        name: "Computer Vision",
        icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
        color: "#4285f4"
      },
      {
        name: "Neural Networks",
        icon: "https://cdn-icons-png.flaticon.com/512/2955/2955565.png",
        color: "#fbbc04"
      }
    ]
  },
  "Generative AI & NLP": {
    items: [
      {
        name: "LangChain",
        icon: "https://python.langchain.com/img/parrot-icon.svg",
        color: "#1c3a3a"
      },
      {
        name: "RAG Systems",
        icon: "https://cdn-icons-png.flaticon.com/512/11496/11496764.png",
        color: "#059669"
      },
      {
        name: "GPT Models",
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        color: "#412991"
      },
      {
        name: "Vector Databases",
        icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
        color: "#dc2626"
      }
    ]
  },
  "Cloud & Deployment": {
    items: [
      {
        name: "Microsoft Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        color: "#0078d4"
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        color: "#2496ed"
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        color: "#326ce5"
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        color: "#009688"
      }
    ]
  },
  "Knowledge Graphs": {
    items: [
      {
        name: "StarDog",
        icon: "https://cdn-icons-png.flaticon.com/512/8099/8099201.png",
        color: "#fbbf24"
      },
      {
        name: "RDF/SPARQL",
        icon: "https://www.w3.org/RDF/icons/rdf.svg",
        color: "#e11d48"
      },
      {
        name: "Ontologies",
        icon: "https://cdn-icons-png.flaticon.com/512/9353/9353315.png",
        color: "#8b5cf6"
      }
    ]
  }
};

export const certifications = [
  {
    title: "Microsoft Certified: Azure Data Fundamentals",
    code: "DP-900",
    issuer: "Microsoft",
    year: "2023",
    description: "Cloud Computing & Data Fundamentals",
    verifyLink: "https://docs.microsoft.com/en-us/learn/certifications/azure-data-fundamentals/",
    color: "blue"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900", 
    issuer: "Microsoft",
    year: "2023",
    description: "Cloud Computing Fundamentals",
    verifyLink: "https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/",
    color: "indigo"
  }
];

export const skillLinks = {
  "Python": "https://docs.python.org/3/",
  "PyTorch": "https://pytorch.org/docs/stable/index.html",
  "LangChain": "https://python.langchain.com/docs/get_started/introduction",
  "Microsoft Azure": "https://docs.microsoft.com/en-us/azure/",
  "FastAPI": "https://fastapi.tiangolo.com/",
  "Docker": "https://docs.docker.com/",
  "Neo4j": "https://neo4j.com/docs/",
  "spaCy": "https://spacy.io/usage"
};
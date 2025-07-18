import React from 'react';

const TechLogo = ({ name, color }) => {
  const logoComponents = {
    // Programming Languages
    "Python": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#3776ab" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z"/>
        <path fill="#ffd43b" d="M9.75 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h7.46l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21v-3.06h3.09l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01h-.16l-.06-.01h-8.16v.83h6.61l.01 2.75.02.37-.05.34-.11.31-.17.28-.25.26-.31.23-.38.2-.44.18-.51.15-.58.12-.64.1-.71.06-.77.04-.84.02-1.27-.05zm6.3-1.98l.23-.33.08-.41-.08-.41-.23-.34-.33-.22-.41-.09-.41.09-.33.22-.23.34-.08.41.08.41.23.33.33.22.41.09.41-.09z"/>
      </svg>
    ),
    
    "SQL": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#336791" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153z"/>
        <path fill="#336791" d="M12.42 2C5.55 2 0 7.56 0 14.43c0 6.87 5.55 12.43 12.42 12.43 6.87 0 12.43-5.56 12.43-12.43C24.85 7.56 19.29 2 12.42 2z"/>
      </svg>
    ),

    // Machine Learning Frameworks
    "PyTorch": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#ee4c2c" d="M12.005 0L4.952 7.053c-2.756 2.756-2.756 7.237 0 9.993s7.237 2.756 9.993 0c2.756-2.756 2.756-7.237 0-9.993L12.005 0z"/>
        <circle fill="#ee4c2c" cx="17.5" cy="6.5" r="1.5"/>
      </svg>
    ),

    "Scikit-learn": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <circle fill="#f7931e" cx="12" cy="12" r="10"/>
        <circle fill="#29abe2" cx="17" cy="8" r="2"/>
        <circle fill="#f7931e" cx="7" cy="16" r="2"/>
        <circle fill="#29abe2" cx="17" cy="16" r="2"/>
      </svg>
    ),

    // Deep Learning Skills
    "CNNs": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#4285f4">
          <rect x="2" y="4" width="4" height="4" rx="0.5" opacity="0.8"/>
          <rect x="7" y="3" width="5" height="6" rx="0.5" opacity="0.6"/>
          <rect x="13" y="2" width="6" height="8" rx="0.5" opacity="0.4"/>
          <rect x="20" y="1" width="2" height="10" rx="0.5" opacity="0.2"/>
        </g>
      </svg>
    ),

    "RNNs": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#34a853">
          <circle cx="6" cy="6" r="2" opacity="0.8"/>
          <circle cx="12" cy="6" r="2" opacity="0.6"/>
          <circle cx="18" cy="6" r="2" opacity="0.4"/>
          <path d="M8 6h2M14 6h2" stroke="#34a853" strokeWidth="2" fill="none"/>
          <path d="M6 8v4M12 8v4M18 8v4" stroke="#34a853" strokeWidth="2" fill="none"/>
          <circle cx="6" cy="18" r="2" opacity="0.8"/>
          <circle cx="12" cy="18" r="2" opacity="0.6"/>
          <circle cx="18" cy="18" r="2" opacity="0.4"/>
        </g>
      </svg>
    ),

    "Transformers": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#ea4335">
          <rect x="3" y="3" width="6" height="2" rx="1"/>
          <rect x="15" y="3" width="6" height="2" rx="1"/>
          <rect x="3" y="11" width="6" height="2" rx="1"/>
          <rect x="15" y="11" width="6" height="2" rx="1"/>
          <rect x="3" y="19" width="6" height="2" rx="1"/>
          <rect x="15" y="19" width="6" height="2" rx="1"/>
          <path d="M9 4h6M9 12h6M9 20h6" stroke="#ea4335" strokeWidth="2" opacity="0.6"/>
        </g>
      </svg>
    ),

    "LLMs (GPT, BERT)": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#fbbc04">
          <circle cx="12" cy="4" r="2"/>
          <circle cx="6" cy="10" r="1.5"/>
          <circle cx="18" cy="10" r="1.5"/>
          <circle cx="9" cy="16" r="1.5"/>
          <circle cx="15" cy="16" r="1.5"/>
          <circle cx="12" cy="20" r="2"/>
          <path d="M12 6L6 8.5M12 6L18 8.5M7.5 10.5L9 14.5M16.5 10.5L15 14.5M10.5 16.5L12 18M13.5 16.5L12 18" stroke="#fbbc04" strokeWidth="1.5" fill="none"/>
        </g>
      </svg>
    ),

    // Optimization Algorithms
    "Gradient Descent": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g stroke="#9333ea" strokeWidth="2" fill="none">
          <path d="M3 18c3-8 8-10 12-6 2 2 2 4 0 6-2 2-4 2-6 0"/>
          <path d="M15 14l3 3-3 3" fill="#9333ea"/>
        </g>
      </svg>
    ),

    "SGD": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g stroke="#06b6d4" strokeWidth="2" fill="none">
          <path d="M3 20c2-6 4-8 6-6 1 1 1 2 0 3-1 1-2 1-3 0"/>
          <path d="M7 16c2-4 3-5 4-3"/>
          <path d="M11 12c1-2 1.5-2.5 2-1.5"/>
          <circle cx="18" cy="6" r="1" fill="#06b6d4"/>
        </g>
      </svg>
    ),

    "Adam": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#8b5cf6">
          <path d="M12 2L4 8v8l8 6 8-6V8l-8-6z" opacity="0.2"/>
          <path d="M12 2L4 8l8 6 8-6-8-6z" opacity="0.4"/>
          <path d="M12 8v14l8-6V8l-8 6z" opacity="0.3"/>
          <path d="M4 8v8l8 6V8L4 8z" opacity="0.5"/>
        </g>
      </svg>
    ),

    // Applied AI Domains
    "Object Detection": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g stroke="#ef4444" strokeWidth="2" fill="none">
          <rect x="4" y="4" width="6" height="6"/>
          <rect x="14" y="8" width="6" height="6"/>
          <circle cx="7" cy="7" r="1" fill="#ef4444"/>
          <circle cx="17" cy="11" r="1" fill="#ef4444"/>
        </g>
      </svg>
    ),

    "Image Classification": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#f59e0b">
          <rect x="3" y="5" width="18" height="12" rx="2" opacity="0.2"/>
          <rect x="5" y="7" width="4" height="3" rx="1"/>
          <rect x="10" y="7" width="4" height="3" rx="1"/>
          <rect x="15" y="7" width="4" height="3" rx="1"/>
        </g>
      </svg>
    ),

    "Text Classification": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#10b981">
          <rect x="4" y="4" width="12" height="2" rx="1"/>
          <rect x="4" y="8" width="16" height="2" rx="1"/>
          <rect x="4" y="12" width="10" height="2" rx="1"/>
          <rect x="4" y="16" width="14" height="2" rx="1"/>
        </g>
      </svg>
    ),

    "Language Modeling": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#3b82f6">
          <circle cx="6" cy="8" r="2"/>
          <circle cx="12" cy="8" r="2"/>
          <circle cx="18" cy="8" r="2"/>
          <rect x="4" y="16" width="4" height="2" rx="1"/>
          <rect x="10" y="16" width="4" height="2" rx="1"/>
          <rect x="16" y="16" width="4" height="2" rx="1"/>
        </g>
      </svg>
    ),

    "LLM Applications": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#8b5cf6">
          <circle cx="12" cy="6" r="3" opacity="0.8"/>
          <rect x="6" y="12" width="3" height="6" rx="1" opacity="0.6"/>
          <rect x="10.5" y="12" width="3" height="6" rx="1" opacity="0.7"/>
          <rect x="15" y="12" width="3" height="6" rx="1" opacity="0.5"/>
        </g>
      </svg>
    ),

    // Generative AI & RAG
    "Prompt Engineering": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#06b6d4">
          <rect x="4" y="6" width="16" height="2" rx="1"/>
          <rect x="4" y="10" width="12" height="2" rx="1"/>
          <rect x="4" y="14" width="14" height="2" rx="1"/>
        </g>
      </svg>
    ),

    "Few-Shot Learning": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#8b5cf6">
          <circle cx="6" cy="6" r="2"/>
          <circle cx="12" cy="6" r="2"/>
          <circle cx="18" cy="6" r="2"/>
          <circle cx="12" cy="18" r="3" opacity="0.8"/>
        </g>
      </svg>
    ),

    "Fine-Tuning": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#ef4444">
          <circle cx="8" cy="8" r="2" opacity="0.4"/>
          <circle cx="16" cy="8" r="2" opacity="0.6"/>
          <circle cx="12" cy="16" r="3" opacity="0.8"/>
        </g>
      </svg>
    ),

    "LangChain": (
      <div className="w-8 h-8">
        <img 
          src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/langchain.svg" 
          alt="LangChain" 
          className="w-8 h-8"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <svg viewBox="0 0 24 24" className="w-8 h-8 hidden" fill="#1c3a3a">
          <ellipse cx="8" cy="10" rx="3" ry="2" fill="none" stroke="#1c3a3a" strokeWidth="2"/>
          <ellipse cx="16" cy="10" rx="3" ry="2" fill="none" stroke="#1c3a3a" strokeWidth="2"/>
          <ellipse cx="12" cy="14" rx="3" ry="2" fill="none" stroke="#1c3a3a" strokeWidth="2"/>
          <circle cx="11" cy="10" r="1"/>
          <circle cx="13" cy="10" r="1"/>
        </svg>
      </div>
    ),

    "LangGraph": (
      <div className="w-8 h-8">
        <img 
          src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/langgraph.svg" 
          alt="LangGraph" 
          className="w-8 h-8"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <svg viewBox="0 0 24 24" className="w-8 h-8 hidden" fill="#059669">
          <circle cx="6" cy="6" r="2"/>
          <circle cx="18" cy="6" r="2"/>
          <circle cx="6" cy="18" r="2"/>
          <circle cx="18" cy="18" r="2"/>
          <circle cx="12" cy="12" r="2.5"/>
        </svg>
      </div>
    ),

    "Chroma": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <circle fill="#dc2626" cx="12" cy="12" r="10"/>
        <path fill="#fff" d="M8 12h8M12 8v8"/>
      </svg>
    ),

    "FAISS": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#4285f4">
          <circle cx="12" cy="12" r="2"/>
          <circle cx="7" cy="7" r="1.5" opacity="0.7"/>
          <circle cx="17" cy="7" r="1.5" opacity="0.6"/>
          <circle cx="7" cy="17" r="1.5" opacity="0.5"/>
          <circle cx="17" cy="17" r="1.5" opacity="0.8"/>
          <circle cx="12" cy="5" r="1" opacity="0.4"/>
          <circle cx="5" cy="12" r="1" opacity="0.6"/>
          <circle cx="19" cy="12" r="1" opacity="0.5"/>
          <circle cx="12" cy="19" r="1" opacity="0.7"/>
        </g>
      </svg>
    ),

    // Cloud & MLOps
    "Microsoft Azure": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#0078d4" d="M5.483 21.8H18.09l-6.318-8.973 2.182-3.825L8.84 2.2H2.317l3.166 7.23L5.483 21.8z"/>
      </svg>
    ),

    "Docker": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#2496ed" d="M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
      </svg>
    ),

    "FastAPI": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#009688" d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.236 5.928l4.764 4.764H9.764l1-1.732zm-2.236 8.144h5.764l-1 1.732-4.764-4.764z"/>
      </svg>
    ),

    "Streamlit": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#ff4b4b" d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 22 12 18.27 5.82 22 7 13.87 2 9l6.91-.74L12 2z"/>
      </svg>
    ),

    "Azure Container Registry": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#0078d4">
          <rect x="4" y="6" width="16" height="12" rx="2" opacity="0.3"/>
          <rect x="6" y="8" width="4" height="3" rx="1"/>
          <rect x="11" y="8" width="4" height="3" rx="1"/>
          <rect x="16" y="8" width="2" height="3" rx="1"/>
        </g>
      </svg>
    ),

    "Azure App Services": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#0078d4">
          <rect x="4" y="4" width="16" height="16" rx="3" opacity="0.2"/>
          <circle cx="8" cy="8" r="1.5"/>
          <circle cx="16" cy="8" r="1.5"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="8" cy="16" r="1.5"/>
          <circle cx="16" cy="16" r="1.5"/>
        </g>
      </svg>
    ),

    // Additional Skills
    "Classification": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#4285f4">
          <circle cx="6" cy="6" r="2"/>
          <circle cx="18" cy="6" r="2"/>
          <circle cx="6" cy="18" r="2"/>
          <circle cx="18" cy="18" r="2"/>
        </g>
      </svg>
    ),

    "Regression": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#34a853">
          <path d="M4 20L8 16L12 18L16 14L20 10" stroke="#34a853" strokeWidth="3" fill="none"/>
          <circle cx="4" cy="20" r="1.5"/>
          <circle cx="8" cy="16" r="1.5"/>
          <circle cx="12" cy="18" r="1.5"/>
          <circle cx="16" cy="14" r="1.5"/>
          <circle cx="20" cy="10" r="1.5"/>
        </g>
      </svg>
    ),

    "Transfer Learning": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <g fill="#ea4335">
          <rect x="3" y="3" width="8" height="8" rx="2" opacity="0.6"/>
          <rect x="13" y="13" width="8" height="8" rx="2" opacity="0.8"/>
          <path d="M11 7L13 13" stroke="#ea4335" strokeWidth="2"/>
        </g>
      </svg>
    )
  };

  return logoComponents[name] || (
    <div 
      className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm"
      style={{ backgroundColor: color }}
    >
      {name.charAt(0)}
    </div>
  );
};

export default TechLogo;
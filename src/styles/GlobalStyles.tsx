import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        :root {
          --primary-color: #E88D67; /* Softer terracotta/pink */
          --secondary-color: #F3F7EC; /* Off-white */
          --accent-color: #006989; /* Deep blue for contrast */
          --text-primary: #2C3639;
          --text-secondary: #5D6D7E;
          --bg-color: #FDFBF7;
          --card-bg: rgba(255, 255, 255, 0.85);
          --bg-gradient: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
          
          --spacing-xs: 0.25rem;
          --spacing-sm: 0.5rem;
          --spacing-md: 1rem;
          --spacing-lg: 2rem;
          --spacing-xl: 3rem;
          
          --border-radius-sm: 4px;
          --border-radius-md: 12px;
          --border-radius-lg: 24px;
          
          --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
          --shadow-md: 0 8px 16px rgba(0, 0, 0, 0.08);
          --shadow-lg: 0 16px 32px rgba(0, 0, 0, 0.08);
          
          --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          font-family: 'Montserrat', 'Manrope', -apple-system, sans-serif;
          background: var(--bg-color);
          color: var(--text-primary);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          position: relative;
          overflow-x: hidden;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
          margin: 0 0 1rem;
          line-height: 1.3;
          font-weight: 700;
          color: var(--text-primary);
        }
        
        p {
          margin: 0 0 1rem;
        }
        
        ul, ol {
          margin: 0 0 1rem;
          padding-left: 1.5rem;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        body > .modal-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999999;
        }
      `}
    />
  );
};

export default GlobalStyles; 
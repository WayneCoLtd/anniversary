import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AudioContext } from '../App';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Content = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
  padding: var(--spacing-md);
`;

const SubTitle = styled(motion.h2)`
  font-family: 'Montserrat', sans-serif;
  color: var(--text-secondary);
  font-size: 1.2rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: var(--spacing-sm);
  font-weight: 500;
`;

const NameTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  color: var(--text-primary);
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--spacing-xs);
  background: linear-gradient(135deg, #2C3639 0%, #3F4E4F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  span {
    display: block;
    font-size: 0.5em;
    font-weight: 400;
    margin-top: 10px;
    color: var(--primary-color);
    -webkit-text-fill-color: initial;
    font-family: 'Montserrat', sans-serif; /* Fallback for Chinese characters if needed */
  }
`;

const Message = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
  margin: var(--spacing-lg) auto;
  line-height: 1.8;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const MusicButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #fff;
  padding: 12px 32px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: var(--spacing-lg);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(232, 141, 103, 0.2);
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const MusicIcon = styled.div<{ isPlaying: boolean }>`
  width: 18px;
  height: 18px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    display: block;
    width: 3px;
    background-color: currentColor;
    border-radius: 3px;
    animation: ${props => props.isPlaying ? 'music-wave 1s ease-in-out infinite' : 'none'};
    
    &:nth-of-type(1) { height: 60%; animation-delay: 0s; }
    &:nth-of-type(2) { height: 100%; animation-delay: 0.2s; }
    &:nth-of-type(3) { height: 50%; animation-delay: 0.4s; }
  }
  
  @keyframes music-wave {
    0%, 100% { height: 50%; }
    50% { height: 100%; }
  }
`;

const Intro: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { isPlaying, toggleMusic, audioError } = useContext(AudioContext);
  
  return (
    <Container>
      <Content
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SubTitle variants={itemVariants}>Happy Birthday</SubTitle>
        <NameTitle variants={itemVariants}>
          Doreen
          <span>邢 若 琳</span>
        </NameTitle>
        
        <Message variants={itemVariants}>
          May your 22nd year be filled with magic, love, and endless adventures.
          <br />
          You are the most beautiful chapter in my story.
        </Message>

        <MusicButton 
          variants={itemVariants}
          onClick={toggleMusic} 
          title={audioError || "Play/Pause Music"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MusicIcon isPlaying={isPlaying}>
            <span />
            <span />
            <span />
          </MusicIcon>
          {isPlaying ? "Pause Music" : "Play Music"}
        </MusicButton>
        
        {audioError && (
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            style={{ fontSize: '0.8rem', color: '#ff6b6b', marginTop: '1rem' }}
          >
            {audioError}
          </motion.p>
        )}
      </Content>
    </Container>
  );
};

export default Intro; 

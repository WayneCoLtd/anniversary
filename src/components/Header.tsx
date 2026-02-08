import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeaderContainer = styled(motion.header)`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background: linear-gradient(135deg, #FFAFBD 0%, #ffc3a0 100%);
  padding: var(--spacing-xl) 0;
  margin-bottom: var(--spacing-xl);
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%),
      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%);
    animation: pulse 8s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  @media (max-width: 768px) {
    padding: var(--spacing-lg) 0;
    margin-bottom: var(--spacing-lg);
    min-height: 40vh;
  }
`;

const FloatingCircle = styled(motion.div)<{ size: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  opacity: 0.75;
  filter: blur(0.5px);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.6);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const Title = styled(motion.h1)`
  color: #fff;
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 700;
  text-align: center;
  margin: 0;
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
  line-height: 1.1;
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 9vw, 3.5rem);
    letter-spacing: 0;
  }
`;

const DateText = styled(motion.p)`
  color: rgba(255, 255, 255, 0.95);
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  text-align: center;
  margin: var(--spacing-md) 0 0;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  letter-spacing: 2px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 10px 30px;
  display: inline-block;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 3vw, 1.1rem);
    margin-top: var(--spacing-sm);
    padding: 8px 20px;
  }
`;

const Header: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const bubbles = [
    { size: 60, left: '10%', duration: 8, delay: 0, gradient: 'linear-gradient(135deg, #FF6B6B, #FFE66D)' },
    { size: 30, left: '20%', duration: 5, delay: 1, gradient: 'linear-gradient(135deg, #4ECDC4, #45B7AF)' },
    { size: 70, left: '35%', duration: 7, delay: 2, gradient: 'linear-gradient(135deg, #FF9F9F, #FF6B6B)' },
    { size: 90, left: '50%', duration: 11, delay: 0, gradient: 'linear-gradient(135deg, #A8E6CF, #4ECDC4)' },
    { size: 45, left: '55%', duration: 6, delay: 1, gradient: 'linear-gradient(135deg, #FFE66D, #FFD93D)' },
    { size: 55, left: '65%', duration: 8, delay: 3, gradient: 'linear-gradient(135deg, #FF6B6B, #FF9F9F)' },
    { size: 35, left: '75%', duration: 7, delay: 2, gradient: 'linear-gradient(135deg, #4ECDC4, #A8E6CF)' },
    { size: 95, left: '80%', duration: 6, delay: 1, gradient: 'linear-gradient(135deg, #FFD93D, #FFE66D)' },
    { size: 25, left: '70%', duration: 9, delay: 0, gradient: 'linear-gradient(135deg, #FF9F9F, #FF6B6B)' },
    { size: 60, left: '85%', duration: 5, delay: 3, gradient: 'linear-gradient(135deg, #A8E6CF, #4ECDC4)' },
    { size: 50, left: '15%', duration: 10, delay: 2, gradient: 'linear-gradient(135deg, #C795E6, #A06CD5)' },
    { size: 75, left: '30%', duration: 12, delay: 0.5, gradient: 'linear-gradient(135deg, #FFB7B7, #FF8989)' },
    { size: 40, left: '45%', duration: 9, delay: 2.5, gradient: 'linear-gradient(135deg, #FFCD96, #FFA45C)' },
    { size: 65, left: '60%', duration: 7.5, delay: 1.5, gradient: 'linear-gradient(135deg, #ADE4DB, #6ECCAF)' },
    { size: 35, left: '90%', duration: 8.5, delay: 3.5, gradient: 'linear-gradient(135deg, #FFAAA6, #FF8C8C)' },
  ];

  return (
    <HeaderContainer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {bubbles.map((bubble, index) => (
        <FloatingCircle
          key={index}
          size={bubble.size}
          color={bubble.gradient}
          initial={{
            bottom: '-100px',
            left: bubble.left,
            x: 0,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            bottom: ['-100px', '1080px'],
            x: [0, 100, -200, 100],
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.5, 1, 1, 0.8],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
            times: [0, 0.3, 0.7, 1],
          }}
        />
      ))}
      <HeaderContent>
        <Title variants={itemVariants}>Happy 22nd birthday, Doreen!</Title>
        <DateText variants={itemVariants}>2026年02月09日</DateText>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 
import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';
import SoftButton from '../../../soft-components/SoftButton';
import logo from '../../../logo.svg';
import { Link } from 'react-router-dom';
import BasicLayout from '../../../layouts/authentication/components/BasicLayout';

const Auth = () => {
    const gradientStyle = {
        background: 'linear-gradient(310deg, #2E2EFF, #81c784)',
        WebkitBackgroundClip: 'text', // For Safari support
        WebkitTextFillColor: 'transparent', // For Safari support
        color: '#000', // Fallback color for non-supporting browsers
        fontWeight: 'bold',
        fontSize: '2rem',
        familyFont: 'Roboto',
      };

  return (
    <BasicLayout
    title="Welcome!"
    description="Use these awesome forms to login or create new account in your project for free."
    image="https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg"
  >
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="content"
      >
       {/* <center><img src={logo} className="App-logo" alt="logo" /></center> */}
    <div style={gradientStyle}>
      <i>Health Care System</i>
    </div>
        <p>
        <i>We’re here to assist you before get medical help whenever wherever. Find everything you need to make your time here as pleasant and comfortable as possible</i>
        </p>
      </motion.section>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="cta-button"
      >
      <Link to='/login'>
      <SoftButton
      component="a"
      target="_blank"
      rel="noreferrer"
      variant="gradient"
      color="info"
      fullWidth
    >
      Sign In
    </SoftButton>
    </Link>
      </motion.div>
    </BasicLayout>
  );
};

export default Auth;

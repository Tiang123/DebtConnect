import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>DebtConnect<span style={styles.text}>&copy; 2024 All rights reserved.</span></p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0b64ad',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'relative',
    bottom: '0',
    width: '99%', 
    marginTop: 'auto', // Push the footer to the bottom
  },
  text: {
    fontFamily: 'Arial, sans-serif',
    margin: '0',
  },
};

export default Footer;

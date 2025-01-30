import React from 'react';

const Earn = () => {
  return (
    <div>
      <div className="container">
        <h2>Introduction</h2>
        <p>
          Welcome to our Earning Information page! Here, you will learn about the different ways you can earn money through our platform. We provide various opportunities that suit different skills and interests. 
        </p>

        <h2>Ways to Earn</h2>
        <p>There are several ways to start earning on our platform:</p>
        <ul>
         
          
          
          <li><strong>Content:</strong> Most viewd content get 1 dollar on each view.</li>
          <li><strong>Subscription and Membership:</strong> You can create exclusive content for your subscribers or members and earn a monthly fee from them.</li>
        </ul>

        

        <h2>Payment Methods</h2>
        <p>
          We offer multiple payment methods to ensure you can easily access your earnings. These include:
        </p>
        <ul>
          <li><strong>PayPal:</strong> Fast and secure payments to your PayPal account.</li>
          <li><strong>Bank Transfer:</strong> Direct bank transfers to your local bank account.</li>
          <li><strong>Cryptocurrency:</strong> For those who prefer digital currencies, we also offer payments in Bitcoin and Ethereum.</li>
        </ul>

        <h2>Terms & Conditions</h2>
        <p>
          Before you start earning, please make sure to read our <a href="/terms-and-conditions" style={{ color: '#e53935' }}>Terms & Conditions</a> to understand our guidelines and policies. These rules ensure a fair and transparent environment for all users on the platform.
        </p>

        <h2>Support</h2>
        <p>
          If you have any questions about earning or need assistance with your account, our support team is here to help! You can reach us via the following channels:
        </p>
        <ul>
          <li>Email: <a href="codewithahmad363.com" style={{ color: '#e53935' }}>support@bloggingsite.com</a></li>
          <li>Phone: 03111402566</li>
        </ul>
      </div>

      <footer>
        <p>&copy; 2025 Blogging Site. All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        /* Global styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: #111;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
        }

        .container {
          width: 80%;
          max-width: 1200px;
          padding: 30px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          animation: fadeIn 1.5s ease-in-out;
          transform-style: preserve-3d;
        }

        h2 {
          color: #e53935; /* Red color */
          margin-bottom: 15px;
          font-size: 1.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          animation: slideIn 1s ease-in-out;
        }

        p {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
        }

        ul li {
          margin-bottom: 10px;
        }

        footer {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 10px;
          position: fixed;
          bottom: 0;
          width: 100%;
        }

        /* 3D effect animation */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: rotateX(30deg) translateZ(-100px);
          }
          100% {
            opacity: 1;
            transform: rotateX(0deg) translateZ(0);
          }
        }

        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .container {
            width: 90%;
            padding: 20px;
          }

          h2 {
            font-size: 1.5rem;
          }

          p {
            font-size: 0.9rem;
          }
        }

        /* Hover effect for links */
        a {
          text-decoration: none;
          color: #e53935;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Earn;

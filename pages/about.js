import React from 'react';

const About = () => {
  return (
    <div>
      {/* Add your component's content */}
      <div className="container">
        <div className="background"></div>

        <div className="content">
          <h1>About Us</h1>
          <p>
            We are a creative tech company pushing the boundaries of design and technology. Our team specializes in
            developing cutting-edge solutions that inspire and drive success.
          </p>

          <div className="skills">
            <div className="skill">
              <div className="icon">🔧</div>
              <h3>Blogging</h3>
            </div>
            <div className="skill">
              <div className="icon">⚡</div>
              <h3>Testified</h3>
            </div>
            <div className="skill">
              <div className="icon">💡</div>
              <h3>Creative Solutions</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles */}
      <style jsx>{`
        /* Global reset and body styling */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: #111;
          color: white;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        /* Main container */
        .container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        /* 3D background animation */
        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #d32f2f, #000);
          filter: blur(10px);
          animation: moveBackground 10s infinite alternate;
          z-index: -1;
        }

        /* 3D movement for the background */
        @keyframes moveBackground {
          0% {
            transform: translateX(-50%) translateY(-50%);
          }
          100% {
            transform: translateX(50%) translateY(50%);
          }
        }

        /* Main content styling */
        .content {
          text-align: center;
          padding: 20px;
          max-width: 900px;
          z-index: 1;
          transform-style: preserve-3d;
          animation: contentAnimation 1.5s ease-out forwards;
        }

        /* 3D effect for content */
        @keyframes contentAnimation {
          0% {
            opacity: 0;
            transform: rotateX(20deg) translateZ(100px);
          }
          100% {
            opacity: 1;
            transform: rotateX(0deg) translateZ(0);
          }
        }

        h1 {
          font-size: 3rem;
          color: #f44336; /* Red color */
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        }

        p {
          font-size: 1.2rem;
          color: #bdbdbd; /* Light gray text */
          margin-top: 15px;
          line-height: 1.5;
        }

        /* Skills Section */
        .skills {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          justify-items: center;
        }

        .skill {
          text-align: center;
          padding: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          transform: translateY(0);
          animation: skillAnimation 1.5s ease-out forwards;
        }

        /* Animation for skills */
        @keyframes skillAnimation {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .icon {
          font-size: 2.5rem;
          color: #f44336; /* Red color */
          margin-bottom: 10px;
        }

        h3 {
          font-size: 1.5rem;
          color: #f44336; /* Red color */
          font-weight: bold;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }

          p {
            font-size: 1rem;
          }

          .skills {
            grid-template-columns: 1fr;
          }

          .skill {
            width: 80%;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default About;

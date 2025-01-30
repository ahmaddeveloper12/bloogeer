// import React from 'react'

// const Index = () => {
//   return (
//     <div>
//        <nav className="navbar">
//     <div className="logo">
//       <a href="#">News Hub</a>
//     </div>
//     <div className="menu-toggle" id="mobile-menu">
//       <span className="bar"></span>
//       <span className="bar"></span>
//       <span className="bar"></span>
//     </div>
//     <ul className="nav-links">
//       <li><a href="./about">About</a></li>
//       <li><a href="./pri">Privacy&policy</a></li>
//       <li><a href="./Earn">Earning</a></li>
     
//     </ul>
//   </nav>

//   <script src="script.js"></script>

 
 

  
 

//   <script src="script.js"></script>


//   <main className="main-container">
//     <section className="headline-news">
//       <h2>Headline News</h2>
//       <div className="news-item">
//         <div className="image-container">
//           <img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_incoming_vrsd" alt="News Image"/>
//         </div>
//         <div className="text-content">
//           <a className='one' href="./cat"><h3>Sports</h3></a>
//           <a className='one' href="./add-cat">Upload form</a>
//           <br />
//         </div>
//       </div>
//       <br />
//       <br />
//       <div className="news-item">
//         <div className="image-container">
//           <img src="https://img.freepik.com/free-vector/raised-fist-revolution_23-2148000837.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_incoming_vrsd" alt="News Image"/>
//         </div>
//         <div className="text-content">
//          <a className='one' href="./county"> <h3>Country Information</h3></a>
         
//           <a className='one' href="add-county">Upload form</a>
//         </div>
//       </div>
//     </section>

    
//     <section className="more-news">
//       <h2>More News</h2>
//       <div className="news-item">
//         <div className="image-container">
//           <img src="https://img.freepik.com/premium-photo/global-markets_999407-3314.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_incoming_vrsd" alt="News Image"/>
//         </div>
//         <div className="text-content">
//         <a className='one' href="./apple">  <h3>World News</h3></a>
//           <a className='one' href="./add-apple">Upload form</a>
//         </div>
//       </div>
//       <br />
//       <br />
//       <div className="news-item">
//         <div className="image-container">
//           <img src="https://img.freepik.com/premium-vector/comprehensive-collection-social-media-icons-vector-illustration_1300528-10988.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_incoming_vrsd" alt="News Image"/>
//         </div>
//         <div className="text-content">
//        <a className='one' href="./dog">  <h3>Social Media</h3></a>
//           <a className='one' href="./add-dog">Upload form</a>
//         </div>
//       </div>
      
//     </section>
//     <section className="more-news">
//       <h2>More News</h2>
//       <div className="news-item">
//         <div className="image-container">
//           <img src="https://img.freepik.com/free-vector/flat-design-bankruptcy-effect-person_23-2148492957.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_incoming_vrsd" alt="News Image"/>
//         </div> 
//         <div className="text-content">
//         <a className='one' href="./work"> <h3>Jobs</h3></a>
//           <a className='one' href="./add-work">Upload form</a>
//         </div>
//       </div> 
//       <br />
//       <br />
//       <div className="news-item">
//         <div className="image-container">
//           <img src="https://img.freepik.com/premium-photo/ai-engineer-robotics-it-department-flat-design_987764-250528.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_incoming_vrsd" alt="News Image"/>
//         </div>
//         <div className="text-content">
//         <a className='one' href="./fog">  <h3>Artifical intelligence</h3></a>
//           <a  className='one' href="./add-fog">Upload form</a>
//         </div>
//       </div>
      
//     </section>
   
//   </main>
  
//   <footer>
//     <p>&copy; 2025 NewsHub. All Rights Reserved.</p>
//   </footer>
//     </div>
//   )
// }

// export default Index












import React from 'react'
import Image from 'next/image' // Import Image component from Next.js
import Script from 'next/script' // Import Script component from Next.js

const Index = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="#">News Hub</a>
        </div>
        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav-links">
          <li><a href="./about">About</a></li>
          <li><a href="./pri">Privacy&policy</a></li>
          <li><a href="./Earn">Earning</a></li>
        </ul>
      </nav>

      {/* Using next/script for async script loading */}
      <Script src="/script.js" strategy="afterInteractive" />

      <main className="main-container">
        <section className="headline-news">
          <h2>Headline News</h2>
          <div className="news-item">
            <div className="image-container">
              <Image 
                src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_incoming_vrsd" 
                alt="News Image" 
                width={500} // Specify width
                height={300} // Specify height
              />
            </div>
            <div className="text-content">
              <a className='one' href="./cat"><h3>Sports</h3></a>
              <a className='one' href="./add-cat">Upload form</a>
              <br />
            </div>
          </div>

          <br />
          <br />
          <div className="news-item">
            <div className="image-container">
              <Image 
                src="https://img.freepik.com/free-vector/raised-fist-revolution_23-2148000837.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_incoming_vrsd" 
                alt="News Image" 
                width={500} 
                height={300} 
              />
            </div>
            <div className="text-content">
              <a className='one' href="./county"> <h3>Country Information</h3></a>
              <a className='one' href="add-county">Upload form</a>
            </div>
          </div>
        </section>

        <section className="more-news">
          <h2>More News</h2>
          <div className="news-item">
            <div className="image-container">
              <Image 
                src="https://img.freepik.com/premium-photo/global-markets_999407-3314.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_incoming_vrsd" 
                alt="News Image" 
                width={500} 
                height={300} 
              />
            </div>
            <div className="text-content">
              <a className='one' href="./apple">  <h3>World News</h3></a>
              <a className='one' href="./add-apple">Upload form</a>
            </div>
          </div>

          <br />
          <br />
          <div className="news-item">
            <div className="image-container">
              <Image 
                src="https://img.freepik.com/premium-vector/comprehensive-collection-social-media-icons-vector-illustration_1300528-10988.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_incoming_vrsd" 
                alt="News Image" 
                width={500} 
                height={300} 
              />
            </div>
            <div className="text-content">
              <a className='one' href="./dog">  <h3>Social Media</h3></a>
              <a className='one' href="./add-dog">Upload form</a>
            </div>
          </div>
        </section>

        <section className="more-news">
          <h2>More News</h2>
          <div className="news-item">
            <div className="image-container">
              <Image 
                src="https://img.freepik.com/free-vector/flat-design-bankruptcy-effect-person_23-2148492957.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_incoming_vrsd" 
                alt="News Image" 
                width={500} 
                height={300} 
              />
            </div> 
            <div className="text-content">
              <a className='one' href="./work"> <h3>Jobs</h3></a>
              <a className='one' href="./add-work">Upload form</a>
            </div>
          </div> 

          <br />
          <br />
          <div className="news-item">
            <div className="image-container">
              <Image 
                src="https://img.freepik.com/premium-photo/ai-engineer-robotics-it-department-flat-design_987764-250528.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_incoming_vrsd" 
                alt="News Image" 
                width={500} 
                height={300} 
              />
            </div>
            <div className="text-content">
              <a className='one' href="./fog">  <h3>Artifical intelligence</h3></a>
              <a  className='one' href="./add-fog">Upload form</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 NewsHub. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Index

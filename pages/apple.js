






// import { useEffect, useState } from "react";

// const HomePage = () => {
//   const [apples, setApples] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); // State for the search term

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   useEffect(() => {
//     const fetchApples = async () => {
//       // Construct the search query based on the search term
//       const query = searchTerm ? `?name=${searchTerm}` : ""; // Search by name by default
//       const response = await fetch(`/api/apple${query}`);
//       const data = await response.json();
//       setApples(data);
//     };

//     fetchApples();
//   }, [searchTerm]); // Re-fetch data when searchTerm changes

//   return (
//     <div>
//       <h1 className="header">World news</h1>

//       {/* Search bar */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by name..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-input"
//         />
//       </div>

//       <div className="apple-list">
//         {apples.length === 0 ? (
//           <p>No apples found.</p>
//         ) : (
//           apples.map((apple) => (
//             <div key={apple._id} className="apple-entry">
//               <h3>{apple.name}</h3>
//               <img src={apple.imgUrl} alt={apple.name} width={200} className="apple-image" />
//               <p><strong>Description:</strong> {apple.desc}</p>
//               <p><strong>Activity:</strong> {apple.activity}</p>
//               <img src={apple.activityImgUrl} alt={apple.activity} width={200} className="activity-image" />
//               <p><strong>Author:</strong> {apple.author}</p>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Styles */}
//       <style jsx>{`
//         .header {
//           text-align: center;
//           font-size: 2.5rem;
//           color: red;
//           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
//         }

//         .search-container {
//           text-align: center;
//           margin-bottom: 20px;
//         }

//         .search-input {
//           padding: 10px;
//           font-size: 1.2rem;
//           border: 2px solid black;
//           border-radius: 5px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease-in-out;
//         }

//         .search-input:focus {
//           border-color: red;
//           box-shadow: 0 4px 6px rgba(255, 0, 0, 0.5);
//           outline: none;
//         }

//         .apple-list {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//         }

//         .apple-entry {
//           background-color: #333;
//           color: white;
//           border-radius: 10px;
//           padding: 20px;
//           margin: 20px;
//           box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
//           transform: perspective(500px) rotateX(5deg);
//           transition: transform 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
//           width: 250px;
//           text-align: center;
//         }

//         .apple-entry:hover {
//           transform: perspective(500px) rotateX(0deg);
//           box-shadow: 0 8px 25px rgba(255, 0, 0, 0.7);
//         }

//         .apple-image,
//         .activity-image {
//           border-radius: 10px;
//           margin: 10px 0;
//         }

//         /* Responsive Design */
//         @media (max-width: 768px) {
//           .header {
//             font-size: 2rem;
//           }

//           .apple-entry {
//             width: 200px;
//             padding: 15px;
//             margin: 10px;
//           }

//           .search-input {
//             font-size: 1rem;
//             padding: 8px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;



















import { useEffect, useState } from "react";
import Image from 'next/image'; // Import the Image component

const HomePage = () => {
  const [apples, setApples] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchApples = async () => {
      // Construct the search query based on the search term
      const query = searchTerm ? `?name=${searchTerm}` : ""; // Search by name by default
      const response = await fetch(`/api/apple${query}`);
      const data = await response.json();
      setApples(data);
    };

    fetchApples();
  }, [searchTerm]); // Re-fetch data when searchTerm changes

  return (
    <div>
      <h1 className="header">World news</h1>

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="apple-list">
        {apples.length === 0 ? (
          <p>No apples found.</p>
        ) : (
          apples.map((apple) => (
            <div key={apple._id} className="apple-entry">
              <h3>{apple.name}</h3>
              {/* Replace <img> with <Image /> */}
              <Image 
                src={apple.imgUrl} 
                alt={apple.name} 
                width={200} 
                height={200} // Specify both width and height when using next/image
                className="apple-image"
              />
              <p><strong>Description:</strong> {apple.desc}</p>
              <p><strong>Activity:</strong> {apple.activity}</p>
              {/* Replace <img> with <Image /> for activity image */}
              <Image 
                src={apple.activityImgUrl} 
                alt={apple.activity} 
                width={200} 
                height={200}
                className="activity-image"
              />
              <p><strong>Author:</strong> {apple.author}</p>
            </div>
          ))
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        .header {
          text-align: center;
          font-size: 2.5rem;
          color: red;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        }

        .search-container {
          text-align: center;
          margin-bottom: 20px;
        }

        .search-input {
          padding: 10px;
          font-size: 1.2rem;
          border: 2px solid black;
          border-radius: 5px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
        }

        .search-input:focus {
          border-color: red;
          box-shadow: 0 4px 6px rgba(255, 0, 0, 0.5);
          outline: none;
        }

        .apple-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .apple-entry {
          background-color: #333;
          color: white;
          border-radius: 10px;
          padding: 20px;
          margin: 20px;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
          transform: perspective(500px) rotateX(5deg);
          transition: transform 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
          width: 250px;
          text-align: center;
        }

        .apple-entry:hover {
          transform: perspective(500px) rotateX(0deg);
          box-shadow: 0 8px 25px rgba(255, 0, 0, 0.7);
        }

        .apple-image,
        .activity-image {
          border-radius: 10px;
          margin: 10px 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header {
            font-size: 2rem;
          }

          .apple-entry {
            width: 200px;
            padding: 15px;
            margin: 10px;
          }

          .search-input {
            font-size: 1rem;
            padding: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;

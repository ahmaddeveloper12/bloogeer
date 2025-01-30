







// import { useEffect, useState } from "react";

// const HomePage = () => {
//   const [fogs, setFogs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   useEffect(() => {
//     const fetchFogs = async () => {
//       // Send search term in the query parameters if it's not empty
//       const query = searchTerm ? `?topic=${searchTerm}` : "";
//       const response = await fetch(`/api/fog${query}`);
//       const data = await response.json();
//       setFogs(data);
//     };

//     fetchFogs();
//   }, [searchTerm]); // Fetch fogs when the searchTerm changes

//   return (
//     <div>
//       <h1 className="header">AI gadgets Entries</h1>

//       {/* Search bar */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by topic..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-input"
//         />
//       </div>

//       <div>
//         {fogs.length === 0 ? (
//           <p>No fogs found.</p>
//         ) : (
//           fogs.map((fog) => (
//             <div key={fog._id} className="fog-entry">
//               <h3>{fog.topic}</h3>
//               <img src={fog.image} alt={fog.topic} width={200} className="fog-image" />
//               <p><strong>Description:</strong> {fog.description}</p>
//               <p><strong>Article Name:</strong> {fog.articleName}</p>
//               <p><strong>Jobs:</strong> {fog.jobs}</p>
//               <p><strong>Invention:</strong> {fog.invention}</p>
//               <p><strong>Gadget Name:</strong> {fog.gadgetName}</p>
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

//         .fog-entry { 
//           background-color: #333;
//           color: white;
//           border-radius: 10px;
//           padding: 20px;
//           margin: 20px;
//           box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
//           transform: perspective(500px) rotateX(5deg);
//           transition: transform 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
//         }

//         .fog-entry:hover { 
//           transform: perspective(500px) rotateX(0deg);
//           box-shadow: 0 8px 25px rgba(255, 0, 0, 0.7);
//         }

//         .fog-image { 
//           border-radius: 10px;
//           margin: 10px 0;
//         }

//         /* Responsive Design */
//         @media (max-width: 768px) {
//           .header {
//             font-size: 2rem;
//           }

//           .fog-entry {
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
import Image from "next/image"; // Import Image component from next/image

const HomePage = () => {
  const [fogs, setFogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchFogs = async () => {
      // Send search term in the query parameters if it's not empty
      const query = searchTerm ? `?topic=${searchTerm}` : "";
      const response = await fetch(`/api/fog${query}`);
      const data = await response.json();
      setFogs(data);
    };

    fetchFogs();
  }, [searchTerm]); // Fetch fogs when the searchTerm changes

  return (
    <div>
      <h1 className="header">AI Gadgets Entries</h1>

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by topic..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div>
        {fogs.length === 0 ? (
          <p>No fogs found.</p>
        ) : (
          fogs.map((fog) => (
            <div key={fog._id} className="fog-entry">
              <h3>{fog.topic}</h3>
              {/* Use Image component */}
              <Image
                src={fog.image}
                alt={fog.topic}
                width={200} // Set width
                height={200} // Set height
                className="fog-image"
              />
              <p><strong>Description:</strong> {fog.description}</p>
              <p><strong>Article Name:</strong> {fog.articleName}</p>
              <p><strong>Jobs:</strong> {fog.jobs}</p>
              <p><strong>Invention:</strong> {fog.invention}</p>
              <p><strong>Gadget Name:</strong> {fog.gadgetName}</p>
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

        .fog-entry {
          background-color: #333;
          color: white;
          border-radius: 10px;
          padding: 20px;
          margin: 20px;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
          transform: perspective(500px) rotateX(5deg);
          transition: transform 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
        }

        .fog-entry:hover {
          transform: perspective(500px) rotateX(0deg);
          box-shadow: 0 8px 25px rgba(255, 0, 0, 0.7);
        }

        .fog-image {
          border-radius: 10px;
          margin: 10px 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header {
            font-size: 2rem;
          }

          .fog-entry {
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

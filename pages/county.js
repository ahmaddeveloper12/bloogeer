









// import { useEffect, useState } from "react";

// const HomePage = () => {
//   const [counties, setCounties] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   useEffect(() => {
//     const fetchCounties = async () => {
//       // Append search term to the URL query string if it's provided
//       const query = searchTerm ? `?title=${searchTerm}` : "";
//       const response = await fetch(`/api/county${query}`);
//       const data = await response.json();
//       setCounties(data);
//     };

//     fetchCounties();
//   }, [searchTerm]); // Fetch counties whenever the search term changes

//   return (
//     <div>
//       <h1 className="header">Country Entries</h1>

//       {/* Search bar */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by title..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-input"
//         />
//       </div>

//       <div>
//         {counties.length === 0 ? (
//           <p>No counties found.</p>
//         ) : (
//           counties.map((county) => (
//             <div key={county._id} className="county-card">
//               <h3>{county.title}</h3>
//               <img src={county.image} alt={county.title} width={200} className="county-image" />
//               <p><strong>Description:</strong> {county.description}</p>
//               <p><strong>Net Worth:</strong> ${county.netWorth}</p>
//               <p><strong>Jobs:</strong> {county.jobs}</p>
//             </div>
//           ))
//         )}
//       </div>

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

//         .county-card { /* Updated class to reflect county entries */
//           background-color: #333;
//           color: white;
//           border-radius: 10px;
//           padding: 20px;
//           margin: 20px;
//           box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
//           transform: perspective(500px) rotateX(5deg);
//           transition: transform 0.3s ease-in-out;
//         }

//         .county-card:hover { /* Hover effect for county cards */
//           transform: perspective(500px) rotateX(0deg);
//         }

//         .county-image { /* Updated image class for counties */
//           border-radius: 10px;
//           margin: 10px 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;













import { useEffect, useState } from "react";
import Image from "next/image"; // Import Image from next/image

const HomePage = () => {
  const [counties, setCounties] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchCounties = async () => {
      // Append search term to the URL query string if it's provided
      const query = searchTerm ? `?title=${searchTerm}` : "";
      const response = await fetch(`/api/county${query}`);
      const data = await response.json();
      setCounties(data);
    };

    fetchCounties();
  }, [searchTerm]); // Fetch counties whenever the search term changes

  return (
    <div>
      <h1 className="header">Country Entries</h1>

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div>
        {counties.length === 0 ? (
          <p>No counties found.</p>
        ) : (
          counties.map((county) => (
            <div key={county._id} className="county-card">
              <h3>{county.title}</h3>
              {/* Replace img tag with Image component */}
              <Image 
                src={county.image} 
                alt={county.title} 
                width={200} // Added width
                height={200} // Added height
                className="county-image"
              />
              <p><strong>Description:</strong> {county.description}</p>
              <p><strong>Net Worth:</strong> ${county.netWorth}</p>
              <p><strong>Jobs:</strong> {county.jobs}</p>
            </div>
          ))
        )}
      </div>

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

        .county-card { /* Updated class to reflect county entries */
          background-color: #333;
          color: white;
          border-radius: 10px;
          padding: 20px;
          margin: 20px;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
          transform: perspective(500px) rotateX(5deg);
          transition: transform 0.3s ease-in-out;
        }

        .county-card:hover { /* Hover effect for county cards */
          transform: perspective(500px) rotateX(0deg);
        }

        .county-image { /* Updated image class for counties */
          border-radius: 10px;
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
};

export default HomePage;

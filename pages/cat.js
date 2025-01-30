


// import { useEffect, useState } from "react";

// const HomePage = () => {
//   const [cats, setCats] = useState([]); // Corrected state name to 'cats'
//   const [searchTerm, setSearchTerm] = useState(""); // State for the search term

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   useEffect(() => {
//     const fetchCats = async () => {
//       // Construct the search query based on the search term
//       const query = searchTerm ? `?name=${searchTerm}` : ""; // Search by name by default
//       const response = await fetch(`/api/cat${query}`);
//       const data = await response.json();
//       setCats(data); // Update state with the cat data
//     };

//     fetchCats();
//   }, [searchTerm]); // Re-fetch data when searchTerm changes

//   return (
//     <div>
//       <h1 className="header">Spoert Entries</h1> {/* Updated header to reflect cats */}

//       {/* Search bar */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by name..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-input" // Added class for styling
//         />
//       </div>

//       <div>
//         {cats.length === 0 ? (
//           <p>No cats found.</p> 
//         ) : (
//           cats.map((cat) => (
//             <div key={cat._id} className="cat-card"> {/* Changed class to reflect cats */}
//               <h3>{cat.name}</h3>
//               <img src={cat.imgUrl} alt={cat.name} width={200} className="cat-image" /> {/* Updated image class */}
//               <p><strong>Description:</strong> {cat.desc}</p>
//               <p><strong>Activity:</strong> {cat.activity}</p>
//               <img src={cat.activityImgUrl} alt={cat.activity} width={200} className="cat-image" />
//               <p><strong>Author:</strong> {cat.author}</p>
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

//         .cat-card { /* Updated class to reflect cat entries */
//           background-color: #333;
//           color: white;
//           border-radius: 10px;
//           padding: 20px;
//           margin: 20px;
//           box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
//           transform: perspective(500px) rotateX(5deg);
//           transition: transform 0.3s ease-in-out;
//         }

//         .cat-card:hover { /* Updated hover effect for cat cards */
//           transform: perspective(500px) rotateX(0deg);
//         }

//         .cat-image { /* Updated image class for cats */
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
  const [cats, setCats] = useState([]); // Corrected state name to 'cats'
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchCats = async () => {
      // Construct the search query based on the search term
      const query = searchTerm ? `?name=${searchTerm}` : ""; // Search by name by default
      const response = await fetch(`/api/cat${query}`);
      const data = await response.json();
      setCats(data); // Update state with the cat data
    };

    fetchCats();
  }, [searchTerm]); // Re-fetch data when searchTerm changes

  return (
    <div>
      <h1 className="header">Spoert Entries</h1> {/* Updated header to reflect cats */}

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input" // Added class for styling
        />
      </div>

      <div>
        {cats.length === 0 ? (
          <p>No cats found.</p> 
        ) : (
          cats.map((cat) => (
            <div key={cat._id} className="cat-card"> {/* Changed class to reflect cats */}
              <h3>{cat.name}</h3>
              {/* Replace img tag with Image component */}
              <Image 
                src={cat.imgUrl} 
                alt={cat.name} 
                width={200} 
                height={200} // Added height
                className="cat-image"
              />
              <p><strong>Description:</strong> {cat.desc}</p>
              <p><strong>Activity:</strong> {cat.activity}</p>
              <Image 
                src={cat.activityImgUrl} 
                alt={cat.activity} 
                width={200} 
                height={200} // Added height
                className="cat-image"
              />
              <p><strong>Author:</strong> {cat.author}</p>
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

        .cat-card { /* Updated class to reflect cat entries */
          background-color: #333;
          color: white;
          border-radius: 10px;
          padding: 20px;
          margin: 20px;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
          transform: perspective(500px) rotateX(5deg);
          transition: transform 0.3s ease-in-out;
        }

        .cat-card:hover { /* Updated hover effect for cat cards */
          transform: perspective(500px) rotateX(0deg);
        }

        .cat-image { /* Updated image class for cats */
          border-radius: 10px;
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
};

export default HomePage;

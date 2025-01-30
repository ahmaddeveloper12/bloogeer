










// import { useEffect, useState } from "react";

// const HomePage = () => {
//   const [dogs, setDogs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); // State for the search term

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   useEffect(() => {
//     const fetchDogs = async () => {
//       // Construct the search query based on the search term
//       const query = searchTerm ? `?name=${searchTerm}` : ""; // Search by name by default
//       const response = await fetch(`/api/dog${query}`);
//       const data = await response.json();
//       setDogs(data);
//     };

//     fetchDogs();
//   }, [searchTerm]); // Re-fetch data when searchTerm changes

//   return (
//     <div>
//       <h1 className="header">Dog Entries</h1>

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

//       <div>
//         {dogs.length === 0 ? (
//           <p>No dogs found.</p>
//         ) : (
//           dogs.map((dog) => (
//             <div key={dog._id} className="dog-card">
//               <h3>{dog.name}</h3>
//               <img src={dog.imgUrl} alt={dog.name} width={200} className="dog-image" />
//               <p><strong>Description:</strong> {dog.desc}</p>
//               <p><strong>Activity:</strong> {dog.activity}</p>
//               <img src={dog.activityImgUrl} alt={dog.activity} width={200} className="dog-image" />
//               <p><strong>Author:</strong> {dog.author}</p>
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

//         .dog-card {
//           background-color: #333;
//           color: white;
//           border-radius: 10px;
//           padding: 20px;
//           margin: 20px;
//           box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
//           transform: perspective(500px) rotateX(5deg);
//           transition: transform 0.3s ease-in-out;
//         }

//         .dog-card:hover {
//           transform: perspective(500px) rotateX(0deg);
//         }

//         .dog-image {
//           border-radius: 10px;
//           margin: 10px 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;





import { useEffect, useState } from "react";
import Image from "next/image"; // Import the Image component

const HomePage = () => {
  const [dogs, setDogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchDogs = async () => {
      // Construct the search query based on the search term
      const query = searchTerm ? `?name=${searchTerm}` : ""; // Search by name by default
      const response = await fetch(`/api/dog${query}`);
      const data = await response.json();
      setDogs(data);
    };

    fetchDogs();
  }, [searchTerm]); // Re-fetch data when searchTerm changes

  return (
    <div>
      <h1 className="header">Dog Entries</h1>

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

      <div>
        {dogs.length === 0 ? (
          <p>No dogs found.</p>
        ) : (
          dogs.map((dog) => (
            <div key={dog._id} className="dog-card">
              <h3>{dog.name}</h3>
              {/* Replace img with Image component */}
              <Image 
                src={dog.imgUrl} 
                alt={dog.name} 
                width={200} 
                height={200} 
                className="dog-image" 
              />
              <p><strong>Description:</strong> {dog.desc}</p>
              <p><strong>Activity:</strong> {dog.activity}</p>
              <Image 
                src={dog.activityImgUrl} 
                alt={dog.activity} 
                width={200} 
                height={200} 
                className="dog-image" 
              />
              <p><strong>Author:</strong> {dog.author}</p>
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

        .dog-card {
          background-color: #333;
          color: white;
          border-radius: 10px;
          padding: 20px;
          margin: 20px;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
          transform: perspective(500px) rotateX(5deg);
          transition: transform 0.3s ease-in-out;
        }

        .dog-card:hover {
          transform: perspective(500px) rotateX(0deg);
        }

        .dog-image {
          border-radius: 10px;
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
};

export default HomePage;







// import { useEffect, useState } from "react";

// const HomePage = () => {
//   const [works, setWorks] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const fetchWorks = async () => {
//       const response = await fetch(`/api/works?search=${searchQuery}`);
//       const data = await response.json();
//       setWorks(data);
//     };

//     fetchWorks();
//   }, [searchQuery]); // Add searchQuery as a dependency to fetch works when the search changes

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value); // Update the search query state
//   };

//   return (
//     <div>
//       <h1 className="header">Work Entries</h1>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search..."
//           value={searchQuery} // Bind the search input to the searchQuery state
//           onChange={handleSearch} // Update the searchQuery state as user types
//         />
//       </div>
//       <div className="works-container">
//         {works.map((work) => (
//           <div key={work._id} className="fog-entry">
//             <h3>{work.title}</h3>
//             <img src={work.image} alt={work.title} className="fog-image" />
//             <p><strong>Name:</strong> {work.name}</p>
//             <p><strong>Salary:</strong> ${work.salary}</p>
//             <p><strong>Seat:</strong> {work.seat}</p>
//           </div>
//         ))}
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
//           border: 2px solid #333;
//           border-radius: 5px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease-in-out;
//           background-color: #222;
//           color: white;
//         }

//         .search-input:focus {
//           border-color: red;
//           box-shadow: 0 4px 6px rgba(255, 0, 0, 0.5);
//           outline: none;
//         }

//         .works-container {
//           display: grid;
//           grid-template-columns: 1fr 1fr 1fr;
//           gap: 20px;
//           margin-top: 20px;
//         }

//         .fog-entry {
//           background-color: #111;
//           color: white;
//           border-radius: 10px;
//           padding: 20px;
//           margin: 10px;
//           box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
//           transform: perspective(500px) rotateX(5deg);
//           transition: transform 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
//         }

//         .fog-entry:hover {
//           transform: perspective(500px) rotateX(0deg);
//           box-shadow: 0 8px 25px rgba(255, 0, 0, 0.7);
//         }

//         .fog-image {
//           width: 100%;
//           border-radius: 10px;
//           margin: 10px 0;
//           max-height: 200px;
//           object-fit: cover;
//         }

//         /* Responsive Design */
//         @media (max-width: 768px) {
//           .header {
//             font-size: 2rem;
//           }

//           .search-input {
//             font-size: 1rem;
//             padding: 8px;
//           }

//           .works-container {
//             grid-template-columns: 1fr 1fr;
//           }

//           .fog-entry {
//             padding: 15px;
//             margin: 10px;
//           }

//           .fog-image {
//             max-height: 150px;
//           }
//         }

//         @media (max-width: 480px) {
//           .works-container {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;


















import { useEffect, useState } from "react";
import Image from "next/image"; // Import the Image component from next/image

const HomePage = () => {
  const [works, setWorks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchWorks = async () => {
      const response = await fetch(`/api/works?search=${searchQuery}`);
      const data = await response.json();
      setWorks(data);
    };

    fetchWorks();
  }, [searchQuery]); // Add searchQuery as a dependency to fetch works when the search changes

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update the search query state
  };

  return (
    <div>
      <h1 className="header">Work Entries</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery} // Bind the search input to the searchQuery state
          onChange={handleSearch} // Update the searchQuery state as user types
        />
      </div>
      <div className="works-container">
        {works.map((work) => (
          <div key={work._id} className="fog-entry">
            <h3>{work.title}</h3>
            {/* Replace the img tag with the Image component */}
            <Image 
              src={work.image} 
              alt={work.title} 
              className="fog-image"
              width={500} // Set a width for the image
              height={300} // Set a height for the image
            />
            <p><strong>Name:</strong> {work.name}</p>
            <p><strong>Salary:</strong> ${work.salary}</p>
            <p><strong>Seat:</strong> {work.seat}</p>
          </div>
        ))}
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
          border: 2px solid #333;
          border-radius: 5px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
          background-color: #222;
          color: white;
        }

        .search-input:focus {
          border-color: red;
          box-shadow: 0 4px 6px rgba(255, 0, 0, 0.5);
          outline: none;
        }

        .works-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          margin-top: 20px;
        }

        .fog-entry {
          background-color: #111;
          color: white;
          border-radius: 10px;
          padding: 20px;
          margin: 10px;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
          transform: perspective(500px) rotateX(5deg);
          transition: transform 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
        }

        .fog-entry:hover {
          transform: perspective(500px) rotateX(0deg);
          box-shadow: 0 8px 25px rgba(255, 0, 0, 0.7);
        }

        .fog-image {
          width: 100%;
          border-radius: 10px;
          margin: 10px 0;
          max-height: 200px;
          object-fit: cover;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header {
            font-size: 2rem;
          }

          .search-input {
            font-size: 1rem;
            padding: 8px;
          }

          .works-container {
            grid-template-columns: 1fr 1fr;
          }

          .fog-entry {
            padding: 15px;
            margin: 10px;
          }

          .fog-image {
            max-height: 150px;
          }
        }

        @media (max-width: 480px) {
          .works-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;

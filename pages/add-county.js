// import { useState } from "react";

// const AddCountyPage = () => {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");
//   const [netWorth, setNetWorth] = useState("");
//   const [jobs, setJobs] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newCounty = { title, image, description, netWorth: parseFloat(netWorth), jobs };

//     const response = await fetch("/api/county", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newCounty),
//     });

//     if (response.ok) {
//       setTitle("");
//       setImage("");
//       setDescription("");
//       setNetWorth("");
//       setJobs("");
//       alert("County added successfully!");
//     } else {
//       alert("Error adding county!");
//     }
//   };

//   return (
//     <div>
//       <h1>Add New County Entry</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Image URL</label>
//           <input
//             type="text"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Net Worth</label>
//           <input
//             type="number"
//             value={netWorth}
//             onChange={(e) => setNetWorth(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Jobs</label>
//           <input
//             type="text"
//             value={jobs}
//             onChange={(e) => setJobs(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Add County</button>
//       </form>
//       <style jsx>{`
//         .header {
//           text-align: center;
//           color: #ff0000;
//           text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
//           margin-bottom: 30px;
//           font-size: 2.5rem;
//         }

//         .cat-form {
//           width: 100%;
//           max-width: 600px;
//           margin: 0 auto;
//           background-color: #111;
//           padding: 20px;
//           border-radius: 10px;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
//         }

//         .form-field {
//           margin-bottom: 20px;
//         }

//         label {
//           color: #fff;
//           display: block;
//           font-size: 1.2rem;
//           margin-bottom: 5px;
//         }

//         input,
//         textarea {
//           width: 100%;
//           padding: 10px;
//           font-size: 1rem;
//           background-color: #222;
//           border: 1px solid #333;
//           border-radius: 5px;
//           color: white;
//           transition: all 0.3s ease-in-out;
//         }

//         input:focus,
//         textarea:focus {
//           border-color: red;
//           box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
//           outline: none;
//         }

//         .submit-btn {
//           background-color: red;
//           color: white;
//           padding: 12px 20px;
//           border: none;
//           border-radius: 5px;
//           font-size: 1.2rem;
//           cursor: pointer;
//           transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
//         }

//         .submit-btn:hover {
//           background-color: #cc0000;
//           transform: scale(1.05);
//         }

//         .submit-btn:active {
//           background-color: #990000;
//         }

//         /* Responsive Design */
//         @media (max-width: 768px) {
//           .header {
//             font-size: 2rem;
//           }

//           .cat-form {
//             padding: 15px;
//           }

//           .submit-btn {
//             width: 100%;
//             font-size: 1rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AddCountyPage;













import { useState } from "react";

const AddCountyPage = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [netWorth, setNetWorth] = useState("");
  const [jobs, setJobs] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCounty = { title, image, description, netWorth: parseFloat(netWorth), jobs };

    const response = await fetch("/api/county", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCounty),
    });

    if (response.ok) {
      setTitle("");
      setImage("");
      setDescription("");
      setNetWorth("");
      setJobs("");
      alert("County added successfully!");
    } else {
      alert("Error adding county!");
    }
  };

  return (
    <div>
      <h1 className="header">Add New Country Entry</h1>
      <form onSubmit={handleSubmit} className="county-form">
        <div className="form-field">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Net Worth</label>
          <input
            type="number"
            value={netWorth}
            onChange={(e) => setNetWorth(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Jobs</label>
          <input
            type="text"
            value={jobs}
            onChange={(e) => setJobs(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Country</button>
      </form>

      <style jsx>{`
        .header {
          text-align: center;
          color: #ff0000;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
          margin-bottom: 30px;
          font-size: 2.5rem;
        }

        .county-form {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #111;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .form-field {
          margin-bottom: 20px;
        }

        label {
          color: #fff;
          display: block;
          font-size: 1.2rem;
          margin-bottom: 5px;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          background-color: #222;
          border: 1px solid #333;
          border-radius: 5px;
          color: white;
          transition: all 0.3s ease-in-out;
        }

        input:focus,
        textarea:focus {
          border-color: red;
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
          outline: none;
        }

        .submit-btn {
          background-color: red;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        .submit-btn:hover {
          background-color: #cc0000;
          transform: scale(1.05);
        }

        .submit-btn:active {
          background-color: #990000;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header {
            font-size: 2rem;
          }

          .county-form {
            padding: 15px;
          }

          .submit-btn {
            width: 100%;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AddCountyPage;

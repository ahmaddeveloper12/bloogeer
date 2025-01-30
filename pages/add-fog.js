// import { useState } from "react";

// const AddFogPage = () => {
//   const [topic, setTopic] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");
//   const [articleName, setArticleName] = useState("");
//   const [jobs, setJobs] = useState("");
//   const [invention, setInvention] = useState("");
//   const [gadgetName, setGadgetName] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newFog = {
//       topic,
//       image,
//       description,
//       articleName,
//       jobs,
//       invention,
//       gadgetName,
//     };

//     const response = await fetch("/api/fog", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newFog),
//     });

//     if (response.ok) {
//       setTopic("");
//       setImage("");
//       setDescription("");
//       setArticleName("");
//       setJobs("");
//       setInvention("");
//       setGadgetName("");
//       alert("Fog entry added successfully!");
//     } else {
//       alert("Error adding fog entry!");
//     }
//   };

//   return (
//     <div>
//       <h1>Add New Fog Entry</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Topic</label>
//           <input
//             type="text"
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
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
//           <label>Article Name</label>
//           <input
//             type="text"
//             value={articleName}
//             onChange={(e) => setArticleName(e.target.value)}
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
//         <div>
//           <label>Invention</label>
//           <input
//             type="text"
//             value={invention}
//             onChange={(e) => setInvention(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Gadget Name</label>
//           <input
//             type="text"
//             value={gadgetName}
//             onChange={(e) => setGadgetName(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Add Fog</button>
//       </form>
//       <style jsx>{`
//         .header {
//           text-align: center;
//           color: #ff0000;
//           text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
//           margin-bottom: 30px;
//           font-size: 2.5rem;
//         }

//         .dog-form {
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

//           .dog-form {
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

// export default AddFogPage;







import { useState } from "react";

const AddFogPage = () => {
  const [topic, setTopic] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [articleName, setArticleName] = useState("");
  const [jobs, setJobs] = useState("");
  const [invention, setInvention] = useState("");
  const [gadgetName, setGadgetName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFog = {
      topic,
      image,
      description,
      articleName,
      jobs,
      invention,
      gadgetName,
    };

    const response = await fetch("/api/fog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFog),
    });

    if (response.ok) {
      setTopic("");
      setImage("");
      setDescription("");
      setArticleName("");
      setJobs("");
      setInvention("");
      setGadgetName("");
      alert("Fog entry added successfully!");
    } else {
      alert("Error adding fog entry!");
    }
  };

  return (
    <div>
      <h1 className="header">Add New Ai </h1>
      <form onSubmit={handleSubmit} className="fog-form">
        <div className="form-field">
          <label>Topic</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
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
          <label>Article Name</label>
          <input
            type="text"
            value={articleName}
            onChange={(e) => setArticleName(e.target.value)}
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
        <div className="form-field">
          <label>Invention</label>
          <input
            type="text"
            value={invention}
            onChange={(e) => setInvention(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Gadget Name</label>
          <input
            type="text"
            value={gadgetName}
            onChange={(e) => setGadgetName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add AI</button>
      </form>

      <style jsx>{`
        .header {
          text-align: center;
          color: #ff0000;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
          margin-bottom: 30px;
          font-size: 2.5rem;
        }

        .fog-form {
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

          .fog-form {
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

export default AddFogPage;

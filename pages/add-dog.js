// import { useState } from "react";

// const AddDogPage = () => {
//   const [name, setName] = useState("");
//   const [imgUrl, setImgUrl] = useState("");
//   const [desc, setDesc] = useState("");
//   const [activity, setActivity] = useState("");
//   const [activityImgUrl, setActivityImgUrl] = useState("");
//   const [author, setAuthor] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newDog = {
//       name,
//       imgUrl,
//       desc,
//       activity,
//       activityImgUrl,
//       author,
//     };

//     const response = await fetch("/api/dog", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newDog),
//     });

//     if (response.ok) {
//       setName("");
//       setImgUrl("");
//       setDesc("");
//       setActivity("");
//       setActivityImgUrl("");
//       setAuthor("");
//       alert("Dog entry added successfully!");
//     } else {
//       alert("Error adding dog entry!");
//     }
//   };

//   return (
//     <div>
//       <h1>Add New Dog Entry</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Image URL</label>
//           <input
//             type="text"
//             value={imgUrl}
//             onChange={(e) => setImgUrl(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Description</label>
//           <textarea
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Activity</label>
//           <input
//             type="text"
//             value={activity}
//             onChange={(e) => setActivity(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Activity Image URL</label>
//           <input
//             type="text"
//             value={activityImgUrl}
//             onChange={(e) => setActivityImgUrl(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Author</label>
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Add Dog</button>
//       </form>
//       <style jsx>{`
//         .header {
//           text-align: center;
//           color: #ff0000;
//           text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
//           margin-bottom: 30px;
//           font-size: 2.5rem;
//         }

//         .county-form {
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

//           .county-form {
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

// export default AddDogPage;










import { useState } from "react";

const AddDogPage = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [activity, setActivity] = useState("");
  const [activityImgUrl, setActivityImgUrl] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDog = {
      name,
      imgUrl,
      desc,
      activity,
      activityImgUrl,
      author,
    };

    const response = await fetch("/api/dog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDog),
    });

    if (response.ok) {
      setName("");
      setImgUrl("");
      setDesc("");
      setActivity("");
      setActivityImgUrl("");
      setAuthor("");
      alert("Dog entry added successfully!");
    } else {
      alert("Error adding dog entry!");
    }
  };

  return (
    <div>
      <h1 className="header">Add New Dog Entry</h1>
      <form onSubmit={handleSubmit} className="dog-form">
        <div className="form-field">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Image URL</label>
          <input
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Activity</label>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Activity Image URL</label>
          <input
            type="text"
            value={activityImgUrl}
            onChange={(e) => setActivityImgUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Dog</button>
      </form>

      <style jsx>{`
        .header {
          text-align: center;
          color: #ff0000;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
          margin-bottom: 30px;
          font-size: 2.5rem;
        }

        .dog-form {
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

          .dog-form {
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

export default AddDogPage;

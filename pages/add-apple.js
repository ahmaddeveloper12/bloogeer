// // import { useState } from "react";

// // const AddapplePage = () => {
// //   const [name, setName] = useState("");
// //   const [imgUrl, setImgUrl] = useState("");
// //   const [desc, setDesc] = useState("");
// //   const [activity, setActivity] = useState("");
// //   const [activityImgUrl, setActivityImgUrl] = useState("");
// //   const [author, setAuthor] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Construct the new apple entry
// //     const newApple = {
// //       name,
// //       imgUrl,
// //       desc,
// //       activity,
// //       activityImgUrl,
// //       author,
// //     };

// //     // Make the POST request to create the new apple entry
// //     const response = await fetch("/api/apple", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(newApple),
// //     });

// //     if (response.ok) {
// //       // Clear the form fields after successful submission
// //       setName("");
// //       setImgUrl("");
// //       setDesc("");
// //       setActivity("");
// //       setActivityImgUrl("");
// //       setAuthor("");
// //       alert("Apple entry added successfully!");
// //     } else {
// //       alert("Error adding apple entry!");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Add New Apple Entry</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Name</label>
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Image URL</label>
// //           <input
// //             type="text"
// //             value={imgUrl}
// //             onChange={(e) => setImgUrl(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Description</label>
// //           <textarea
// //             value={desc}
// //             onChange={(e) => setDesc(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Activity</label>
// //           <input
// //             type="text"
// //             value={activity}
// //             onChange={(e) => setActivity(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Activity Image URL</label>
// //           <input
// //             type="text"
// //             value={activityImgUrl}
// //             onChange={(e) => setActivityImgUrl(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Author</label>
// //           <input
// //             type="text"
// //             value={author}
// //             onChange={(e) => setAuthor(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Add Apple</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddapplePage;









// import { useState } from "react";

// const AddapplePage = () => {
//   const [name, setName] = useState("");
//   const [imgUrl, setImgUrl] = useState("");
//   const [desc, setDesc] = useState("");
//   const [activity, setActivity] = useState("");
//   const [activityImgUrl, setActivityImgUrl] = useState("");
//   const [author, setAuthor] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Construct the new apple entry
//     const newApple = {
//       name,
//       imgUrl,
//       desc,
//       activity,
//       activityImgUrl,
//       author,
//     };

//     // Make the POST request to create the new apple entry
//     const response = await fetch("/api/apple", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newApple),
//     });

//     if (response.ok) {
//       // Clear the form fields after successful submission
//       setName("");
//       setImgUrl("");
//       setDesc("");
//       setActivity("");
//       setActivityImgUrl("");
//       setAuthor("");
//       alert("Apple entry added successfully!");
//     } else {
//       alert("Error adding apple entry!");
//     }
//   };

//   return (
//     <div>
//       {/* AdSense space */}
//       <div className="adsense-space">
//         {/* You can place your AdSense code here */}
//       </div>

//       <h1>Add New Apple Entry</h1>

//       <form onSubmit={handleSubmit} className="apple-form">
//         <div className="form-field">
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-field">
//           <label>Image URL</label>
//           <input
//             type="text"
//             value={imgUrl}
//             onChange={(e) => setImgUrl(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-field">
//           <label>Description</label>
//           <textarea
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-field">
//           <label>Activity</label>
//           <input
//             type="text"
//             value={activity}
//             onChange={(e) => setActivity(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-field">
//           <label>Activity Image URL</label>
//           <input
//             type="text"
//             value={activityImgUrl}
//             onChange={(e) => setActivityImgUrl(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-field">
//           <label>Author</label>
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="submit-btn">Add Apple</button>
//       </form>

      
//     </div>
//   );
// };

// export default AddapplePage;








import { useState } from "react";

const AddapplePage = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [activity, setActivity] = useState("");
  const [activityImgUrl, setActivityImgUrl] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the new apple entry
    const newApple = {
      name,
      imgUrl,
      desc,
      activity,
      activityImgUrl,
      author,
    };

    // Make the POST request to create the new apple entry
    const response = await fetch("/api/apple", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newApple),
    });

    if (response.ok) {
      // Clear the form fields after successful submission
      setName("");
      setImgUrl("");
      setDesc("");
      setActivity("");
      setActivityImgUrl("");
      setAuthor("");
      alert("Apple entry added successfully!");
    } else {
      alert("Error adding apple entry!");
    }
  };

  return (
    <div>
      <div className="adsense-space">
        {/* You can place your AdSense code here */}
      </div>

      <h1 className="header">Add New News Entry</h1>

      <form onSubmit={handleSubmit} className="apple-form">
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
        <button type="submit" className="submit-btn">Add News</button>
      </form>

      <style jsx>{`
        .header {
          text-align: center;
          color: #ff0000;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
          margin-bottom: 30px;
          font-size: 2.5rem;
        }

        .apple-form {
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

          .apple-form {
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

export default AddapplePage;

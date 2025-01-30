// import { useState } from "react";

// const AddWorkPage = () => {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [salary, setSalary] = useState("");
//   const [name, setName] = useState("");
//   const [seat, setSeat] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newWork = { title, image, salary: parseFloat(salary), name, seat };

//     const response = await fetch("/api/works", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newWork),
//     });

//     if (response.ok) {
//       setTitle("");
//       setImage("");
//       setSalary("");
//       setName("");
//       setSeat("");
//       alert("Work added successfully!");
//     } else {
//       alert("Error adding work!");
//     }
//   };

//   return (
//     <div>
//       <h1>Add New Work Entry</h1>
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
//           <label>Salary</label>
//           <input
//             type="number"
//             value={salary}
//             onChange={(e) => setSalary(e.target.value)}
//             required
//           />
//         </div>
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
//           <label>Seat</label>
//           <input
//             type="text"
//             value={seat}
//             onChange={(e) => setSeat(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Add Work</button>
//       </form>
//       <style jsx>{`
//         .header {
//           text-align: center;
//           color: #ff0000;
//           text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
//           margin-bottom: 30px;
//           font-size: 2.5rem;
//         }

//         .fog-form {
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

//           .fog-form {
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

// export default AddWorkPage;









import { useState } from "react";

const AddWorkPage = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [salary, setSalary] = useState("");
  const [name, setName] = useState("");
  const [seat, setSeat] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newWork = { title, image, salary: parseFloat(salary), name, seat };

    const response = await fetch("/api/works", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWork),
    });

    if (response.ok) {
      setTitle("");
      setImage("");
      setSalary("");
      setName("");
      setSeat("");
      alert("Work added successfully!");
    } else {
      alert("Error adding work!");
    }
  };

  return (
    <div className="container">
      <h1 className="header">Add New Work Entry</h1>
      <form onSubmit={handleSubmit} className="work-form">
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
          <label>Salary</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>
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
          <label>Seat</label>
          <input
            type="text"
            value={seat}
            onChange={(e) => setSeat(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Work</button>
      </form>
      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
        }

        .header {
          text-align: center;
          color: red;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
          margin-bottom: 30px;
          font-size: 2.5rem;
        }

        .work-form {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #111;
          padding: 30px;
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

        input {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          background-color: #222;
          border: 1px solid #333;
          border-radius: 5px;
          color: white;
          transition: all 0.3s ease-in-out;
        }

        input:focus {
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

          .work-form {
            padding: 25px;
          }

          .submit-btn {
            width: 100%;
            font-size: 1rem;
          }

          .form-field label {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .header {
            font-size: 1.8rem;
          }

          .work-form {
            padding: 20px;
          }

          .form-field input {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AddWorkPage;

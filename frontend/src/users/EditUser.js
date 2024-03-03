import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {

  let navigate = useNavigate();

  const {id} = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user; //deconstruct obj

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    }); //spread opr..keep adding new objs
  };

  useEffect(()=>{
    loadUser();
  }, [])
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user)
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                <strong>Name</strong>
              </label>
              <input
                type="{text}"
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                <strong>User Name</strong>
              </label>
              <input
                type="{text}"
                className="form-control"
                placeholder="Enter Your User Name"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                <strong>Email</strong>
              </label>
              <input
                type="{text}"
                className="form-control"
                placeholder="Enter Your Email Address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
              <button type="submit" className="mt-2 btn btn-outline-primary">
                Submit
              </button>
              <Link
                to="/"
                className="mt-2 btn btn-outline-danger mx-2"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required");
    } else {
      setError("");
      alert("Form submitted successfully");

      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <form
        onSubmit={submit}
        className='w-160 h-150 text-center flex flex-col items-center bg-pink-100 px-20 py-20 rounded-lg shadow-lg gap-12'
      >

        {error && <p className="text-red-500 text-xl">{error}</p>}

        <input
          className='h-15 w-130 bg-gray-100 border-3 outline-none rounded-md px-4 py-2 text-xl font-semibold'
          type="text"
          placeholder='Enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className='h-15 w-130 bg-gray-100 border-3 outline-none rounded-md px-4 py-2 text-xl font-semibold'
          type="email"
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className='h-15 w-130 bg-gray-100 border-3 outline-none rounded-md px-4 py-2 text-xl font-semibold'
          type="password"
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className='h-18 w-50 bg-blue-500 text-white rounded-xl text-2xl font-semibold'
        >
          Submit
        </button>

      </form>
    </div>
  );
};

export default Form;

"use client";
import { useState } from "react";
import { addDoc, collection, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

export default function Form() {
 
  
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async () => {
    let student = {
      name: userName,
      email,
      password,
    };
    try {
      const collectionName = collection(db, "course");

      await addDoc(collectionName, student);
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h1>Course registeration</h1>

      <label
        for="name"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Enter Your Name
      </label>

      <input
        type="text"
        id="name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <label
        for="email"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Enter Your Email
      </label>

      <input
        type="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label
        for="Password"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Enter Your Password
      </label>
      <input
        type="password"
        id="Password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={onSubmitHandler}
        type="submit"
        className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
  );
}

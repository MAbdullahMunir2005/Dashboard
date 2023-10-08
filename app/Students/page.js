"use client";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/config/firebase";

function page() {
  const [courses, setCourses] = useState([]);
  const fetchData = async () => {
    try {
      const collectionName = collection(db, "course");
      const docs = await getDocs(collectionName);
      const courseData = [];
      docs.forEach((doc) => {
        console.log(doc.data());
        courseData.push({
          ...doc.data(),
        });
      });
      setCourses(courseData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {courses.map((course) => {
        return (
          <div>
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
              <tr>
                <td>{course.name}</td>
              </tr>
              <tr>
                <td>{course.email}</td>
              </tr>
              <tr>
                <td>{course.password}</td>
              </tr>
            </table>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default page;

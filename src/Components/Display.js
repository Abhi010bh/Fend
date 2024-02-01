import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import '../index.css';
import { Table } from "flowbite-react";
import { QuickAccess } from "./QuickAccess";
import { CardGroup } from "semantic-ui-react";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import SCard from "./SCard";

const Display = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    const fetchAllStudent = async () => {
      try {
        const res = await axios.get("http://localhost:8040/data");
        setStudent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllStudent();
  }, []);

  return (
    <>
    <QuickAccess />
   <div className="grid md:grid-cols-4 grid-cols-1 gap-3 justify-items-center">
    {student.map((student) => (
               <SCard Name={student.SName} Fees={student.Fees} USN={student.USN}/>
                ))}
              </div>
              </>
                
  );
};

export default Display;
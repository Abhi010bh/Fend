import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  Button,
  Checkbox,
  Card,
  Label,
  TextInput,
  Alert,
} from "flowbite-react";
import {
  HiInformationCircle,
  HiOutlineArrowLeft,
  HiOutlineArrowSmLeft,
} from "react-icons/hi";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Avatar } from "flowbite-react";
import avatarImage from "../assets/images/avatar.png";
import { TextField, Button as MuiButton } from "@mui/material";
import { ManageSearch } from "@mui/icons-material";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import {Modal,Typography} from "@mui/material";
import { Home, ArrowBack, List } from "@mui/icons-material";
import MyModal from "./Modal";
import { useEffect } from "react";
import SCard from "./SCard";
import { QuickAccess } from "./QuickAccess";

export default function Add() {
  const [open, setOpen] = useState(false);
  
  const navigator = useNavigate();
  const [Search, SetSearchValue] = useState({
    USN: "",
  });
  const [responseAdd, setResponse] = useState([]);
  const [alertMode, setalertMode] = useState(false);
  const handleChange = (e) => {
    SetSearchValue((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    
  };

  

  //Refer for fetchAPI
  /*const handleAPISubmit = () => {
    const fetchData = fetch("http://localhost:8040/data");

    fetchData
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`HTTP error: ${resp.status}`);
        }
        return resp.json();
      })
      .then((data) => {
        data.forEach((item) => {
          console.log(item);
        });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("Started Request");
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    setalertMode(true);
    try {
      const response = await axios.post("http://localhost:8040/search", Search);
      console.log(response.data);
      setResponse(response.data);
    } catch (err) {
      console.log(err);
    }
    
    alertMode?setOpen(true):setOpen(false);


  };
  useEffect(() => {
    if (alertMode) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [alertMode]);

  const AlertRender = () => {
    const FailureAlert = () => {
      return (
        <Alert color="failure" icon={HiInformationCircle}>
        <span>
          <p>
            <span className="font-medium">Info alert!</span>
            No record Found in the database
          </p>
        </span>
      </Alert>
      );
    };
    const Profile = () => {
      return (
        <div className="SearchDisplay">
          {responseAdd.map((Student) => (
            <div key={Student.USN} className="justify-center flex flex-col align-center">
              {" "}
                            
          <SCard Name={Student.SName} USN={Student.USN} Fee={Student.Fees} />
            </div>
            
          ))}
        </div>
      );
    };

    return <>{responseAdd.length > 0 ? <Profile /> : <FailureAlert />}</>;
  };

  return (
    <>
      <QuickAccess />

      <div className="justify-center  flex flex-col items-center  h-screen ">
        <div>
          <Card className="m-6 w-96 justify-center items-center flex-nowrap">
            <div className="form">
              <div className="form flex flex-col space-y-5 items-center">
                <div className="h1">Student Info</div>
                <div>
                  <Avatar
                    alt="avatar of Jese"
                    className=""
                    src={avatarImage}
                    rounded
                  />
                </div>
                <TextField
                  id="filled-search"
                  label="University Seat Number"
                  type="search"
                  variant="standard"
                  placeholder="2GI2XAB000"
                  onChange={handleChange}
                  name="USN"
                />
                <MuiButton variant="contained" endIcon={<ManageSearch />} onClick={handleSubmit}>
                  Search
                </MuiButton>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <MyModal Open={open} OnClose={()=>{setOpen(false)}} Alert={AlertRender}/>
    </>
  );
}

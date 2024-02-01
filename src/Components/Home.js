import React from "react";
import { Navigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from 'flowbite-react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';
import { QuickAccess } from "./QuickAccess";

const Home=()=> {
  const navigate = useNavigate();
  return (
   
        <div className="justify-center  flex items-center  h-screen p-6">
           <QuickAccess />
    <Button.Group>
      <Button color="gray" onClick={()=>navigate('/Add')}>
      <HiAdjustments className="mr-3 h-4 w-4" />
        <p>
          Search
        </p>
      </Button>
      <Button color="gray" onClick={()=>navigate('/Display')}>
      <HiUserCircle className="mr-3 h-4 w-4" />
        
        <p>
          Display All
        </p>
      </Button>
      <Button color="gray" onClick={()=>navigate('/Update')}>
        <HiCloudDownload className="mr-3 h-4 w-4" />
        <p>
          Add
        </p>
      </Button>
    </Button.Group>
    </div>
  )
}
export default Home;

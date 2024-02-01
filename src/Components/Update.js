import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import {
  Label,
  TextInput,
  Alert,
} from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { QuickAccess } from "./QuickAccess";
import MyModal from "./Modal";
const Update = () => {
  const [Book, setBook] = useState({
    title: "",
    BookId: "",
    author: "",
  });

  const [respData, setrespData] = useState([]);
  const [open,setOpen]=useState(false);
  const [alertMode,setAlertMode]=useState(false);

  const navigate = useNavigate();
  const handleChange=(event)=>{
    event.preventDefault();
    
    setBook({
      ...Book,
      [event.target.name]: event.target.value,
    });
    console.log(Book);
  }
  
  const handleSubmit=async (event)=>{
    event.preventDefault();
    try{
      const resp=await axios.post("http://localhost:5000/Books/",Book);
      console.log(resp.data.stat);
      setrespData(resp.data);
    }
    catch(e){
      console.log(e);
    }

  };

  const UpdateAlert=()=>{
    const SuccessAlert=()=>{
      return (
        <Alert color="success" icon={HiInformationCircle}>
        <span>
          <p>
            <span className="font-medium">Success alert!</span>
            Record Added Succesfully!
          </p>
        </span>
      </Alert>
      );
    }

    const FailAlert=()=>{
      return (
        <Alert color="failure" icon={HiInformationCircle}>
        <span>
          <p>
            <span className="font-medium">Failure alert!</span>
            {respData.message}
          </p>
        </span>
      </Alert>
      );
    }

    return(
      <>
      {respData.stat===100?<SuccessAlert />:<FailAlert/>}</>
    )
  }
  
  return (
    <>
   <QuickAccess />
      <div className="container  justify-center  flex-row items-center h-screen  p-4">
      <div className="container  justify-center  flex items-center   p-4">
       <form onSubmit={handleSubmit}> 
      <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        maxWidth: '100%',
        mx: 'auto',
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
        Add New Student Details
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: '1/-1' }}  onSubmit={handleSubmit}>
          <FormLabel>Book Title</FormLabel>
          <Input endDecorator={null} 
          onChange={handleChange}
          value={Book.title}
          name="title"/>
        </FormControl>
        
        <FormControl>
          <FormLabel>Book ID</FormLabel>
          <Input endDecorator={<InfoOutlined />}
          onChange={handleChange}
          value={Book.BookId} 
          name="BookId"/>
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Author</FormLabel>
          <Input placeholder="Fees" 
          onChange={handleChange}
          value={Book.author}
          name="author"/>
        </FormControl>
        
        <Checkbox label="Save Details" sx={{ gridColumn: '1/-1', my: 1 }} />
        <CardActions sx={{ gridColumn: '1/-1' }}>
          <Button type="submit" variant="solid" color="primary"
         >
            Add
          </Button>
          

        </CardActions>
      </CardContent>
     
    </Card>
    </form>
       </div></div>
       <MyModal Open={open} OnClose={()=>{setOpen(false)}} Alert={UpdateAlert}/>
    </>
  );
};

export default Update;

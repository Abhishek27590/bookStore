import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AdminPanel = () => {
  const [name, setName] = useState("");
  const price = "Free";
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [bookLink, setBookLink] = useState("");

  const clickHandler = async () => {
    const payload = {
      name,
      price,
      image,
      category,
      title,
      bookLink,
    };
    let resData={}
    try{
      const res = await axios.post(
        "http://localhost:4001/book/bookUpload",
        payload
      );
      resData=res.data
    }
    catch(e){
      resData=e.response.data
    }
    if(resData.status=="true"){
      toast.success(resData.message)
    }
    else{
      toast.error(resData.message)
    }
  };
  return (
    <div className="flex flex-col w-full justify-center items-center h-[100vh] gap-10">
      <div className="text-3xl">Welcome Abhishek!</div>
      <div className="flex flex-col gap-5 ">
        <div>
          <p>Enter name of book:</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-[450px] h-[50px] p-3 rounded-2xl "
          />
        </div>
        <div>
          <p>Enter cover Image Url of book:</p>
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            className="w-[450px] h-[50px] p-3 rounded-2xl "
          />
        </div>
        <div>
          <p>Enter category of book:</p>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="w-[450px] h-[50px] p-3 rounded-2xl "
          />
        </div>
        <div>
          <p>Enter Author name:</p>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-[450px] h-[50px] p-3 rounded-2xl "
          />
        </div>
        <div>
          <p>Enter Book Link from Cloudinary:</p>
          <input
            type="text"
            name="booklink"
            value={bookLink}
            onChange={(e) => {
              setBookLink(e.target.value);
            }}
            className="w-[450px] h-[50px] p-3 rounded-2xl "
          />
        </div>
        <button
          onClick={() => {
            clickHandler();
          }}
           className="w-[100px] h-[40px] bg-blue-950 rounded-3xl hover:bg-blue-900 transition-all"
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;

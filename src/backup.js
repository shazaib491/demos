import "bootstrap/dist/css/bootstrap.min.css";
import AddBlog from "./components/AddBlog";
import AllBlog from "./components/AllBlog";
import { useEffect, useState } from "react";
export default function App() {
  // let counter=0;
  let [counter,setCounter]=useState(0);
  let [blogsPost,setBlogsPost]=useState([])

  const [edit,setEditBlog]=useState({});

  function getBlog(data,editable){
    //4 check 
    if(editable){
      // let index=blogsPost.findIndex((element)=>element.id==edit.id)
      // blogsPost[index].title=data.title;
      // blogsPost[index].description=data.description;
      // setBlogsPost([...blogsPost])
      // setEditBlog({});
      fetch("http://localhost:3000/blogs/"+edit.id,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      }).then((response)=>{
        fetchData();
        setEditBlog({});
      })
    }else{
      fetch("http://localhost:3000/blogs",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      }).then((response)=>{
        fetchData();
      })
      // setBlogsPost([...blogsPost,{id:blogsPost.length+1,...data}])
    }
  }

  function deleteBlog(id){
    fetch("http://localhost:3000/blogs/"+id,{
      method:"DELETE"
    }).then((response)=>{
      fetchData();
    })
    setBlogsPost(blogsPost.filter(blog=>blog.id!==id))
  }

  function editBlog(data){
    setEditBlog({...data});
  }

  async function fetchData(){
    try {
        let response=await fetch("http://localhost:3000/blogs");
        let data=await response.json();
        console.log(data);
        setBlogsPost(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData(); //1 
  },[]) 

 
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* <button className="btn btn-primary" onClick={()=>setCounter(counter+1)} >Inc {counter}</button> */}
            {/* <button className="btn btn-primary" onClick={()=>setCounter(counter-1)} >Dec {counter}</button> */}
            <AddBlog addBlog={getBlog} edit={edit} />
          </div>
          <div className="col-md-6">
            <AllBlog allBlogs={blogsPost} deleteBlog={deleteBlog} editTrigger={editBlog} />
          </div>
        </div>
      </div>
    </div>
  );
}

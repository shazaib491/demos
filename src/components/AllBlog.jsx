import React from 'react'

export default function AllBlog(props) {
  return (
    <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {props.allBlogs.map((blog)=>(
                        <tr key={blog.id}>
                            <td>{blog.id}</td>
                            <td>{blog.title}</td>
                            <td>{blog.description}</td>
                            <td>
                                <button className="btn btn-info" onClick={()=>props.editTrigger(blog)} >Edit</button>
                                <button className="btn btn-danger ms-2" onClick={()=>props.deleteBlog(blog.id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

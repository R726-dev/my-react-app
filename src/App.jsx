// function App(){
//   return(<div className="container">
//     <h1>Hello!Welcome to the React Website</h1>
//   <p>Hello</p>
//   <label htmlFor="name"></label>
//   </div>)

//   // return(<>
//   // <h1>Hello</h1>
//   // <p>Hello!</p></>)
// }
// export default App

// import React from 'react';
// function App(){
//   return React.createElement('div',{className:'container'},React.createElement('h1',{},'My App'))
// }
// export default App


// import React from 'react';
// function App(){
//   return React.createElement('div',{className:'container'},React.createElement('h1',{},'Hello!'))
// }
// export  default App


// function App(){
//   const title="Blog Post";
//   const body="This is my first post";
//   const comments=[{id:1,title:'Comment one'},{
//     id:2,title:'Comment Two'
//   },{id:3,title:"Comment three"}];
//   return(<div className="container">
//     <h1>{title}</h1>
//     <h1>{body}</h1>
//     <p>{body}</p>
//     <p>{4+2}</p>
//     <p>{Math.random()*5}</p>
//     <h1>{title.toUpperCase()}</h1>

//     <div className='comments'>
//       <h3>{comments.length}</h3>
//       <ul>
//         {comments.map((comments,index)=>(<li key={index}>{comments.title}</li>))}
//       </ul>
//       </div>
//   </div>)
// }
// export default App

// function App(){
//   const title="Blog Post";
//   const body="This is my first blogging Page";
//   const comments=[{id:1,text:"Comment_1"},
//     {id:2,text:"Comment_2"},{id:3,text:"Comment_3"},{id:4,text:"Comment_4"}
//   ];
//   const loading=true;
//   const showComment=true;
//   if(loading) return<h1>Loading..</h1>

//   return(
//     <div className="container">
//       <h1>{title}</h1>
//       <h1>{body}</h1>
//       <h2>{3+4}</h2>
//       <h2>{title.toUpperCase()}</h2>

//       {showComment &&(<div className='myblog'>
//         <h3>{comments.length}</h3>
//         <ul>
//       {comments.map((comments,index)=>(<li key={index}>{comments.text}</li>))}</ul></div>)}
    

//     {/* <div className='blogPost'>
//       <h2>Comment{comments.length}</h2>
//       <ul>
//         {comments.map((comments,index)=>(<li key={index}>{comments.text}</li>))}
//       </ul>

//     </div> */}
    
//     </div>
//   )
// }
// export default App

// function App(){
//   const title='Blog Post'
//   const body='This is the blog'
//   const comment=[{id:1,text:"Comment_1"},{id:2,text:"Comment_2"},{id:3,text:"Comment_3"}]
//   const loading=false;
//   const showLoading=true;
//   const blogPart=(
//     <div className='blog'>
//       <h1>{comment.length}</h1>
//       <ul>
//         {comment.map((comment,index)=>(<li key={index}>{comment.text}</li>))}
//       </ul>
//     </div>
//   );
//   if(loading) return(<h1>Loading...</h1>)
//     return (<div>
//       <h1>{title}</h1>
//       <h1>{body}</h1>
//       <p>{body}</p>
//       {showLoading&&blogPart}
//     </div>)
// }
// export default App


// function App(){
//   const  title="blog"
//   const body="This is the first blog Post"
//   const comments=[{id:1,text:"Comment_1"},{id:2,text:"Comment_2"},{id:3,text:"Comment_3"}]
//   const loading=true;
//   const showLoading=true;
//   if(loading) return<h1>Loading....</h1>

// const showcomment=(
//     <div class='container_2'>
//       <h1>Comment({comments.length})</h1>
//       <ul>
//         {comments.map((comments,index)=>(<li key={index}>{comments.text}</li>))}
//         </ul>
//     </div>
//   );
//   return(<div className='container'>
//     <h1>{title}</h1>
//     <h1>{body}</h1>
    

//     {showLoading && showcomment}
//     </div>)
// }
// export default App

// function App(){
//   return(<div className='conatiner'>
//     <h1>My App</h1>
//   </div>)
// }
// export default App



function App(){
  const title="Student Data";
  const student=[{Rollno:1,Name:"Riya",Cls:"BCA",Age:20,Marks:{Maths:40,Phy:60,Chem:80}},
    {Rollno:2,Name:"Ram",Cls:"BCA",Age:20,Marks:{Maths:86,Phy:60,Chem:80}},
    {Rollno:3,Name:"Pooja",Cls:"BCA",Age:20,Marks:{Maths:40,Phy:90,Chem:80}},
    {Rollno:4,Name:"Simran",Cls:"BCA",Age:20,Marks:{Maths:40,Phy:60,Chem:60}},
    {Rollno:5,Name:"Sandeep",Cls:"BCA",Age:20,Marks:{Maths:40,Phy:60,Chem:80}},
    {Rollno:6,Name:"Seerat",Cls:"BCA",Age:20,Marks:{Maths:40,Phy:60,Chem:80}}
  ];

  return(<div className="container">
    <h1>{title}</h1>

   <div className="container2">
    <table>
      <thead>
        <tr>
          <th rowSpan="2" >Rollno</th>
          <th rowSpan="2">Name</th>
          <th rowSpan="2">Class</th>
          <th rowSpan="2">Age</th>
          <th colSpan="3">Marks
            <tr>
              <th>Chem</th>
              <th>Phy</th>
              <th>Maths</th>
            </tr>
          </th>
        </tr>
        </thead>
      <tbody>
        {student.map((student,Rollno)=>(<tr key={student.Rollno}>
          <td>{student.Rollno}</td>
          <td>{student.Name}</td>
          <td>{student.Cls}</td>
          <td>{student.Age}</td>
          <td >{student.Marks.Chem}</td>
          <td>{student.Marks.Phy}</td>
          <td>{student.Marks.Maths}</td>
        </tr>))}
        
        </tbody>
    </table>
      
    
   </div>
  </div>)

}
export default App
import React, { useEffect, useState } from 'react'
import './App.css';
import Carousel from './Carousel1';
import { Link } from 'react-router-dom';

const Home = () => {

  const images = [
    "banner1.png",
    "banner3.png",
    "banner2.png"
  ];



  const[ data, setData]= useState([])
function abc(){
  fetch("https://real-blue-gosling-coat.cyclic.app/products")
  .then((res)=>res.json())
  .then((resp)=>{
    setData(resp)
    console.log(resp)
  })
}
useEffect(()=>{
abc()
},[])

  return (
    <div>
      <div>
      <Carousel slides={images} />
     {/* <img src='banner1.png' style={{width:'100%', height:'auto',marginTop:'1px'}}></img> */}

      </div>
     

<div className='grid1' style={{width:"45%",display:'inline-block'}}>
{/* <Link to='Women'>  */}

<img src='1.png' 
style={{width:'90%', height:'568px',margin:"40px 0px 40px 50px",float:"left",position:'relative'}}></img>
<Link to='Women'>   
   <h2 style={{position:'absolute', margin:'-626px 20px 28px -538px',fontSize:'36px',color:'white'}}>WOMEN</h2>

</Link>
{/* </Link> */}
</div>

<div className='grid2'style={{width:"55%",float:'right',display:'inline-block'}} >
<img src='3.png' style={{width:'45%', height:'265px', margin:"40px 51px 0px 0px",float:"right",display:'inline-block'}}></img>
<Link to='Kids'>

<h2 style={{position:'absolute', margin:'18px -1px 17px 72px',fontSize:'36px',color:'white'}}>KIDS</h2>
</Link>  

<img src='2.png' style={{width:'45%', height:'auto',margin:"3px 23px -28px 7px",display:'inline-block'}}></img>
<Link to='Men'>
<h2 style={{position:'absolute', margin:'-263px 20px 24px -316px',fontSize:'36px',color:'white'}}>MENS</h2>
</Link>


<img src='4.png' style={{width:'758px', height:'270px',margin:"23px 5px",float:"left",display:'inline-block'}}></img>
<h2 style={{position:'absolute', margin:'75px 20px 24px 27px',fontSize:'36px',color:'white'}}>ACCESSORIES</h2>


</div>








      {
        data.map((item)=>(
          <div className='fetch' style={{ display:"inline", }}>
    {/* <h1 style={{color:"red", border:"2px solid black"}}>{item.email}</h1> */}
      {/* <img src={item.image1} alt={item.title} style={{height:"200px", width:"auto",margin:"m0px",}} />
      <img src={item.image2} alt={item.title} style={{height:"200px", width:"auto",margin:"m0px",}} />
      <img src={item.image3} alt={item.title} style={{height:"200px", width:"auto",margin:"m0px",}} />
      <img src={item.image4} alt={item.title} style={{height:"200px", width:"auto",margin:"m0px",}} /> */}

    {/* <img src={item.image1} /> */}
            </div>
        ))
      }



    </div>
  )
}

export default Home

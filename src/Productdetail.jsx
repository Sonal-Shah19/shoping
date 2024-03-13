import React, { useEffect, useState } from 'react';

const Productdetail = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://real-blue-gosling-coat.cyclic.app/products");
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const kidsItems = data.filter(item => item.category === 'KIDS');

  return (
    <div>
        <div className='products' style={{ display: 'flex', flexWrap: 'wrap', 
          justifyContent:'space-around', alignItems: 'center', maxWidth: '100%', margin: '20px 36px'}}> 

        {kidsItems.map((item, index) => (
          
          <div className='fetchh' key={index} style={{ display: "inline-block" , width:'250px',   height:'auto',  margin:'10px ', }}>


      <img src={item.image1} alt={item.title} style={{ width:'200px',height:'auto', margin:'20px', float:'left' }} />
                   
      {/* <div className="productTitle" style={{ color: 'black', textAlign:'left', margin:'0px 10px',  fontFamily:'Poppins', fontSize:'14px' ,whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.title}
      </div>

      <div className="price" style={{ color: 'black', textAlign:'left', margin:'0px 10px',  fontFamily:'Poppins', fontSize:'18px', fontWeight:'bold'}}>$ {item.price}
      </div> */}



      </div>
            ))}
    </div>
    </div>
  );
}

export default Productdetail;







{/* <img  className="productImage" src='product1.png' style={{width:'400px', margin:'20px', float:'left'}}></img>
<img  className="productImage" src='product2.png' style={{width:'113px', margin:'20px 20px 20px 0px', float:'left'}}></img>
<img  className="productImage" src='product2.png' style={{width:'113px', margin:'366px 20px 20px -133px', float:'left'}}></img>
<img  className="productImage" src='product2.png' style={{width:'113px', margin:'192px 20px 20px -133px', float:'left'}}></img>

</div>

<div className='productdetails' style={{margin:'0px 32px 30px 613px'}} >
<h2> Off White Chikankari Kurta (Set of 3) </h2>
<p>House of Jamoti</p>
<p>₹2,974</p> */}
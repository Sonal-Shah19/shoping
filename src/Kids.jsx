import React, { useEffect, useState } from 'react';

const Kids = () => {
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

    // Filter data for items in the Women's category
    const kidsItems = data.filter(item => item.category === 'KIDS');

    return (
      <div>
<div>
  <img src='kidsbanner.png'></img>
</div>

    <div className='products' style={{ display: 'flex', flexWrap: 'wrap', 
          justifyContent:'space-around', alignItems: 'center', maxWidth: '100%', margin: '20px 36px'}}> 

        {kidsItems.map((item, index) => (
          
          <div className='fetch' key={index} style={{ display: "inline-block" , width:'250px',   height:'310px', borderStyle:'solid', margin:'10px ', borderColor:'whitesmoke' , transition: "transform 0.3s ease"}}>

      <img src='wishlist.png'  style={{width:'24px', height:'auto',borderRadius:'50px' , position:'absolute', margin:'10px 10px 10px 218px '}}></img>

      <img src={item.image1} alt={item.title} style={{ height: "fit", width: "230px", margin: "10px" , }} />
                   
      <div className="productTitle" style={{ color: 'black', textAlign:'left', margin:'0px 10px',  fontFamily:'Poppins', fontSize:'14px' ,whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.title}
      </div>

      <div className="price" style={{ color: 'black', textAlign:'left', margin:'0px 10px',  fontFamily:'Poppins', fontSize:'18px', fontWeight:'bold'}}>$ {item.price}
      
      </div>



      </div>
            ))}
    </div>



      </div>
    );
}

export default Kids;


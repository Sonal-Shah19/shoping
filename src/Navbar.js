import React, { useState } from 'react'
import './App.css'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [form, setform]= useState(false)
    function displayform(){
        
        setform(!form)

    }

  return (
  

<div className='formm'>

    { form &&
            <form>
             <h2> Sign in </h2> 
            <label> Email : </label>  
            <input type="email" /> 
            <label> Password : </label>  
            <input type="Password" /> 
            <button className='submitform'> SUBMIT </button>
          </form>
    }



<div className='Nav'>
{/* <Link to="ShoppingBag">Shopping Bag</Link> */}
<Link to='Cart' id='cart'> <img className='icon1' src="cart.png"/>CART</Link>

{/* <Link to="Fav">Favourites</Link> */}
<Link to='Fav' id='cart' > <img className='icon1' src="heart.png"/>WISHLIST</Link>
<Link to={form} id='cart' > <img className='icon1' onClick={displayform} src="user.png"/>SIGN IN</Link>

{/* <Link to={form}><button className='Signin' onClick={displayform}> SIGN IN </button>  </Link> */}

<div className='logo'>
<Link to='/' > <img className='muselogo' src="Nykaa.png"/></Link>
</div>

<div  style={{float:'left'}}>

<NavLink to="Productdetail"  className='category' >ACCESSORIES</NavLink>
<NavLink to="Kids"  className='category' >KIDS</NavLink>
<NavLink to="Men"   className='category' >MEN</NavLink>
<NavLink to="Women" className='category' >WOMEN</NavLink>

</div>




</div>

          {/* <div className="search" style={{display:"inline",marginLeft:"638px",marginTop:'0px', }}>
                <input
                  type="text"
                  placeholder=""
                  // onChange={(e) => setSearch(e.target.value)}

                  style={{height:'36px', margin:'29px',width:'24vw',border:'none'}}
                
                />
                <button style={{height:'36px', width:'10vw', backgroundColor:'#F0E7DE',border:'none'}}  >Search</button>
          </div> */}
     


</div>
 )
}

export default Navbar

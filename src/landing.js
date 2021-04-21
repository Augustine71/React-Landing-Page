import React, { useState } from "react";
import './App.css';

function Landing(){
    const [showLinks, setShowLinks] = useState(false);
  const concerns = [
      {
          "image": "/images/bottle.svg",
          "type": "Hair"
      },
      {
        "image": "/images/bottle.svg",
        "type": "Skin"
    },
    {
        "image": "/images/bottle.svg",
        "type": "Weight"
    }
]

const products =[
    {
        "image": "/images/product.svg",
        "prodname": "Hair fall Control Shampoo",
        "for":"For",
        "reduction": "Hair fall reduction",
        "with": "With",
        "keratin": "Keratin",
        "biotin": "Biotin",
        "nia": "Niacinamide",
        "vitamin":"Vitamin B5",
        "price":"Rs 399",
        "off": "1194",
        "discount": "17% OFF"
    },

    {
        "image": "/images/product.svg",
        "prodname": "Hair fall Control Shampoo",
        "for":"For",
        "reduction": "Hair fall reduction",
        "with": "With",
        "keratin": "Keratin",
        "biotin": "Biotin",
        "nia": "Niacinamide",
        "vitamin":"Vitamin B5",
        "price":"Rs 399",
        "off": "1194",
        "discount": "17% OFF"
    },

    {
        "image": "/images/product.svg",
        "prodname": "Hair fall Control Shampoo",
        "for":"For",
        "reduction": "Hair fall reduction",
        "with": "With",
        "keratin": "Keratin",
        "biotin": "Biotin",
        "nia": "Niacinamide",
        "vitamin":"Vitamin B5",
        "price":"Rs 399",
        "off": "1194",
        "discount": "17% OFF"
    }
]

const helps = [
    {
        "head": "1. Help us know you",
        "para": "Know what you're looking for? Browse ourcarefully crafted solutions. Not sure what will work for you? Schedule a free online consultation with our renowned experts" 
    },
    {
        "head": "2. Help us know you",
        "para": "Know what you're looking for? Browse ourcarefully crafted solutions. Not sure what will work for you? Schedule a free online consultation with our renowned experts" 
    },
    {
        "head": "3. Help us know you",
        "para": "Know what you're looking for? Browse ourcarefully crafted solutions. Not sure what will work for you? Schedule a free online consultation with our renowned experts" 
    }

]

return(
    <div>
    <div className="navbar">


    <button id="show" onClick={() => setShowLinks(!showLinks)}>
         <div className="ham-menu"></div>
         <div className="ham-menu"></div>
    </button>
    
    
    <div className="nav-container">
    <div className="logo">
     <img src="/images/logo.svg" alt="logo"/>
    </div>
    
    <div className="nav" id={showLinks ? "hidden" :""}>
    
          <a href='#'>Shop</a>
          <a href='#'>Take Self - Assessment</a>
         <a href='#'>Choose Concerns <svg className="svg" width="8" height="7" viewBox="0 0 8 7" xmlns="http://www.w3.org/2000/svg"><path d="M3.646 5.354l-3-3 .708-.708L4 4.293l2.646-2.647.708.708-3 3L4 5.707l-.354-.353z" fill-rule="evenodd" fill-opacity="1" fill="#fff" stroke="none"></path></svg></a>
          <a href='#'>All Products</a>
          <a href='#'>Book Consultation</a>
      
    </div>
    
    <div className="dash">
         <div className="bell">
            <img src="/images/magn.svg" alt="magnifier"/>
         </div>
    
         <div className="whatsapp">
             <img src="/images/whatsapp.svg" alt="whatsapp"/>
         </div>
    
         <div className="picture">
              <img src="/images/profile.svg" alt="profile"/>
         </div>
    
         <div className="shop-cart">
             <div className="sub-cart">
                 <img src="/images/cart.svg" alt="shopping cart"/>     
             </div>
             <div className="notif">
                 2
             </div>
                         
         </div>
     </div>
    
     
    <div className="dash2">
     <div className="bell">
         <img src="/images/person.svg" alt="person"/>
      </div>
    
      <div className="whatsapp">
          <img src="/images/whatsapp.svg" alt="whatsapp"/>
      </div>
    
      <div className="shop-cart">
         <div className="sub-cart">
             <img src="/images/cart.svg" alt="shopping cart"/>     
         </div>
         <div className="notif">
             2
         </div>
     </div>
    
    </div>
    
    </div>
    </div>  
    
    <div className="banner">
         <div className="heading">
             <h1>Heading Title</h1>
             <p>We are the country’s first holistic wellness platform for men. We talk to men, listen to them and understand their needs</p>
             <h2>What’s your concern?</h2>
             <div className="concerns">
                 {concerns.map(concern => 
                     <div className="sub-concerns">
                     <img src={concern.image} alt="concern"/>
                     <p>{concern.type}</p>
                     <div className={concern.type}></div>
                 </div>)}
                
             </div>
         </div>
    </div>
    
    <div className="section-1">
      <div>
         <h1>Not sure where to start? We can help</h1>
         <p>Let's understand you a bit by asking a few questions before you talk to our experts</p>
         <button>Get started</button>
      </div>
    </div>
    
    <div className="section-2">
      <div className="subsec">
          
         <h1>New Launches</h1>
    
         <div className="sub-2">
           <button>Hair</button>
           <button>Skin</button>
           <button>Weight</button>
         </div>
    
         <div className="sub-3">
             {
                 products.map(product =>
                     <div className="product">
                 
                 <img src={product.image} alt="product"/>
    
                 <div className="prod-name">
                     <p>{product.prodname}</p>
                 </div>
    
                 <div className="prod-for">
                     <div className="for">
                         <p>{product.for}</p>
                     </div>
                 
                     <div className="reduction">
                         <p>{product.reduction}</p>
                     </div>
                 </div>
    
                 <div className="empty"></div>
    
                 <div className="prod-with">
                     <div className="with">
                         <p>{product.with}</p>
                     </div>
                 
                     <div className="keratin">
                         <p>{product.keratin}</p>
                     </div>
    
                     <div className="biotin">
                         <p>{product.biotin}</p>
                     </div>
                  </div>
    
                  <div className="prod-with-2">
                     <div className="nia">
                         <p>{product.nia}</p>
                     </div>
                 
                     <div className="vita">
                         <p>{product.vitamin}</p>
                     </div>
                  </div>
    
                  <div className="prod-price">
                     <div className="price">
                         <p>{product.price}</p>
                     </div>
                 
                     <div className="price-off">
                         <p>&#8377;{product.off}</p>
                     </div>
    
                     <div className="discount">
                         <p>&#127881; {product.discount}</p>
                     </div>
                  </div>
    
                  <div className="prod-button">
                     <button className="cart">Add to Cart</button>
                     <button className="buy">Buy Now</button>
                  </div>
    
                  <div className="new-launch">
                      <p>New Launch</p>
                  </div>
    
                  <div className="Rating">
                     <p>&#11088; 4.5</p>
                 </div>
             </div>)
             }
            
         </div>
    
         
         <div className="swipe">
             <div className="circle">
                 <button>&#9679;</button>
                 <button>&#9675;</button>
             </div>
    
             <div className="arrow">
                <button><img src="/images/less.svg" alt="arrow"/></button>
                <button><img src="/images/great.svg" alt="arrow"/></button>
             </div>
         </div>
    
         <div className="sub-4">
    
         </div>
      </div>
    
    
    
    
    <div className="section-3">
    <div>
     <h1>Not sure where to start? We can help</h1>
     <p>Let's understand you a bit by asking a few questions before you talk to our experts</p>
     <button>Get started</button>
    </div>
    </div>
    
    <div className="section-4">
    <div className="section-end">
      <h1>How It Works</h1>
    
      <div className="works">
          <div className="work-img">
               <img src="/images/man.svg" alt="man"/>
          </div>
          <div className="work-data">
              {
                  helps.map(help =>
                     <div className="work-help">
                         <h2>{help.head}</h2>
                         <p>{help.para}</p>
                    </div>
                     )
              }
          </div>
      </div>
    </div>
    </div>
     </div>
     </div>
);
}

export default Landing;
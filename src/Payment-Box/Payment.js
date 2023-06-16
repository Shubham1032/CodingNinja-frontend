import React,{useEffect,useContext} from 'react'
import { store } from '../Context/User';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import visa from '../Coding Ninja Asset/visa.png';
import WesternUnion from '../Coding Ninja Asset/Western_union.png';
import masterCard from '../Coding Ninja Asset/master_card.png';

const Payment = ({render,product}) => {
    const Navigate = useNavigate()
  const {user,setUser} = useContext(store);
  console.log(user)
    // console.log(render)
    function changeParentState () {
        render("render function running")
    }
    async function addCart(){
        try {
            const {data} = await axios.post("http://localhost:4000/addCart",{userId:user._id,course:product._id})
          console.log(data)
            alert("run add cart fun")
          Navigate('/profilePage');
            
        } catch (error) {
            alert("something went wrong")
            console.log(error.message)
        }
    } 

  return (
    <>
    <div className='paymentMainContainer'>
        <div className='payment-box-heading'>
            <div className='payment-heading-flex'>
                <div id='logo'>  
                <img src='https://files.codingninjas.in/cn-logo-20874.png' />    
                </div>
                <div className='pay-head-line'>  
                    <div>Coding Ninjas</div>
                    <p> <img src='https://cdn.razorpay.com/static/assets/trustedbadge/rtb-live.svg' width='16px' height='16px' style={{}}/>   Razorpay Trusted Business</p>
                </div>
            </div>
            <div className='payment-cross'  onClick={changeParentState}> <i className="fa-solid fa-x" ></i></div>
        </div>
        <div className='payment-option-container'>

        <h3>Prefered Payment Methods</h3>
        <div className='paymentMethod-box'>
            <button>
                <div>
                    <div>
                 <i className="fa-sharp fa-solid fa-qrcode"></i>

                    </div>
                 <div id='upiQRtext'>UPI QR </div>
                </div>
                <i className="fa-regular fa-circle-check"></i>
                
            </button>
            <button>
                <div>
                 <i className="fa-sharp fa-solid fa-qrcode"></i>
                 <div id='upiQRtext'>UPI - PayTM </div>
                </div>
                <i class="fa-regular fa-circle-check"></i>
                
            </button>
        </div>
        <h3 className='upiAndMore'>Cards,UPI & More</h3>
        <div className='paymentMethod-box'>
            <button>
                <div>
                    <div>
                 <i className="fa-sharp fa-solid fa-qrcode"></i>

                    </div>
                 <div id='cardsText'>
                    <p>Cards</p>
                    <span style={{display:'flex'}}><i class="fa-brands fa-cc-visa fa-2s"></i>
                    <img className='paymentAppimages' src='https://vtlogo.com/wp-content/uploads/2020/10/rupay-vector-logo-small.png' width='15px'/>
                    <img className='paymentAppimages' src={visa} width='15px'height='15px'/>
                    <img className='paymentAppimages' src={masterCard} width='15px'height='15px'/>
                    <img className='paymentAppimages' src={WesternUnion} width='15px'height='15px'/>
                    {/* <span>and more</span> */}
                    </span>                    
                     </div>
                </div>
            </button>
            <button>
                <div>
                    <div>
                 <i className="fa-sharp fa-solid fa-qrcode"></i>

                    </div>
                 <div id='cardsText'>
                    <p>UPI / QR</p>
                    <span>Pay with installed app or use others</span>
                    <span style={{display:'flex'}}><i class="fa-brands fa-cc-visa fa-2s"></i>
                    <img className='paymentAppimages' src='https://vtlogo.com/wp-content/uploads/2020/10/rupay-vector-logo-small.png' width='15px'/>
                    <img className='paymentAppimages' src={visa} width='15px'height='15px'/>
                    <img className='paymentAppimages' src={masterCard} width='15px'height='15px'/>
                    <img className='paymentAppimages' src={WesternUnion} width='15px'height='15px'/>
                    {/* <span>and more</span> */}
                    </span>                    
                     </div>
                </div>
            </button>
            <button>
                <div>
                    <div>
                 <i className="fa-sharp fa-solid fa-qrcode"></i>

                    </div>
                 <div id='cardsText'>
                    <p>Netbanking</p>
                    <span>All Indian banks</span>
                                  
                     </div>
                </div>
            </button>
                   
        </div>
        </div>
        <div className='amountDiv'>
        <span>~ 29,998</span>
        <button className='payNow-btn' onClick={addCart}>Pay Now</button>
        </div>
    </div>
    </>
  )
}

export default Payment
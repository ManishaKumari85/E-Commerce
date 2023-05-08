import React,{useState} from "react"

function PaymentStatus() {
  const[Ammount,setAmmount] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(Ammount === ""){
    alert("please enter Ammount")
    }else{
      var options ={
        key:"rzp_test_H9XdeUK8AnHeF4",
        key_secret:"jT8esrJJxDfR47aAO6e1z3dO",
        Ammount:Ammount*100,
        currency:"INR",
        name:"Demo",
        description:"for testing purpose",
        handler:function(response){
          alert(response.razorpay_payment_id)
        },
        prefill:{
          name:"",
          email:"",
          contact:"",

        },
        notes:{
          address:"",
        },
        theme:{
       color:"#3399cc"
        }
      };
      var pay =new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="mb-3">
     <h2>Reazorpay payment Intergration</h2>
     <br/>
     <input type="text" placeholder = "Enter Ammount" value={Ammount}onChange={(e)=>setAmmount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default PaymentStatus;

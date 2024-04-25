import React from 'react'

export default function Form() {

    const submit = (e) => {
        e.preventDefault();
        const fe = document.querySelector("form");
        const fd = new FormData(fe)
    
        fetch("https://script.google.com/macros/s/AKfycbx9dl91AFaVNwervBmhPndu7xGSdWUHj3VKhRNZ0s4oKDyjot8XVjilDDDgpMrLrCGLJg/exec",
            {
                method: "POST",
                body: fd 
            }
        )
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming the response is JSON
        })
        .then(data => {
            console.log('Success:', data);
            // You can handle successful response here
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors here
        });
    }
    
       

  return (
      <>
        <div className="container">
            <div className="card">
                <div className="left">
                <img src="https://images.unsplash.com/photo-1659706994835-fb804722b0f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
                </div>
                <div className="right">
                <h2 className='text-black font-bold'>Contact Us</h2>
                <div className="contact">
                    <div className="form-container">
                    <form className="form"  onSubmit={(e)=>submit(e)}>
                        <div class="username">
                        <input type="text" name='Name' placeholder="Enter your Name"/>
                        </div>
                        <div class="username">
                        <input type="Number" name='Phone' placeholder="Enter your Phone No."/>
                        </div>
                        <div class="useremail">
                        <input type="email" name='Email' placeholder="Enter your email" required/>
                        </div>
                        <div class="usermessage">
                        <textarea placeholder="Enter your message" name='Message' required></textarea>
                        </div>
                        <div class="usersubmit">
                                      <button type='submit' className='bg-red-600 text-black rounded-lg px-6 font-semibold py-2'>Sumbit</button>
                                      
                        </div>
                    </form>
                    </div>
                    <div class="address">
                    <div className="email">
                        <h4 className='text-black font-semibold'>Contact</h4>
                        <p className='text-blue-400 font-semibold'>hi@example.com</p>
                    </div>
                    <div className="location">
                        <h4 className='text-black font-semibold'>Based in</h4>
                        <p className='text-blue-400 font-semibold'>Los Angeles,<br/>California</p>
                    </div>
                    <div className="social">
                        <span><a href="#"><i className="fab fa-facebook text-blue-700 font-semibold p-2"></i></a></span>
                        <span><a href="#" target="_blank"><i className="fab fa-instagram p-2 text-blue-700 font-semibold"></i></a></span>
                        <span><a href="#" target="_blank"><i className="fab fa-twitter p-2 text-blue-700 font-semibold"></i></a></span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </>
  )
}

// const sheets = SpreadsheetApp.openByUrl("https://script.google.com/macros/s/AKfycbyci-DitXcnhpPnKFmDVpEy1plgsVBSWuijQhm8zTFNuOb5IjoESwgqA2iqq_R2V_LAOQ/exec") ;
// //if you have changed your sheet name then replace the below Sheetl with your sheet name
// const sheet = sheets. getSheetByName ("Page1");
// function doPost(e){
// let data = e.parameter;
// sheet.appendRow([data.Name, data.Phone, data.Email, data.Message]);
//  return ContentService.createTextOutput ("Success") ;
// }
function calculate()
     {
      const income = parseFloat(document.getElementById('income').value);
      const expense1 = parseFloat(document.getElementById('expense1').value);
      const expense2 = parseFloat(document.getElementById('expense2').value);
      const expense3 = parseFloat(document.getElementById('expense3').value);
      const expense4 = parseFloat(document.getElementById('expense4').value);

      const totalExpense = expense1 + expense2 + expense3 + expense4;
      
      
      let balance = income - totalExpense;

      const resultElement = document.getElementById('result');
     
    if(totalExpense>balance)
        
    resultElement.innerHTML=`<div style="background-color:whitesmoke;" ><img src="https://media1.giphy.com/media/3ov9k9Ss9N3wO6FQ7C/giphy.gif" width="100%" height="250px"> <br>
    TOTAL EXPENSE IS : $${totalExpense.toFixed(2)} <br> BALANCE AMOUNT IS : $0 <br> <h1 style="color:red;"> CONTROL YOUR EXPENSES🛑 </h1> <br> <h3 style="color:black;">YOU HAVE TO SAVE MONEY</h3></div>`
else


    resultElement.innerHTML=`<div style="background-color:whitesmoke;" ><img src="https://i.graphicmama.com/blog/wp-content/uploads/2016/12/06091814/handshake2.gif" width="100%" height="250px"> <br>  
    TOTAL EXPENSE IS : $${totalExpense.toFixed(2)} <br> BALANCE AMOUNT IS : $${balance.toFixed(2)} <br> <h1 style="color:green;"> KEEP GOING😁</h1> </div>`

    //   resultElement.innerHTML = `<div class="card" style="width: 18rem; background-color:teal; margin-top:150px;">
    //   <img src="https://img.freepik.com/premium-vector/initial-mortgage-payment-mortgage-loan-low-interest-rate-profitable-purchase-real-estate-vector-flat-illustration_422344-1136.jpg" class="card-img-top" alt="...">
    //   <div class="card-body">
    //     <p class="card-text text-dark"> Total Expense: $${totalExpense.toFixed(2)} <br>
    //     Balance: $${balance.toFixed(2)}</p>
    //   </div>
    // </div>`
    
      
     }
     function logout()
     {
      window.location="./home.html"
     }
     

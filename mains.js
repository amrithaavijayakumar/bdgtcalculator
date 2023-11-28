function calculate()
     {
      
      const salary = parseFloat(document.getElementById('salary').value);
      const rent = parseFloat(document.getElementById('rent').value);
      const groceries = parseFloat(document.getElementById('groceries').value);
      const utilities = parseFloat(document.getElementById('utilities').value);
      const transportation = parseFloat(document.getElementById('transportation').value);
      const entertainment = parseFloat(document.getElementById('entertainment').value);
      const others = parseFloat(document.getElementById('others').value);
      

      const totalExpenses = rent + groceries + utilities + transportation + entertainment + others;
      document.getElementById('result').innerHTML=`
      <tr>
      <td   class="border border-3 border-dark">${rent}</td>
      <td   class="border border-3 border-dark" >${groceries}</td>
      <td   class="border border-3 border-dark" >${utilities}</td>
      <td   class="border border-3 border-dark" >${transportation}</td>
      <td   class="border border-3 border-dark" >${entertainment}</td>
      <td   class="border border-3 border-dark" >${others}</td>
      <td   class="border border-3 border-dark" >${totalExpenses}</td>
      </tr>`
      const remainingBalance = salary - totalExpenses;
      document.getElementById('res').innerHTML=`
      <tr>
      <td   class="border border-3 border-dark">${salary}</td>
      <td   class="border border-3 border-dark" >${totalExpenses}</td>
      <td   class="border border-3 border-dark" >${remainingBalance}</td>
      </tr>`

      document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);
      document.getElementById('remainingBalance').textContent = remainingBalance.toFixed(2);
    }
      
    
     function logout()
     {
      
      localStorage.clear()
      window.location="./home.html"
     }
     

function ready()
{
    
    let data=un.value
    if(data in localStorage)
    {
        let details=JSON.parse(localStorage.getItem(data))
        console.log(details);
        alert("LOGIN SUCCESSFULL")
        window.location='./mains.html'
    }
    else
    {
        alert('NO SUCH USER FOUND')
    }
    
    
    
}
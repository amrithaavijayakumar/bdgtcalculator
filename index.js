function clc()

    
{

    const details=
    {
        un:uname.value,
        
        ps:psw.value

    }
    if(details.un==""||details.ps=="")
    {
        alert("PLEASE FILL THE COMPLETE DETAILS")
    }
    else
    {
        localStorage.setItem(details.un,JSON.stringify(details))
        alert('USER REGISTERED SUCCESSFULLY')
        window.location='./caalc.html' 
    }

}


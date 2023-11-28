function clc()

    
{

    const details=
    {
        uns:uname.value,
        
        ps:psw.value

    }
    if(details.uns==""||details.ps=="")
    {
        alert("PLEASE FILL THE COMPLETE DETAILS")
    }
    else
    {
        localStorage.setItem(details.uns,JSON.stringify(details))
        alert('USER REGISTERED SUCCESSFULLY')
        window.location='./caalc.html' 
    }

}


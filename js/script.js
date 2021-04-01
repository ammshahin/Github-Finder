let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', (e)=>{
    let usertext = searchUser.value;
    if(usertext != ''){
        //fetch api
        fetch(`https://api.github.com/users/${usertext}`)
            .then(result => result.json())
            .then(data => {
                if(data.message == 'Not Found'){
                    //show alert
                    ui.showAlert('User not found','alert alert-danger');
                }else{
                    //show profile
                    ui.showProfile(data);
                }
            })
    }else{
        //clear profile
        ui.clearProfile();
    }
})
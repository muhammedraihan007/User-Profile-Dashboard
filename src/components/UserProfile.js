import React from "react";

function UserProfile(){

    const user= {

        name:"goku",
        place:"Dragon ball",
        bio:"lorem ipsum jjjjjjjjjjjj"

    }

    return(
        <div className="profile">
            <h2>Name:{user.name}</h2>
            <h2>Age:{user.place}</h2>
            <h2>Bio:{user.bio}</h2>
            
        </div>
    )


}

export default UserProfile
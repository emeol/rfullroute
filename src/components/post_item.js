import React from 'react';

const Post_Item = (props)=>{
    console.log(props);
    return(
        <div>
            Post detail {props.match.params.id}
        </div>
    )
}

export default Post_Item;
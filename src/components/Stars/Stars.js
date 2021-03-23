import React from 'react'

export default function Stars(props) {
    let i=parseInt(props.count);
    let stars=[1,2,3,4,5];
        return(
            stars.map((star,index)=>{
                // console.log(index);
                if(index<i){
                    return(
                        <span key={index} className="fa fa-star checked"></span>
                    )
                } else {
                    return(
                        <span key={index} className="fa fa-star"></span>
                    )
                }
            })
        )
}

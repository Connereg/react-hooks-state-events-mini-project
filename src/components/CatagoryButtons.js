import React from "react";


function CategoryOption(props) {
    const {
        option,
        categoryClicked,
        className
    } = props;



    return(
        <button
         name={option}
         className={className}

         onClick={() => categoryClicked(option)}> {option} </button>
    )
}

export default CategoryOption;
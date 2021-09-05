import React, { useState } from "react";
import CategoryOption from "./CatagoryButtons";


function CategoryFilter(props) {
  const {
    categoryData,
    selectedCategory,
    onSelectCategory
  } = props;
 
  const categoryButtonsList = 
    categoryData.map(category => {
    const className = category === selectedCategory ? "selected" : null;

    return (
      <CategoryOption  
      key={category} 
      className={className}
      option={category} 
      categoryClicked={onSelectCategory}/> 
        )
      }
    )
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtonsList}  
    </div>
  );
}

export default CategoryFilter;

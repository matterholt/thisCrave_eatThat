import React, { Component, useEffect, useState  } from 'react'
import styled from '@emotion/styled'

const NutrientBox = styled.div`
    display: flex;
    width: 100%;
    background: linear-gradient(150deg , white, #000975);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
`
const NutrientResult = styled.p`
  font-size: 50px;
  color: black;
`

const WhatNeed = (props) =>{
	return(
        <NutrientBox>
            <h3>You may be lacking in Nutrients .. </h3>
           <br/>
            <NutrientResult>{props.nutrient} </NutrientResult>
        </NutrientBox>
	)
}

export default function NutrientsNeed(props){
    const [nutrient, setNutrient] = useState("Magnesium")
    return(
        <WhatNeed
        nutrient={nutrient}
        />
    )
}
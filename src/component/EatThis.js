import React, { Component, useEffect, useState  } from 'react'
import styled from '@emotion/styled'

const ResultBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: linear-gradient( 154deg ,#f9d5f6,#974ee0);
    align-items: center;
    justify-content: center;
`
const NutrientResult = styled.p`
  font-size: 50px;
  color: black;
`
const AltFood = (props) =>{
    return(
            <NutrientResult>{props.goodFood }</NutrientResult>

    )
}

const Title = styled.h2`
color: rebeccaPurple;
`
const EatInstead = () =>{
	return(
	  <Title>Try these heathy stuff</Title>
	)
}

export default function WantEat (){
    const [eatThis , setEatThis] = useState("Nuts,Seeds")
	return(
		<ResultBox>
	    <EatInstead />
        <AltFood goodFood = {eatThis} />
		</ResultBox>
	)
}
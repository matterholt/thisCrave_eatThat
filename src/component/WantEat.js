import React, { Component, useEffect, useState  } from 'react'
import styled from '@emotion/styled'

const Title = styled.h2`
color: rebeccaPurple;
`
const HeadTitle = () =>{
	return(
     <Title>I want to eat ... </Title>
	)
}
const CraveInput = styled.input`
	border: none;
	font-size:30px;
	width: 100%;
	height: 75px;
	text-align:center;
	outline: none;
	border-bottom: #d0a4fb;
`
const InputText = () =>{
	return(
		<div>
		    <CraveInput 
			 placeholder = "Snack,Food..."
			/>
		</div>

	)
}

export default function WantEat (){
	return(
		<div>
	    <HeadTitle />
		<InputText />
		</div>
	)
}


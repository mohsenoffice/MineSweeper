import React from 'react';
import logo from './logo.svg';
import './App.scss';
let width = 9;
let hight = 9;
let itemList: JSX.Element[]=[];
//Array.map
for(let i=0; i<width*hight;i++){
  itemList.push(<button className="cell" onClick={() => checIfBom(i)}>a1</button>);

}
let boms = [false,false,-1,false,false,false,false,1,-1];


function checIfBom(index:number){
  if(boms[index]){
    alert("Bommmmmm");
  }else{
    alert("OK");
  }
}

const renderCells=()=>{
  return <button className="cell"></button>
}

function Sweeper(props:any) {

    return (
      <h1>Rows = {props.rows}  Clumns= {props.columns}</h1>
     //{renderCells}     
    );
}

export default Sweeper;

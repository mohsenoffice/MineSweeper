import React from 'react';
import logo from './logo.svg';
import './App.scss';
let width = 1;
let hight = 9;
let itemList: JSX.Element[]=[];
for(let i=0; i<width*hight;i++){
  itemList.push(<label onClick={() => checIfBom(i)}></label>);

}
let boms = [false,false,true,false,false,false,false,false,true,];


function checIfBom(index:number){
  if(boms[index]){
    alert("Bommmmmm");
  }else{
    alert("OK");
  }
}

function Sweeper() {
  width = 3;
  hight = 9;

    return (
     <>
      {itemList}
     </>
    );
}

export default Sweeper;

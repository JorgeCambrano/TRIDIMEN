import React from 'react';
import { TweenLite, TweenMax, Linear } from "gsap";
import './component.css';

const nuevo = () => {
  // const intersectionPoints = [{x:0, y:0}, {x:100, y:400}, {x:300, y:20}, {x:400, y:200}, {x:500, y:0}];
  const target = document.getElementById("target");
  const tween = TweenMax.to(".box", 3, {bezier:target, ease:Linear.easeNone, paused:true});
  const dots = 80;

  TweenLite.set(target, {xPercent: -50, yPercent: -50});

  for (var i = 0; i <= dots; i++){
    // const dot = ("<div className='dot'></div>").appendTo(("body")); //create a dot.
    // tween.progress(i/dots); // increment the progress().
    // TweenLite.set(dot, {x:target._gsTransform.x, y:target._gsTransform.y}); //position dot based on target's x/y position.
    }
    
    tween.restart();

  return null;
}

export default nuevo;
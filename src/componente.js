import React, { Component } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";
import MOM from '../src/Imagenes/mom.png';
import Texto from './texto';

class Componente extends Component {

	constructor(props){
		super(props);
		this.logoContainer = null;
        this.logoTween = null;
        this.texTween =null ;
    }


	componentDidMount(){
		// create logo tween
		
		this.logoTween = new TimelineLite({ paused:true })
			.to(this.logoContainer, 2, { x: 500 })
            .to(this.logoContainer, 1, { rotation: 360, transformOrigin: "center" })
    }
	render(){
		return <div className="container">
		<div>
			 <Texto/>
		
					<div className="mb-2 btn-group">
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTween.play()}
						>Play</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTween.pause()}
						>Pausa</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTween.reverse()}
						>Reversa</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTween.restart()}
						>Restablecer</button>
					</div>
					<hr />
				</div>

				<div className="col-12 mt-3">
					<img
						 src={MOM} 
						alt=""
						width="240"
					    height="251"
						className="img-fluid logo"
						ref={ img => this.logoContainer = img }
					/>
				</div>

                

			</div>
		
	}
	
}

export default Componente;

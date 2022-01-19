import { useState } from 'react';
import style from '../styles/slider.module.css';

export default function Slider(){

    let sliderArr = [1,2,3,4,5]
    const[x, setX] = useState(0)
    const goLeft=()=>{
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }
    const goRight=()=>{
     (x === -100*(sliderArr.length-1))  ? setX(0) : setX(x - 100); //toda vez que o carrosel chegar ao fim ele retorna para o inicio
    }

    return(
        <div className={style.slider}>
                {
                    sliderArr.map((item,index)=>{
                        return(
                            <div key={index} className={style.slide} style={{transform: `translateX(${x}%)`}}>
                                {item}
                            </div>
                        )
                    })
                }
        {/* Botoes de navegação */}
        <button id={style.goLeft}  onClick={goLeft}>Left</button>
        <button id={style.goRight} onClick={goRight}>Right</button>
        </div>
    )
}
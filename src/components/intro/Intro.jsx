import React from 'react'
import "./Intro.css"
import Me from "../../img/me.png"

function Intro() {
    return (
        <div className='intro'>
            <div className="intro-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Filip Kuusisto Pedersen</h2>
                    <h1 className='i-name'>Webudvikler studerende på UCL i Odense</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">HTML & CSS</div>
                            <div className="i-title-item">Tailwind</div>
                            <div className="i-title-item">JavaScript</div>
                            <div className="i-title-item">ASP.NET</div>
                            <div className="i-title-item">React.js</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        <p>Jeg er en 23-årig årig frisk og energisk ung mand, der har en brændende passion for <strong>Frontend udvikling</strong> og webdesign. Da jeg snart er færdig med min bachelor, er jeg på udkig efter et <strong>praktiksted</strong>. Jeg er sulten efter at komme igang og benytte mine kompetencer til at skabe noget <strong>fedt</strong>. Jeg har en "det-har-jeg-ikke-prøvet-før-så-det-kan-jeg-sikkert-godt" tilgang til tingene, og så lever jeg for at tilegne mig <strong>ny viden.</strong></p>
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="i-right-wrapper">
                    <div className="i-bg"></div>
                   <img src={Me} alt="" className="i-img" />
                </div>
            </div>
        </div>
    )
}

export default Intro

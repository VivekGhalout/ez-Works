import React, { useState } from 'react'
import './home.css';
import presentation from '../Images/presentation.png'
import audio from '../Images/audio.png'
import translation from '../Images/translation.png'
import graphic from '../Images/graphic.png'
import research from '../Images/research.png'
import data from '../Images/data.png'
import logo from '../Images/logo.png'
import axios from 'axios';

function Home() {
    const [ResponseMessage, setResponseMessage] = useState('');
    const [msgColor, setMsgColor] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://3.228.97.110:9000/api', { email });
            console.log(response.data);
            setResponseMessage(response.data.message)
            setMsgColor('okResponse');
            setEmail("");
        } catch (err) {
            console.log(err);
            setResponseMessage(err.message);
            setMsgColor('error');
            setEmail("");
        }
    };

    return (
        <section>
            <div className='main-div'>
                <div className='logo-div'>
                    <img src={logo} alt="logo" />
                    <h3>Suite Of Business Support Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    <p className='res-message-lg' style={{ color: msgColor === "okResponse" ? "green" : "red", textAlign: "center" }}>{ResponseMessage}</p>
                    <form onSubmit={handleSubmit} className='big-screen-form'>
                        <div className='input-div'>
                            <input type="email" required placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} value={email} />
                            <button type="submit">Contact Me</button>
                        </div>
                    </form>
                </div>
                <div className='cards-div'>
                    <div className='card'>
                        <div>
                            <img src={presentation} alt="presentation" width={"20%"} />
                            <div>Presentation Design</div>
                        </div>
                        <div>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={audio} alt="audio" width={"20%"} />
                            <div>Audio - Visual Production</div>
                        </div>
                        <div>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={translation} alt="translation" width={"20%"} />
                            <div>Translation Services</div>
                        </div>
                        <div>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={graphic} alt="graphic" width={"20%"} />
                            <div>Graphic Design&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        </div>
                        <div>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={research} alt="research" width={"20%"} />
                            <div>Research & Analytics</div>
                        </div>
                        <div>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={data} alt="data" width={"20%"} />
                            <div>Data Processing&nbsp;</div>
                        </div>
                        <div>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</div>
                    </div>
                </div>
                <p className='res-message-sm' style={{ color: msgColor === "okResponse" ? "green" : "red", textAlign: "center" }}>{ResponseMessage}</p>
                <form onSubmit={handleSubmit} className='small-screen-form'>
                    <div className='input-div'>
                        <input type="email" required placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} value={email} />
                        <button type="submit">Contact Me</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Home
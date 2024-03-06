import React from 'react'

const About = (props) => {
    
   
    return (
        <div   className='container' style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }}>
            <div className="accordion" id="accordionExample">
                <h1 className='m-3'>About Us</h1>
                <div className="accordion-item" >
                    <h2 className="accordion-header" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }}>
                        <button className="accordion-button" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What We Do
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }} > 
                            <strong>Nex-Word is a web-based tool designed to help you manipulate text in various ways. </strong>It provides a user-friendly interface for common text manipulation tasks, allowing you to transform your text quickly and easily.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }} >
                    <h2 className="accordion-header" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }}>
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Our Mission
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }} data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }}>
                            <strong>We aim to empower users with a simple and accessible platform for text manipulation</strong> We believe everyone should have the ability to modify their text to suit their needs, regardless of technical expertise.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }}>
                    <h2 className="accordion-header" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }}>
                        <button className="accordion-button collapsed"  style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  >
                        Future Plans
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }} data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }}>
                            <strong>What's next for Nex-Word?</strong> We are constantly working on improving Nex-Word and adding new functionalities. We're excited to explore features like text-to-speech translation. Feel free to share your feedback and suggestions with us!
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;

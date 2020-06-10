import { useRouter } from 'next/router';
import HeadMod from '../components/head'
import Header from '../components/header'
import Contex from '../components/contex'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Link from 'next/link'

import VideoRepeater from '../components/videoRepeater'
// import fetch from 'isomorphic-unfetch';







class Kahville extends React.Component {
    constructor(props) {
        super(props)
        this.state = { playing: false, sending: false, sended: false }
    }


    toggle() {
        this.setState({ playing: !this.state.playing })
    }

    sendForm(event) {
        event.preventDefault()
        this.setState({ sending: true })
        const data = new FormData(event.target)



        fetch('https://xn51q7t16m.execute-api.eu-west-1.amazonaws.com/EmailApi/ota-yhteytta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:
                JSON.stringify({
                    name: data.get("name"),
                    email: data.get("email"),
                    tarina: data.get("tarina"),
                })

        }).then(reponse => reponse.json()).then(res => {
            if (res === 'sended') {
                console.log('viesti lähetetty onnistuneesti')
                this.setState({ sending: false })
                this.setState({ sended: true })

            }
        }

        )
    }


    render(props) {

        let black
        let container
        let displayNone
        let full
        let displayBlock
        let heightAuto
        let autoPlay = ''
        if (this.state.playing) {
            black = 'black'
            container = 'container'
            displayNone = 'd-none'
            full = 'full'
            displayBlock = 'd-block'
            autoPlay = 'autoPlay'
            heightAuto = 'height-auto'
        }


        return (

            <>
                <HeadMod title={'Kahville - Awara'} />
                <Nav theme={'black'} />
                <section>
                    <header className="text-center mt-5 mb-5">
                        {/* <h1>Mikä on sinun tarinasi</h1>
                        <p>Kerro meille tarinasi</p> */}
                    </header>
                    {/* <VideoRepeater
                        displayBlock={displayBlock}
                        displayNone={displayNone}
                        autoPlay={autoPlay}
                        overText={true}
                        toggle={this.toggle.bind(this)}
                    /> */}
                    <div className="container">
                        <header className="text-center   mb-5">
                            <h1>Minkä tarinan sinä haluat kertoa?</h1>
                            <p>Ota yhteyttä ja tule kanssamme kahville Turkuun</p>
                        </header>
                        {/* <h2 className="text-center" >Toteutetaan unelmasi yhdessä</h2> */}
                        <form onSubmit={this.sendForm.bind(this)}  >
                            <div className="form-row">
                                <div class="form-group col-md-12">
                                    <label for="Nimi">Nimi</label>
                                    <input required type="text" class=" " id="Nimi" name="name" aria-describedby="emailHelp" placeholder="Nimi" />
                                </div>
                                {/* <div class="form-group col-md-6">
                                    <label for="Sukunimi">Sukunimi</label>
                                    <input type="text" class=" " name="Sukunimi" id="Sukunimi" aria-describedby="emailHelp" placeholder="Sukunimi" />
                                </div> */}
                                <div class="form-group col-md-12">
                                    <label for="Sähköposti">Sähköposti</label>
                                    <input required type="email" name="email" class=" " id="Sähköposti" aria-describedby="emailHelp" placeholder="Sähköposti" />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="Tarinasi">Mitä voimme tehdä vuoksesi?</label>
                                    <textarea class="  " name="tarina" id="Tarinasi" placeholder="Mitä voimme tehdä vuoksesi?" required></textarea>
                                </div>
                                {this.state.sending ? <button type="submit" disabled class="bnt-custom m-auto">Lähetetään...</button> :
                                    <button type="submit" class="bnt-custom m-auto">Lähetä</button>
                                }
                                {this.state.sended &&
                                    <div className="mt-1 sended">
                                        <span className="text-center">
                                            <p >Viestisi lähetetty</p>
                                        </span>
                                    </div>
                                }
                                </div>
                                <p className="mt-2 text-center">Lähettämällä hyväksyt
                                 <a  target="_blank"  rel="noopener" href={'/tietosuojailmoitus'}>
                                    <span style={{ color: '#bebebe', cursor: 'pointer', fontSize:'inherit' }}> tietosuojailmoituksen</span>
                                </a>
                                </p>
                          
                        </form>
                        <div className="text-center mt-5 mb-5">
                            <p>Voit myös soitaa meille</p>
                            {/* <p><a href="tel:+358442921296">+358 44 292 1296</a></p> */}
                        </div>
                        <div className="row mt-5 mb-5 text-center position-relative">
                            <div class=" col-sm-6 col-md-6 people">
                                <img
                                    src="../static/people1.jpg"
                                    alt="Eero Forss"
                                />
                                <div className="people">
                                    <address>
                                        <b>Eero Forss</b>
                                        <p>Perustaja & CEO</p>
                                        <p><a target="_blank"  rel="noopener" href="mailto:eero@awara.fi">eero@awara.fi</a></p>
                                        <p><a href="tel:+358442921296">+358 44 292 1296</a></p>
                                        <a target="_blank"  rel="noopener" href="https://www.facebook.com/eero.forss">
                                            <i class="black-theme fa fa-facebook-square nav_icon"></i>
                                        </a>
                                        <a target="_blank"  rel="noopener" href="https://www.instagram.com/eeroforss/">
                                            <i class="black-theme fa fa-instagram nav_icon"></i>
                                        </a>
                                        <a target="_blank"  rel="noopener" href="https://www.linkedin.com/in/eero-forss/">
                                            <i class="black-theme fa fa-linkedin nav_icon"></i>
                                        </a>
                                    </address>
                                </div>

                            </div>
                            <div class="seperator"></div>

                            <div class="col-md-6 col-sm-6 people">
                                <img
                                    src="../static/people2.jpg"
                                    alt="Lauri Forss"
                                />
                                <div className="people">
                                    <address>
                                        <b>Lauri Forss</b>
                                        <p>Perustaja & Tuotantojohtaja</p>
                                        <p><a target="_blank"  rel="noopener" href="mailto:lauri@awara.fi">lauri@awara.fi</a></p>
                                        <p><a href="tel:+358403558226">+358 40 355 8226</a></p>
                                        <a target="_blank"  rel="noopener" href="https://www.facebook.com/lauri.forss">
                                            <i class="black-theme fa fa-facebook-square nav_icon"></i>
                                        </a>
                                        <a target="_blank"  rel="noopener" href="https://www.instagram.com/forsslauri/">
                                            <i class="black-theme fa fa-instagram nav_icon"></i>
                                        </a>
                                        <a target="_blank"  rel="noopener" href="https://www.linkedin.com/in/lauri-forss/">
                                            <i class="black-theme fa fa-linkedin nav_icon"></i>
                                        </a>
                                    </address>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

                <Footer />

            </>

        );
    };

}


export default Kahville;
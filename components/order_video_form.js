import React from 'react'
import Link from 'next/link'
import logo from '../static/logoBlack.svg'
import logoWhite from '../static/logoWhite.svg'



const OrderVideo = props => (
  <div className={` orderForm ${props.order && 'order_true'}`}>
    <label onClick={props.toggleOrder} for="drawer-toggle" class="close">
      <span></span>
      <span></span>
    </label>
       <h1>Tilaa video - et sitoudu mihinkään</h1>
    <div className="orderDetail">
    <p>Pakettisi tiedot:</p>
<p>Pakettisi: {props.packed.nimi} - {props.videoType}</p>
<p>Hinta: <b>{props.packed.hinta}€ + alv 24%</b></p>
    </div>
   



<form  >
                            <div className="form-row mt-5">
                                <div class="form-group col-md-12">
                                    <label for="Nimi">Nimi</label>
                                    <input required type="text" class=" " id="Nimi" name="name" aria-describedby="emailHelp" placeholder="Nimi" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Sähköposti">Sähköposti</label>
                                    <input required type="email" name="email" class=" " id="Sähköposti" aria-describedby="emailHelp" placeholder="Sähköposti" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Puhelinnumero">Puhelinnumero</label>
                                    <input required type="text" name="number" class=" " id="Puhelinnumero" aria-describedby="emailHelp" placeholder="Puhelinnumero" />
                                </div>
                             
                               
                                    <button type="submit" class="bnt-custom m-auto">Tilaa videotuotanto</button>
                                
                                {/* {this.state.sended &&
                                    <div className="mt-1 sended">
                                        <span className="text-center">
                                            <p >Viestisi lähetetty</p>
                                        </span>
                                    </div>
                                } */}
                                </div>
                                <p className="mt-2 text-center">Lähettämällä hyväksyt
                                 <a  target="_blank"  rel="noopener" href={'/tietosuojailmoitus'}>
                                    <span style={{ color: '#bebebe', cursor: 'pointer', fontSize:'inherit' }}> tietosuojailmoituksen</span>
                                </a>
                                </p>
                          
                        </form>

  </div>
)

export default OrderVideo

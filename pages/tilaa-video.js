import React from 'react'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import HeadMod from '../components/head'
import Nav from '../components/nav'

import OrderVideo from '../components/order_video_form'
import Switch from "react-switch";



const client = require('contentful').createClient({
  space: '6s2ksmvtjw36',
  accessToken: 'g_mkh3ZioVEc2Wn0PWPKrHZfwQVpe-irYmH4RXrCoas'
})



class Tietosuojailmoitus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      VideoPakettiKokonaisuudet: [],
      VideoTyypit: [],
      naytettavaPaketti: [],
      selected: false,
      selected_packed: {},
      order: false,
      checked: false
    }
  }


  componentDidMount() {
    client.getEntries({
      content_type: 'videotyypit'
    }).then((response) => {
      console.log(response)
      this.setState({
        VideoTyypit: response.items
      })
    })

    client.getEntries({
      content_type: 'videopaketit'
    }).then((response) => {
      console.log(response)
      this.setState({
        VideoPakettiKokonaisuudet: response.items
      })
    })
  }

  naytaPaketti(e, packedName) {
    console.log('Paketti' + e);
    const found = this.state.VideoPakettiKokonaisuudet.find(element => element.fields.nimi === e);
    console.log('found' + found.fields.nimi);
    this.setState({
      naytettavaPaketti: found.fields.paketit,
      selected: packedName,
    })
    console.log(this.state.naytettavaPaketti)
  }


  tilaa(order_data) {
    console.log(order_data)
    this.setState({
      selected_packed: order_data,
      order: true
    })
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  toggleOrder() {
    this.setState({ order: !this.state.order });
  }

  

  render(props) {






    return (
      <div>
        <HeadMod title={'Tilaa video täältä - Awara'} />

        <main>
          <Nav theme={'black'} />
          <div className="policy  container mb-5">
            <h1><b>Tilaa video suoraan täältä</b></h1>

            <p>Helppoa hinnoittelua kaikille.</p>
            <p>Valitse alta sinulle sopiva tyyppi.</p>
            <Switch
              onChange={() => this.handleChange()}
              checked={this.state.checked}
              className="react-switch"
            />

            <div class="row mt-5 text-center">
              {this.state.VideoTyypit.length > 0
                ? this.state.VideoTyypit.map((p, index) => (
                  <div key={index} class="col-sm mt-2 ">
                    <div>
                      <button
                        value={p.fields.videoPakettiKokonaisuus.fields.nimi}
                        onClick={() => this.naytaPaketti(p.fields.videoPakettiKokonaisuus.fields.nimi, p.fields.name)}
                        type="submit"
                        className={`bnt-custom bnt-custom-big m-auto  ${p.fields.name === this.state.selected && 'selected_shop'}`}>
                        {p.fields.name}
                      </button>
                    </div>
                  </div>
                ))
                : null}
            </div>

            <div class="  mt-5 text-center">
              <h2><b>Tässä sinulle suositeltuja paketteja</b></h2>
              <h3>{this.state.selected}</h3>
            </div>



            {this.state.naytettavaPaketti.length > 0
              ? (
                <div class="row mt-5 text-left">

                  <div class="col-sm packages first-packages">
                    <div>
                      <h3>{this.state.naytettavaPaketti[0].fields.nimi} </h3>
                      <p>{this.state.naytettavaPaketti[0].fields.kuvausteksti}</p>
                      <div class="pricing mt-2 mb-2 text-left">
                        <span>{this.state.naytettavaPaketti[0].fields.hinta}€ + alv 24%</span>
                      </div>
                      <div class="include text-left mb-3">
                        {this.state.naytettavaPaketti[0].fields.resurssit.map((p, index) => (
                          <span key={index}>
                            {p}
                          </span>
                        ))}
                      </div>
                      <button onClick={() => this.tilaa(this.state.naytettavaPaketti[0].fields)} type="submit" class="bnt-custom bnt-custom-big m-auto">Valitse paketti</button>
                    </div>
                  </div>



                  <div class="col-sm packages second-packages">
                    <div>
                      <h3>{this.state.naytettavaPaketti[1].fields.nimi} </h3>
                      <p>{this.state.naytettavaPaketti[1].fields.kuvausteksti}</p>
                      <div class="pricing mt-2 mb-2 text-left">
                        <span>{this.state.naytettavaPaketti[1].fields.hinta}€ + alv 24%</span>
                      </div>
                      <div class="include text-left mb-3">
                        {this.state.naytettavaPaketti[1].fields.resurssit.map((p, index) => (
                          <span key={index}>
                            {p}
                          </span>
                        ))}
                      </div>
                      <button onClick={() => this.tilaa(this.state.naytettavaPaketti[1].fields)} type="submit" class="bnt-custom bnt-custom-big m-auto">Valitse paketti</button>
                    </div>
                  </div>


                  <div class="col-sm packages third-packages">
                    <div>
                      <h3>{this.state.naytettavaPaketti[2].fields.nimi} </h3>
                      <p>{this.state.naytettavaPaketti[2].fields.kuvausteksti}</p>
                      <div class="pricing mt-2 mb-2 text-left">
                        <span>{this.state.naytettavaPaketti[2].fields.hinta}€ + alv 24%</span>
                      </div>
                      <div class="include text-left mb-3">
                        {this.state.naytettavaPaketti[2].fields.resurssit.map((p, index) => (
                          <span key={index}>
                            {p}
                          </span>
                        ))}
                      </div>
                      <button onClick={() => this.tilaa(this.state.naytettavaPaketti[2].fields)} type="submit" class="bnt-custom bnt-custom-big m-auto">Valitse paketti</button>
                    </div>
                  </div>


                </div>
              ) : null}




          </div>
        </main>
        <Footer />
        <OrderVideo
          order={this.state.order}
          videoType={this.state.selected}
          packed={this.state.selected_packed}
          toggleOrder={() => this.toggleOrder()}
        />
        <div className={`${this.state.order && 'backdrop'}`} />
      </div>

    )
    // }
  };
}

export default Tietosuojailmoitus;

import React from 'react'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import HeadMod from '../components/head'
import Nav from '../components/nav'

import OrderVideo from '../components/order_video_form'


const client = require('contentful').createClient({
  space: '6s2ksmvtjw36',
  accessToken: 'g_mkh3ZioVEc2Wn0PWPKrHZfwQVpe-irYmH4RXrCoas'
})



// class Tietosuojailmoitus extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { playing: false, sending: false, sended: false }
//   }

function Tietosuojailmoitus() {




  // render(props) {

  async function fetchVideoTyypit() {
    const entries = await client.getEntries({
      content_type: 'videotyypit'
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }
  async function fetchVideoPakettiKokonaisuus() {
    const entries = await client.getEntries({
      content_type: 'videopaketit'
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [videotyypit, setPosts] = useState([])
  const [pakettikokonaisuus, setPostsa] = useState([])

  useEffect(() => {
    async function getData() {
      const allVideoTyypit = await fetchVideoTyypit()
      const allVideoPakettiKokonaisuudet = await fetchVideoPakettiKokonaisuus()
      setPosts([...allVideoTyypit])
      setPostsa([...allVideoPakettiKokonaisuudet])
    }
    getData()
  }, [])
  console.log(pakettikokonaisuus)
  console.log(videotyypit)


  function naytaPaketti(e) {
    e.preventDefault();
    console.log('Paketti' + e);
    console.log('Paketti' + this.pakettikokonaisuus);
  }


  return (
    <div>
      <HeadMod title={'Tilaa video täältä - Awara'} />

 

      <main>
        <Nav theme={'black'} />
        <div className="policy  container mb-5">
          <h1><b>Tilaa video suoraan täältä</b></h1>

          <p>Helppoa hinnoittelua kaikille.</p>
          <p>Valitse alta sinulle sopiva tyyppi.</p>


          <div class="row mt-5 text-center">
            {videotyypit.length > 0
              ? videotyypit.map(p => (
                <div class="col-sm mt-2 ">
                  <div>
                    <button value="Markkinointivideo" onClick={naytaPaketti} type="submit" class="bnt-custom bnt-custom-big m-auto">{p.fields.name}</button>
                  </div>
                </div>
              ))
              : null}
          </div>



          {/* <div class="row mt-5 text-center">
            <div class="col-sm  ">
              <div>
                <button value="Markkinointivideo" onClick={naytaPaketti} type="submit" class="bnt-custom bnt-custom-big m-auto">Markkinointivideo</button>
              </div>
            </div>
            <div class="col-sm  ">
              <div>
                <button type="submit" class="bnt-custom bnt-custom-big m-auto">Asiantuntijavideo</button>
              </div>

            </div>
            <div class="col-sm  ">
              <div>
                <button type="submit" class="bnt-custom bnt-custom-big m-auto">Opetusvideo</button>
              </div>
            </div>
          </div>
          <div class="row mt-1 text-center">
            <div class="col-sm  ">
              <div>
                <button type="submit" class="bnt-custom bnt-custom-big m-auto">Tapahtumavideo</button>
              </div>
            </div>
            <div class="col-sm  ">
              <div>
                <button type="submit" class="bnt-custom bnt-custom-big m-auto">Mainosvideo</button>
              </div>

            </div>
            <div class="col-sm  ">
              <div>
                <button type="submit" class="bnt-custom bnt-custom-big m-auto">Asiakaskokemusvideo</button>
              </div>
            </div>
          </div>
          <div class="row mt-1 text-center">
            <div class="col-sm  ">
              <div>
                <button type="submit" class="bnt-custom bnt-custom-big m-auto">Rekryvideo</button>
              </div>
            </div>
            <div class="col-sm  ">
              <div>
                <button type="submit" class="bnt-custom bnt-custom-big m-auto">Videosarja</button>
              </div>
            </div>
            <div class="col-sm  ">
              <div>
              </div>
            </div>
          </div> */}

          <div class="  mt-5 text-center">
            <h2><b>Tässä sinulle suositeltuja paketteja</b></h2>
          </div>


          <div class="row mt-5 text-left">
             <div class="col-sm packages first-packages">
              <div>
                <h3> }</h3>[0].fields.nimi
                <p>Sopii hyvin pieniin tuotantoihin</p>
                <div class="pricing mt-2 mb-2 text-left">
                  <span>1000€ + alv 24%</span>
                </div>
                <div class="include text-left mb-3">

                  <span>1 Kuvaaja</span>
                  <span>1 äänimies</span>
                  <span>1 videokamera</span>
                  <span>1 Kuvauslokaatio</span>
                  <span>1 Korjauskerta</span>
                  <span>1 Leikkausversio</span>
                  <span>60 sekunttia maks.</span>
                  <span>Musiikki</span>
                  <span>Aloituspalaveri</span>
                  </div>
                <button type="submit" class="bnt-custom bnt-custom-big m-auto">Tilaa tästä</button>
              </div>
            </div>
             <div class="col-sm packages second-packages">
              
              <div>
                <h3>Ohjaajan paketti</h3>
                <p>Sopii hyvin pieniin tuotantoihin</p>
                <div class="pricing mt-2 mb-2 text-left">
                  <span>1000€ + alv 24%</span>
                </div>
                <div class="include text-left mb-3">

                  <span>1 Kuvaaja</span>
                  <span>1 äänimies</span>
                  <span>1 videokamera</span>
                  <span>1 Kuvauslokaatio</span>
                  <span>1 Korjauskerta</span>
                  <span>1 Leikkausversio</span>
                  <span>60 sekunttia maks.</span>
                  <span>Musiikki</span>
                  <span>Aloituspalaveri</span>
                  </div>
                <button type="submit" class="bnt-custom bnt-custom-big m-auto">Tilaa tästä</button>
              </div>

            </div>
            <div class="col-sm packages third-packages">
         
              <div>
                <h3>Kustomoitu paketti sinulle</h3>
                <p>Sopii hyvin pieniin tuotantoihin</p>
                <div class="pricing mt-2 mb-2 text-left">
                  <span>1000€ + alv 24%</span>
                </div>
                <div class="include text-left mb-3">

                  <span>1 Kuvaaja</span>
                  <span>1 äänimies</span>
                  <span>1 videokamera</span>
                  <span>1 Kuvauslokaatio</span>
                  <span>1 Korjauskerta</span>
                  <span>1 Leikkausversio</span>
                  <span>60 sekunttia maks.</span>
                  <span>Musiikki</span>
                  <span>Aloituspalaveri</span>
                  </div>
                <button type="submit" class="bnt-custom bnt-custom-big m-auto">Tilaa tästä</button>
              </div>

            </div>
          </div>


        </div>
      </main>
      <Footer />
      <OrderVideo />

    </div>

  )
}
//   };
// }

export default Tietosuojailmoitus;

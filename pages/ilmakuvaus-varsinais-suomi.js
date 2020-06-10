import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import HeadMod from '../components/head'
import Nav from '../components/nav'




const VideotuotantoTurku = () => (
  <div>
    <HeadMod title={'Ilmakuvausta Varsinais-Suomi - Awara'}
      description={'Laadukasta ilmakuvausta Turun alueella ja tietenkin koko varsinais-suomen alueella'}
    />



    <main>
      <Nav theme={'black'} />
      <div className="policy  container mb-5">
        {/* <h1><b>Videoita jokaiselle turkulaiselle</b></h1> */}
        <h1><b>Tilaa ilmakuvia turvallisesti ja helposti</b></h1>

        <div className="container">
          <div className="row">
            <div className="video-containerYouTube">
              <iframe width="853" height="480" src="https://www.youtube.com/embed/ubz-M1ZmPVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="pb-3 text-center ">
          <p>Kuvaamme ammattitaitoisesti Turun alueella</p>
          {/* <p>Yrityksemme nopeana toimintaetuna pystymme tuottamaan Turun alueella videoita</p> */}
        </div>
        <div className="mr-2 m-auto text-center">




        </div>
        <div class="container">
          <div class="row">
            {/* <div class="col-sm text-center">
              <p>Jätä numerosi, soitamme sinulle saman päivän aikana</p>

              <input required type="tel" name="email" className="mb-2 mt-2" id="Sähköposti" aria-describedby="emailHelp" placeholder="Puhelinnumerosi" />
              <button type="submit" class="bnt-custom m-auto ">Lähetä soittopyyntö</button>
            </div> */}
            <div class="col-sm text-center">
              <p>Soita suoraan Awaran <span className="text-danger d-inline">kuumalle linjalle</span></p>

              <div className="mt-2">
                <a className="bg-danger p-2 mt-2" href='tel:+358442921296' class=" ">Soita tästä 044 292 1296</a>
              </div>
            </div>
          </div>
        </div>
   
      </div>

    </main>
    <Footer />

  </div>
)

export default VideotuotantoTurku

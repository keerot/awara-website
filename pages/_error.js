import React from 'react'
import Link from 'next/link'

import Header from '../components/header'
import Footer from '../components/footer'
import HeadMod from '../components/head'
import Nav from '../components/nav'




const Error = () => (
    <div>
        <HeadMod title={'Tietosuojailmoitus - Awara'} />



        <main>
            <Nav theme={'black'} />
            <div className="policy  container mb-5">
                <h1><b>Nyt ei valitettavasti löytynyt</b></h1>
                <div class="col-sm text-center">
                    <p>Soita suoraan Awaran <span className="text-danger d-inline">kuumalle linjalle</span> niin kerromme vastauksen</p>

                    <div className="mt-2">
                        <a className="bg-danger p-2 mt-2" href='tel:+358442921296' class=" ">Soita tästä 044 292 1296</a>
                    </div>
                    <p>Tai katso Awaran Showreel</p>
                </div>
                <div className="container mt-4">
          <div className="row">
            <div className="video-containerYouTube">
              <iframe width="853" height="480" src="https://www.youtube.com/embed/ubz-M1ZmPVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>

            </div>
        </main>
        <Footer />

    </div>
)



export default Error

import React from 'react'
import Head from 'next/head'
// import "../static/reset.css"
import "../static/style.css"
import "../static/footer.css"
import "../static/contex.css"
import "../static/tyot.css"
import "../static/test.css"
import "../static/contact.css"
import "../static/palvelut.css"
import "../static/privacy.css"
import "../static/webshop.css"


const HeadMod = props => (

    <Head>

        <title>
            {props.title}
        </title>
        <meta name="description" content={props.description ? props.description : "Awarampaa videotuotantoa koko Suomen alueella"}/>
        <meta name="image" content="../static/Awara_facebook.png" />

        {/* <!-- Schema.org for Google --> */}
        {/* <meta itemprop="name" content={props.title} />
        <meta itemprop="description" content={props.description ? props.description : "Awarampaa videotuotantoa koko Suomen alueella"} />
        <meta itemprop="image" content="../static/Awara_facebook.png" /> */}
        
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content= {props.title} />
        <meta name="og:description" content={props.description ? props.description : "Awarampaa videotuotantoa koko Suomen alueella"} />
        <meta name="og:image" content="../static/Awara_facebook.png" />
        <meta name="og:url" content="awara.fi" />
        <meta name="og:site_name" content="AwaraProductions" />
        <meta name="og:locale" content="fi_FI" />
        <meta name="og:type" content="website" />


        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <link rel='icon' href='../static/favicon.ico' />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Khula:400,700&display=swap" rel="stylesheet" />

        <script
            async
            type='text/javascript'
            dangerouslySetInnerHTML={{
                __html: `
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5dcdb56043be710e1d1d5a46/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
    `
            }}
        />




    </Head>

)

export default HeadMod

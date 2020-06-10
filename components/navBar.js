import React from 'react'
import Link from 'next/link'
import logo from '../static/logoBlack.svg'
import { useRouter } from 'next/router';



   

const NavBar = props => {
  const router = useRouter()
  console.log('router', router.pathname)
  const links = [
    { href: '/tyot', label: 'Työt' },
    { href: '/palvelut', label: 'Palvelut' },
    { href: '/kahville', label: 'Kahville' },
    { href: '/tilaa-video', label: 'Tilaa video täältä *', color: 'red' }
  ]
 

  return (



    <ul className="mx-auto text-center">
      {
        links.map(link => 
          (
            <li>
              <Link href={link.href}>
                <a
                  className={`${props.main && 'black-theme'}  ${router.pathname === link.href && 'activeSelected'} `}
                  style={{ color: link.color? link.color : props.theme }}>
                  {link.label}
                </a>
              </Link>
            </li>
          )
        )
      }
      {/* <li>
        <Link href='/tyot'>
          <a className={`black-theme  ${router.pathname === '/tyot' && 'activeSelected'} `} style={{ color: props.theme }}>Työt</a>
        </Link>
      </li>
      <li>
        <Link href='/palvelut'>
          <a className="black-theme" style={{ color: props.theme }}>Palvelut</a>
        </Link>
      </li>
      <li>
        <Link href='/kahville'>
          <a className="black-theme" style={{ color: props.theme }}>Kahville</a>
        </Link>
      </li> */}
    </ul>

  )
}
export default NavBar

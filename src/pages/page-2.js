import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'
import SEO from '../components/seo'
import Layout from '../components/layout'

import { MdFlightTakeoff, MdImportantDevices } from 'react-icons/md'
import { DiReact, DiTerminal } from 'react-icons/di';
import { FaApple, FaAngellist } from 'react-icons/fa';
import { GiCycling, GiHemp } from 'react-icons/gi';
import { GoGlobe, GoSquirrel } from  'react-icons/go';
import { WiDayFog, WiNightHail } from 'react-icons/wi';


import { IconContext } from 'react-icons';


const AboutPage = () => (
  <Layout>
    <SEO title='Page two' />
    <h1>About</h1>
    <p>Welcome to translate-me app!</p>
    <IconContext.Provider value={{ verticalAlign: 'middle', size: '2rem', color: '#6D309C', className: 'global-class-name' }}>
      {/* <MdFlightTakeoff/><MdImportantDevices/><br/> */}
      <DiReact/><DiTerminal/><br/>
      {/* <FaApple/><FaAngellist/><br/>
      <GiCycling/> <GiHemp/> <br/>
      <GoGlobe/><GoSquirrel/><br/>
      <WiDayFog/><WiNightHail/><br/> */}
    </IconContext.Provider>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to='/'>Back Home</Link>
  </Layout>
)

export default AboutPage

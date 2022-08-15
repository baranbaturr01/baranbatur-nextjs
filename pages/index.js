import Image from 'next/image'
import Link from 'next/link'
import profilePicture from '../public/assets/profile.jpg'
import dateFormatter from '../helpers/dateFormatter'

function Home(props) {
  return (
    <div>
      <div
        className='header'
        style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}
      >
        <div className='left'>
          <h1>
            <span style={{fontWeight: 'normal'}}>Ben</span> Baran Batur
          </h1>
          <div>Backend Yazılım geliştiririm</div>
        </div>
        <div className='right'>
          <Image
            width={250}
            height={250}
            className='profile-picture'
            src={profilePicture}
            alt='Profile picture'
          />
        </div>
      </div>

    </div>
  )
}


export default Home

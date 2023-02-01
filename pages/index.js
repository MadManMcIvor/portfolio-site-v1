import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillGitlab} from 'react-icons/ai'
import {useState} from 'react'

import Image from "next/image";
import deved from "../public/dev-ed-wave.png"
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"



export default function Home() {
  const[darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Alex McIvor Portfolio Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-700'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>developed by</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer' onClick={() => setDarkMode(!darkMode)}/></li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className=' text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl '>Alex McIvor</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Full Stack Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>I'm a driven full stack software engineer. HIRE ME FOR THE LOVE OF GOD!</p>
          </div>
          <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillGitlab />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        
        <section>
          <div>
            <h3 className=' text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Blah blah blah Then I did a thing blah. <span className=' text-teal-500'>This is where I can highlight things</span> blah asdfasdf asdf asdf fs fs adfasdf asdf af adfafa afasfdfa f afsf af afaf.
            </p>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Blah blah blah Then I did a thing blah. blah asdfasdf asdf asdf fs fs adfasdf asdf af adfafa afasfdfa f afsf af afaf.
            </p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200'>
              <Image src={design} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating cool thing, etc!
              </p>
              <h4 className='py-4 text-teal-600'> Design tools I use</h4>
              <p className='text-gray-800 py-1'> photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>etc</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200'>
              <Image src={code} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Code</h3>
              <p className='py-2'>
                Creating cool thing, etc!
              </p>
              <h4 className='py-4 text-teal-600'> Design tools I use</h4>
              <p className='text-gray-800 py-1'> photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>etc</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200'>
              <Image src={consulting} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Consulting</h3>
              <p className='py-2'>
                Creating cool thing, etc!
              </p>
              <h4 className='py-4 text-teal-600'> Design tools I use</h4>
              <p className='text-gray-800 py-1'> photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>etc</p>
            </div>
          </div>

          <section>
            <div>
              <h3 className=' text-3xl py-1'>Portfolio</h3>
              <p className='text-md py-5 leading-8 text-gray-800'>
                Blah blah blah Then I did a thing blah. <span className=' text-teal-500'>This is where I can highlight things</span> blah asdfasdf asdf asdf fs fs adfasdf asdf af adfafa afasfdfa f afsf af afaf.
              </p>
              <p className='text-md py-5 leading-8 text-gray-800'>
                Blah blah blah Then I did a thing blah. blah asdfasdf asdf asdf fs fs adfasdf asdf af adfafa afasfdfa f afsf af afaf.
              </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web2}/></div>
              <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web1}/></div>
              <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web3}/></div>
              <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web4}/></div>
              <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web5}/></div>
              <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web6}/></div>
            </div>

          </section>
          
        </section>
      </main>
    </div>
  )
}

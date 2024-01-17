import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>

            <button
            type='button'
            onClick={() => window.open('http://github.com/sbmali')}
            className='black_btn'
            >
              GitHub
            </button>
        </nav>
        <h1 className='head_text'>
          Summarizer Articles with<br className='max-md:hidden'/>
          <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
          simplify your reading with summarize, an open-source article into clear and concise summarize
        </h2>
    </header>
  )
}

export default Hero

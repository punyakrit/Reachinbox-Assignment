import img from '../assets/i.svg'
function MainPage() {
  return (
    <div className="text-white  flex justify-center items-center h-screen flex-col">
      <div>
        <img src={img}></img>
      </div>
      <div className='text-2xl my-8'>
      It’s the beginning of a legendary sales pipeline 
      </div>
      <div className='text-[#9E9E9E]'>
      When you have inbound E-mails you’ll see them here
      </div>
    </div>
  )
}

export default MainPage

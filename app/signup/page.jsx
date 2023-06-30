import Link from 'next/link'

const MainSignUp = () => {
  return (
    <>
      <section className="h-screen">
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='rounded-lg flex items-center justify-center py-10 w-screen sm:min-h-[50vh] sm:max-w-[70vw]'>
            <div className='w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%]'>
              <div className='border border-black dark:border-white rounded-xl'>
                <h3 className='text-xl dark:text-white text-center m-5'>Join as an Artist or a Client</h3>
                <div className='grid sm:flex m-5 p-3 gap-5 max-w-[90%] rounded py-5 justify-evenly'>
                  <Link href={'/user/signup'} className='p-3 w-[250px] h-[150px] flex items-center justify-center border-2 border-gray-400 rounded-lg hover:border-[#A10035] hover:border-4'>
                    <h3 className='dark:text-white text-center'>I am a client <br /> Looking for an Artist</h3>
                  </Link>
                  <Link href={'/artist/signuo'} className='p-3 w-[250px] h-[150px] flex items-center justify-center border-2 border-gray-400 rounded-lg hover:border-[#A10035] hover:border-4'>
                    <h3 className='dark:text-white text-center'>I am an Artist <br /> Looking for Clients</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default MainSignUp
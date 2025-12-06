import React from 'react'

const AboutMe = () => {
  return (
    <section className=' bg-gray-950 min-h-screen py-6'>
        <div className='z-10'>

            <div className='flex justify-center py-6'>
                <h1 className='text-6xl text-white'>About Me</h1>
            </div>

     <div className="flex justify-center m-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] max-w-5xl">


  <div className="col-span-2 bg-white/5 border border-white/10 text-white p-6 rounded-2xl backdrop-blur-xl">
  <h2 className="text-xl font-semibold mb-3">Education</h2>

  <div className="space-y-3 text-white/70">

    <div>
      <p className="font-medium text-white">St. Joseph's Degree College - BCA</p>
      <p className="text-sm">2023 – 2026 | <span className='text-green-600'>Ongoing</span></p>
    </div>

    <div>
      <p className="font-medium text-white">Government City College – Commerce</p>
      <p className="text-sm">2021 – 2023 | <span className='text-green-600'>Distinction</span></p>
    </div>

  </div>
</div>
<div className="bg-white/5 border border-white/10 text-white/80 p-6 rounded-2xl backdrop-blur-xl">
  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-3">
    🎓
  </div>

  <h2 className="text-xl font-semibold mb-2">Graduation Project</h2>
  <p className="text-white/60 italic">Coming soon...</p>
</div>






    <div className="row-span-2 bg-white/5 border border-white/10 text-white p-6 rounded-2xl backdrop-blur-xl">
      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <ul className="mt-2 space-y-1 text-white/70">
        <li>⚛️ React</li>
        <li>🎨 Tailwind</li>
        <li>💻 MERN</li>
        <li>🔥 Animations</li>
      </ul>
    </div>

    <div className="bg-white/5 border border-white/10 text-white p-6 rounded-2xl backdrop-blur-xl">
      <h2 className="text-xl font-semibold mb-2">Hobbies</h2>
      <p className="text-white/70">Anime | Music | Coding</p>
    </div>

   
 <div className="col-span-2 bg-white/5 border border-white/10 text-white p-6 rounded-2xl backdrop-blur-xl">
      <h2 className="text-xl font-semibold mb-2">About Me</h2>
      <p className="text-white/70">
        I love building clean UI, animations and modern React apps.
      </p>
    </div>
  </div>
</div>

        </div>
    </section>
  )
}

export default AboutMe

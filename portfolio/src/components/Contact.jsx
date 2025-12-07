import React, { use, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')

  const serviceId = "service_hwg71bl";
  const templateId = "template_o2xvkqd";
  const publicKey = "EFmc325Y9L_px_8i8";

  const handleSubmit = (e) => { 
  e.preventDefault()

  const templateParams = {
    name: name,
    email: email,
    to_name: 'Abdul Adnan',
    message: description
  }

  emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
    console.log('Email sent successfully', response);
    setName('')
    setEmail('')
    setDescription('')
    setStatus('Email sent successfully')
  })
  .catch((err) => {
   console.log('Error sending message', err)
   setStatus('Failed! please try again later')
  })

}

  return (
    <section className='bg-gray-950 px-6 md:mx-auto' id='contact'>
      <div className=' py-10'>
        <div className='flex justify-center'>

          <h1 className='text-white text-6xl'>Contact Me</h1>
        </div>
        <p className='text-white/60 text-xl mt-4 max-w-2xl mx-auto text-center'> Got a project or want to collaborate? Send me a message and I’ll get back to you.</p>
      </div>
      <div className="bg-white/10 border border-white/20 backdrop-blur-xl p-8 rounded-2xl mt-10 max-w-xl mx-auto">

        <form ref={form} onSubmit={handleSubmit} className='py-2'>
          <div className='py-4'>
            <label htmlFor="" className='text-white text-2xl'>Name</label>
            <input
              name='name'
              type="name"
              value={name}
              className="w-full mt-2 text-white p-2 bg-white/10 border-white/20 border rounded"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />

          </div>
          <div>
            <label htmlFor="" className='text-white text-2xl'>Email</label>
            <input
              name='user_email'
              type="text"
              value={email}
              className="w-full mt-2 text-white p-2 bg-white/10 border-white/20 border rounded"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div className="text-white py-4">
            <label htmlFor="description" className="text-2xl font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="message"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              placeholder="Enter your description"
              className="w-full px-4 py-3 mt-2 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl focus:outline-none transition resize-none"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-linear-to-br from-rose-500/20 to-rose-300/10 
             border border-rose-400/20 text-white p-2 rounded 
             hover:from-rose-500/40 hover:to-rose-300/20 transition-all"
            >
              Send Email
            </button>

          </div>

        </form>
        {status && <p className="text-center text-green-600 mt-4">{status}</p>}
      </div>
    </section>
  )
}

export default Contact

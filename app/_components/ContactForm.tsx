'use client'

import { FormEvent, useState } from "react"

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const request = {
      name,
      email,
      subject,
      message
    }

    alert('work in progress' + baseUrl);
    // const response = await fetch((baseUrl +'/api/send-mail') , {
    //   method: 'POST',
    //   headers: {'Content-Type': "application/json"},
    //   body: JSON.stringify(request)
    // })

  }


  return (
    <section className="flex flex-col gap-5">
      <h3 className="text-3xl font-semibold opacity-0 animate-upFadeIn">
        Send me an Email
      </h3>
      <form 
        className="flex flex-col gap-1"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label>
          <span className=" invisible">
            Full Name
          </span>
          <input 
            type="text" 
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-4 py-2 border-s-gray-300 border-2 w-full opacity-0 animate-upFadeIn"
          />
        </label>
        
        <label>
          <span className=" invisible">
            Email
          </span>
          <input 
            type="email" 
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 border-s-gray-300 border-2 w-full opacity-0 animate-upFadeIn"
          />
        </label>
        
        <label>
          <span className=" invisible">
            Subject
          </span>
          <input 
            type="text" 
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="px-4 py-2 border-s-gray-300 border-2 w-full opacity-0 animate-upFadeIn"
          />
        </label>
        
        <label>
          <span className=" invisible">
            Message
          </span>
          <textarea 
            name="message"
            cols={30} 
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Message"
            className="px-4 py-2 border-s-gray-300 border-2 w-full opacity-0 animate-upFadeIn"
          
          >
          </textarea>
        </label>

        <button 
          className="px-10 py-3 mt-5
          bg-blue-600 hover:bg-blue-700 text-white 
          rounded opacity-0 animate-upFadeIn"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
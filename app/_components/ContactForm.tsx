export default function ContactForm() {
  return (
    <section className="flex flex-col gap-5">
      <h3 className="text-3xl font-semibold opacity-0 animate-upFadeIn">
        Send me an Email
      </h3>
      <form className="flex flex-col gap-1">
        <label>
          <span className=" invisible">
            Full Name
          </span>
          <input 
            type="text" 
            placeholder="Full Name"
            className="px-4 py-2 border-s-gray-300 border-2 w-full opacity-0 animate-upFadeIn"
          />
        </label>
        
        <label>
          <span className=" invisible">
            Email
          </span>
          <input 
            type="email" 
            placeholder="Email"
            className="px-4 py-2 border-s-gray-300 border-2 w-full opacity-0 animate-upFadeIn"
          />
        </label>
        
        <label>
          <span className=" invisible">
            Subject
          </span>
          <input 
            type="text" 
            placeholder="Subject"
            className="px-4 py-2 border-s-gray-300 border-2 w-full opacity-0 animate-upFadeIn"
          />
        </label>
        
        <label>
          <span className=" invisible">
            Body
          </span>
          <textarea 
            name="body" 
            id="body" 
            cols={30} 
            rows={4}
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
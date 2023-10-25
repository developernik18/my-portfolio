import ContactBox from "./ContactBox";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white min-h-[90vh] py-24 flex flex-col gap-10">
      <div className="container max-w-5xl mx-auto flex flex-col gap-5">
        <h2 className="text-lg text-blue-600 font-semibold">
          Contact
        </h2>
        <p className="text-3xl font-semibold">
          Feel free to reach out. I am here for you.
        </p>
      </div>
      <ContactBox />
    </section>
  )
}
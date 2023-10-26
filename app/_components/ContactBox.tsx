import Image from "next/image"
import mailImage from '../_assets/mail_image.png';
import ContactForm from "./ContactForm";

export default function ContactBox() {
  return (
    <section 
      className="container max-w-5xl mx-auto 
        bg-white shadow p-5 sm:p-10 flex gap-24 rounded items-center"
    >
      <div className="left basis-1/2 hidden lg:block">
        <Image src={mailImage} alt="decorative mail image" />
      </div>
      <div className="right basis-full lg:basis-1/2">
        <ContactForm />
      </div>
    </section>
  )
}
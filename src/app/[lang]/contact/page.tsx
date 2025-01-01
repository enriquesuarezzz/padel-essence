import { GeneralProps } from '@/interfaces/lang-props'
import { ResolvingMetadata, Metadata } from 'next'
import { getDictionary } from '../dictionaries'
import Image from 'next/image'
import { OnestText } from '@/components/atoms/onest_text'
import ContactForm from '@/components/molecules/contact_form/contact_form'

export async function generateMetadata(
  { params: { lang } }: GeneralProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const dict = await getDictionary(lang)

  return {
    title: `Padel Essence | ${dict.metadata.contact.title}`,
    description: `${dict.metadata.contact.description}`,
  }
}

export default async function ContactPage({ params: { lang } }: GeneralProps) {
  const dict = await getDictionary(lang)
  return (
    <main className="flex flex-col pt-40">
      {/* header image */}
      <Image
        src="/images/contact_header.avif"
        alt="balls in padel court"
        width={1384}
        height={420}
        className="max-h-[500px] w-full object-cover"
        unoptimized
      />
      {/* title and subtitle */}
      <div className="flex flex-col items-center justify-center text-white">
        <div className="max-w-8xl mx-auto px-4 xl:px-10">
          <div className="flex flex-col items-center justify-center pt-2 md:pt-10">
            <OnestText
              text="Contacto"
              fontSize="22px"
              style="bold"
              className="text-bold text-orange pt-6 md:pt-0"
            />
            <OnestText
              text="¿Tienes alguna consulta? Ponte en contacto con nosotros"
              fontSize="19px"
              className="text-bold pb-6 pt-2 text-center md:pb-10 md:pt-6"
            />
          </div>
          {/* contact form component */}
          <ContactForm dict={dict} />
        </div>
      </div>
    </main>
  )
}

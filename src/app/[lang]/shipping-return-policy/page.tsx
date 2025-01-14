import { GeneralProps } from '@/interfaces/lang-props'
import { ResolvingMetadata, Metadata } from 'next'
import { getDictionary } from '../dictionaries'
import { OnestText } from '@/components/atoms/onest_text'

export async function generateMetadata(
  { params: { lang } }: GeneralProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const dict = await getDictionary(lang)

  return {
    title: `Padel Essence | ${dict.metadata.shipping_return_policy.title}`,
    description: `${dict.metadata.shipping_return_policy.description}`,
  }
}

export default async function ContactPage({ params: { lang } }: GeneralProps) {
  const dict = await getDictionary(lang)
  return (
    <main className="flex flex-col items-center justify-center px-10 pb-10 pt-20 text-white md:pt-40">
      <section className="max-w-[800px]">
        <div className="flex justify-center pb-6 pt-6">
          {/* title */}
          <OnestText
            text={dict.shipping_return_policy.title}
            fontSize="32px"
            style="bold"
            className="text-white"
          />
        </div>
        {/* shipping policy */}
        <div className="flex flex-col justify-center pt-6">
          <OnestText
            text={dict.shipping_return_policy.shipping_title}
            fontSize="22px"
            style="bold"
            className="text-white"
          />
          <ul className="flex flex-col gap-2 pt-4 text-[14px] md:text-[16px]">
            <li> {dict.shipping_return_policy.shipping_list.list_1}</li>
            <li> {dict.shipping_return_policy.shipping_list.list_2}</li>
            <li> {dict.shipping_return_policy.shipping_list.list_3}</li>
            <li> {dict.shipping_return_policy.shipping_list.list_4}</li>
          </ul>
        </div>
        {/* delivery policy */}
        <div className="flex flex-col justify-center pt-6">
          <OnestText
            text={dict.shipping_return_policy.delivery_title}
            fontSize="22px"
            style="bold"
            className="text-white"
          />
          <ul className="flex flex-col gap-2 pt-4 text-[14px] md:text-[16px]">
            <li> {dict.shipping_return_policy.delivery_list.list_1}</li>
            <li> {dict.shipping_return_policy.delivery_list.list_2}</li>
            <li> {dict.shipping_return_policy.delivery_list.list_3}</li>
          </ul>
          <OnestText
            text={dict.shipping_return_policy.refund_description}
            fontSize="16px"
            className="pt-6"
          />
        </div>
        {/* return policy */}
        <div className="flex flex-col justify-center pt-6">
          <OnestText
            text={dict.shipping_return_policy.return_title}
            fontSize="22px"
            style="bold"
            className="text-white"
          />
          <ul className="flex flex-col gap-2 pt-4 text-[14px] md:text-[16px]">
            <li> {dict.shipping_return_policy.return_list.list_1}</li>
            <li> {dict.shipping_return_policy.return_list.list_2}</li>
            <li> {dict.shipping_return_policy.return_list.list_3}</li>
            <li> {dict.shipping_return_policy.return_list.list_4}</li>
          </ul>
        </div>
        {/* refunds policy */}
        <div className="flex flex-col justify-center pt-6">
          <OnestText
            text={dict.shipping_return_policy.refunds_title}
            fontSize="22px"
            style="bold"
            className="text-white"
          />
          <ul className="flex flex-col gap-2 pt-4 text-[14px] md:text-[16px]">
            <li> {dict.shipping_return_policy.refund_list.list_1}</li>
            <li> {dict.shipping_return_policy.refund_list.list_2}</li>
          </ul>
          <OnestText
            text={dict.shipping_return_policy.refund_description}
            fontSize="16px"
            className="pt-6"
          />
        </div>
      </section>
    </main>
  )
}

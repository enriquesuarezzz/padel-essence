import { Dictionary, LangOptions } from '@/app/[lang]/dictionaries'

export interface LangProps {
  dict: Dictionary
  lang?: LangOptions
}

export interface GeneralProps {
  params: {
    lang: LangOptions
    slug?: string // Optional if not all routes have a slug
  }
}

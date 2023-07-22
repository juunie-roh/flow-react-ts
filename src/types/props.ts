type ManagementItem = {
  title: string,
  href: string
}

type ProductMainBannerProps = {
  title: [string, string | null],
  sub_title: [string, string | null],
  target: string
}

type ArticleProps = {
  title: [string, string | null],
  sub_title: string,
  target: string,
  number: number
}

type LnbSubLiProps = {
  title: string,
  sub_title: [string, string | null]
  to: string,
  src: string,
}

type SecurityListLiProps = {
  target: string,
  title: string,
  sub_title: [string, string]
}

type CardLiProps = {
  number: number,
  title: string,
  sub_title: string,
  isLink: boolean,
  href: string | undefined
}

export type {
  ManagementItem,
  ProductMainBannerProps,
  ArticleProps,
  LnbSubLiProps,
  SecurityListLiProps,
  CardLiProps
}
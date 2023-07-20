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

export type {
  ManagementItem,
  ProductMainBannerProps,
  ArticleProps,
  LnbSubLiProps
}
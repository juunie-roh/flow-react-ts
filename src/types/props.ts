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

export type {
  ManagementItem,
  ProductMainBannerProps,
  ArticleProps
}
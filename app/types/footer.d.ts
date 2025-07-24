interface IContactLinks {
  item: {
    target: string
    title: string
    url: string
  }
}

export interface FooterProps {
  footerTitle: string
  contactLinks: IContactLinks[]
}
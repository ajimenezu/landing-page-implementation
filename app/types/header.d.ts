export interface IMenuItems {
  item: {
    target: string
    title: string
    url: string
  }
}

export interface HeaderProps {
  companyName: string
  menuItems: IMenuItems[]
}
export type MenuItem = {
    id: string
    label: string
    path: string
}

export const menuItems: MenuItem[] = [
    {id: 'home', label: 'Home', path:'/'},
    {id: 'amulets', label: 'Amulets', path: '/amulets'},
    {id: 'about', label: 'About', path: '/about'}
]
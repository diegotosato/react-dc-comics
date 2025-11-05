export default function NavBar() {

    const navLinks = [
        { id: 1, href: '#', title: 'characters' },
        { id: 2, href: '#', title: 'comics' },
        { id: 3, href: '#', title: 'movies' },
        { id: 4, href: '#', title: 'tv' },
        { id: 5, href: '#', title: 'games' },
        { id: 6, href: '#', title: 'collectibles' },
        { id: 7, href: '#', title: 'videos' },
        { id: 8, href: '#', title: 'fans' },
        { id: 9, href: '#', title: 'news' },
        { id: 10, href: '#', title: 'shop' }
    ]



    return (
        <>
            <nav className="nav justify-content-center">
                {
                    navLinks.map(item => (
                        <a key={item.id} className="nav-link mx-3" href={item.href}>{item.title}</a>
                    ))
                }
            </nav>
        </>
    )
}
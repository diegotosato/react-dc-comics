export default function FooterList() {

    const footerLinks = [
        {
            id: 1,
            title: 'dc comics',
            links: [
                {
                    id: 1,
                    href: '#',
                    text: 'characters'
                },
                {
                    id: 2,
                    href: '#',
                    text: 'comics'
                },
                {
                    id: 3,
                    href: '#',
                    text: 'movies'
                },
                {
                    id: 4,
                    href: '#',
                    text: 'tv'
                },
                {
                    id: 5,
                    href: '#',
                    text: 'games'
                },
                {
                    id: 6,
                    href: '#',
                    text: 'videos'
                },
                {
                    id: 7,
                    href: '#',
                    text: 'news'
                }
            ]
        },
        {
            id: 2,
            title: 'dc',
            links: [
                {
                    id: 1,
                    href: '#',
                    text: 'terms of use'
                },
                {
                    id: 2,
                    href: '#',
                    text: 'privacy policy (new)'
                },
                {
                    id: 3,
                    href: '#',
                    text: 'ad choices'
                },
                {
                    id: 4,
                    href: '#',
                    text: 'advertising'
                },
                {
                    id: 5,
                    href: '#',
                    text: 'jobs'
                },
                {
                    id: 6,
                    href: '#',
                    text: 'subscriptions'
                },
                {
                    id: 7,
                    href: '#',
                    text: 'talent workshops'
                },
                {
                    id: 8,
                    href: '#',
                    text: 'CPSC certificates'
                },
                {
                    id: 9,
                    href: '#',
                    text: 'ratings'
                },
                {
                    id: 10,
                    href: '#',
                    text: 'shop help'
                },
                {
                    id: 11,
                    href: '#',
                    text: 'contact us'
                }
            ]
        },
        {
            id: 3,
            title: 'sites',
            links: [
                {
                    id: 1,
                    href: '#',
                    text: 'dc'
                },
                {
                    id: 2,
                    href: '#',
                    text: 'MAD magazine'
                },
                {
                    id: 3,
                    href: '#',
                    text: 'DC kids'
                },
                {
                    id: 4,
                    href: '#',
                    text: 'DC universe'
                },
                {
                    id: 5,
                    href: '#',
                    text: 'DC Power Visa'
                }
            ]
        },
        {
            id: 4,
            title: 'shop',
            links: [
                {
                    id: 1,
                    href: '#',
                    text: 'shop dc'
                },
                {
                    id: 2,
                    href: '#',
                    text: 'shop dc collectables'
                }
            ]
        },
    ]




    return (
        <>
            <div className="contacts">
                {footerLinks.map(link => (
                    <ul key={link.id}>
                        <h5>{link.title}</h5>
                        {link.links.map(link => (

                            <li key={link.id}>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                ))}

            </div>
        </>
    )
}
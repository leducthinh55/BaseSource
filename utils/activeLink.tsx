import { useRouter } from 'next/router'

function ActiveLink({ children, href }: any) {
    const router = useRouter()
    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick}>
            {children}
        </a>
    )
}

export default ActiveLink
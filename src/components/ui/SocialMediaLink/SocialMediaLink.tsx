import React from 'react'
import s from './social.module.scss'

type LinkProps = {
    icon: React.ReactNode,
    href: string
}

const SocialMediaLink: React.FC<LinkProps> = ({icon, href}) => {
    return <a className={s.link} href={href}>{icon}</a>
}

export default SocialMediaLink
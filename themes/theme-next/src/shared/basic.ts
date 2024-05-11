// image ---------------------------------------------------------------------

export type DefaultThemeImage =
  | string
  | { src: string; alt?: string; [prop: string]: any }
  | { light: string; dark: string; alt?: string; [prop: string]: any }

export type FeatureIcon =
  | string
  | {
      src: string
      alt?: string
      width?: string
      height?: string
      wrap?: boolean
    }
  | {
      light: string
      dark: string
      alt?: string
      width?: string
      height?: string
      wrap?: boolean
    }

// home ---------------------------------------------------------------------

export interface HeroAction {
  theme?: 'brand' | 'alt'
  text: string
  link: string
  target?: string
  rel?: string
}

export interface Feature {
  icon?: FeatureIcon
  title: string
  details: string
  link?: string
  linkText?: string
  rel?: string
  target?: string
}

// social link ---------------------------------------------------------------

export interface SocialLink {
  icon: SocialLinkIcon
  link: string
  ariaLabel?: string
}

export type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'mastodon'
  | 'npm'
  | 'slack'
  | 'twitter'
  | 'x'
  | 'youtube'
  | { svg: string }

// sponsor -------------------------------------------------------------------

export interface Sponsor {
  name: string
  img: string
  url: string
}

export interface Sponsors {
  tier?: string
  size?: 'xmini' | 'mini' | 'small' | 'medium' | 'big'
  items: Sponsor[]
}

// team ----------------------------------------------------------------------

export interface TeamMember {
  avatar: string
  name: string
  title?: string
  org?: string
  orgLink?: string
  desc?: string
  links?: SocialLink[]
  sponsor?: string
  actionText?: string
}

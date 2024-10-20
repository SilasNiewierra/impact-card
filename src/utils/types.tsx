export interface Reward {
  id: string;
  iconSrc: string;
  title: string;
  description: string;
  detailsUrl: string;
}

export interface Impact {
  iconSrc: string;
  metric: string;
  text: string;
}

export interface Sponsor {
  name: string;
  logoSrc: string;
  summary: string;
  detailsUrl: string;
}

export interface AudienceOwner {
  name: string;
  logoSrc: string;
  summary: string;
  detailsUrl: string;
}

export interface Proof {
  id: string;
  logoSrc: string;
  title: string;
  commitment: string;
  detailsUrl: string;
}

export interface CardProps {
  id: string;
  title: string;
  backgroundImageSrc: string;
  color: string;
  rewards: Reward[];
  impact: Impact;
  totalImpact: Impact;
  cardNumber: number;
  totalCollectionCount: number;
  sponsor: Sponsor;
  audienceOwner: AudienceOwner;
  proofs: Proof[];
}

export interface Rarity {
  value: string;
  label: string;
  cssClassName: string;
}

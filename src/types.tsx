export interface Reward {
  iconSrc: string;
  title: string;
  description: string;
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
}

export interface AudienceOwner {
  name: string;
  logoSrc: string;
  summary: string;
}

export interface Proof {
  logoSrc: string;
  title: string;
  commitment: string;
}

export interface Card {
  title: string;
  backgroundImageSrc: string;
  color?: string;
  rewards: Reward[];
  impact: Impact;
  totalImpact: Impact;
  linkToProjectDetails: string;
  count: number;
  totalCount: number;
  sponsor: Sponsor;
  audienceOwner: AudienceOwner;
  proofs: Proof[];
  flip?: () => void;
}

export interface PhotoSingle {
  alt_description: string;
  blur_hash: string;
  breadcrumbs: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  height: number;
  width: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: {
    self: string;
    download: string;
    download_location: string;
    html: string;
  };
  promoted_at: string;
  slug: string;
  sponsorship: {
    impression_urls: [];
    tagline: string;
    tagline_url: string;
    sponsor: object;
  };
  topic_submissions: object;
  updated_at: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  user: object;
  views: number;
  downloads: number;
}

export interface Error {
  code: number;
  message: string;
  name: string;
}

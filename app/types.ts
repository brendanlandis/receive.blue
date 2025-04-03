import { type BlocksContent } from '@strapi/blocks-react-renderer';

export interface RawShowData {
  id: number;
  attributes: {
    date: string;
    cancelled: boolean;
    myBand: Array<{
      id: number;
      displayBandname: string;
      band: {
        data: {
          id: number;
          attributes: {
            bandname: string;
          };
        };
      };
    }>;
    doors: string;
    sound: string;
    venue: string;
    city: string;
    notes: string;
    otherBands: string;
    eventLinks: Array<{
      id: number;
      url: string;
      text: string;
    }>;
    flyers: {
      data: Array<{
        id: number;
        attributes: {
          alternativeText: string;
          url: string;
          formats: {
            medium: {
              url: string;
            };
          };
        };
      }>;
    };
    documentation: Array<{
      id: number;
      usable: boolean;
      credit: string;
      media: {
        data: {
          id: number;
          attributes: {
            alternativeText: string;
            mime: string;
            url: string;
            formats: {
              medium: {
                url: string;
              };
            };
          };
        };
      };
    }>;
  };
}

export interface Show {
  id: number;
  bands: Array<{
    id: number;
    bandname: string;
    displayBandname: string;
  }>;
  date: string;
  shortMonth: string;
  shortDay: string;
  shortDate: string;
  cancelled: boolean;
  doors: string;
  sound: string;
  venue: string;
  city: string;
  notes: string;
  otherBands: string;
  eventLinks: Array<{
    id: number;
    url: string;
    text: string;
  }>;
  flyers: Array<{
    id: number;
    alt: string;
    urlLarge: string;
    urlSmall: string;
  }>;
  documentation: Array<{
    id: number;
    usable: boolean;
    credit: string;
    alt: string;
    mime: string;
    urlLarge: string;
    urlSmall: string;
  }>;
}

export interface RawPostData {
  id: number;
  date: string;
  headline: string;
  text: BlocksContent;
  band: {
    id: number;
    name: string;
  };
}

interface ImageFormat {
  ext: string;
  url: string;
  mime: string;
  width: number;
  height: number;
  size: number;
}

export interface Post {
  id: number;
  date: string;
  realDate: string;
  headline: string;
  text: BlocksContent;
}

export interface RawTabData {
  id: number;
  attributes: {
    createdAt: string;
    url: string;
    linkText: string;
    description: string;
    bands: {
      data: Array<{
        id: number;
        attributes: {
          bandname: string;
        };
      }>;
    };
  };
}

export interface Tab {
  id: number;
  date: string;
  url: string;
  linkText: string;
  description: string;
}

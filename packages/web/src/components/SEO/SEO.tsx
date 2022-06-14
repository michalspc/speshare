import Head from 'next/head';
// import metaImg from '@app/assets/images/meta.jpg';

export interface SEOProps {
  description?: string;
  image?: string;
  noIndex?: boolean;
  title?: string;
  titleSuffix?: string;
}

export const SEO: React.FC<SEOProps> = ({
  description,
  // image = metaImg.src,
  noIndex = false,
  title,
  titleSuffix = ' | Space cartels',
}) => (
  <Head>
    <title>{title ? `${title}${titleSuffix}` : 'Space cartels'}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {/* <meta property="og:image" content={image} /> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {/* <meta name="twitter:image" content={image} /> */}
    {noIndex && <meta name="robots" content="noindex" />}
  </Head>
);

// @ts-ignore
import { Helmet } from 'react-helmet';

// @ts-ignore
function HeadComponent({ title, description, canonical }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            {/* Additional meta tags */}
        </Helmet>
    );
}

export default HeadComponent;
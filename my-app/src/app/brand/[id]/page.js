import ExpandableSection from '../../../components/ExpandableSection';

export default async function BrandPage({ params }) {
    const unwrapped = await params;
    const { id } = unwrapped;

    // mock data
    const brandData = {
    1: {
        id: '1',
        name: 'brand1',
        labour: 'labour prctices are BAD!',
        environment: 'environmental practices are BAD!',
    },
    2: {
        id: '2',
        name: 'brand2',
        labour: 'labour prctices are mid.',
        environment: 'environmental practices are mid.',
    },
    3: {
        id: '3',
        name: 'brand3',
        labour: 'labour prctices are AWESOME!',
        environment: 'environmental practices are AWESOME!',
    }
    };

    const brand = brandData[id] || {
    id: '-1',
    name: 'Unknown Brand',
    labour: 'No data found.',
    environment: 'No data found.'
    };

    return (
    <div style={{ padding: 20 }}>
        <h1>{brand.name}</h1>

        <ExpandableSection title="Labour Practices">
        <p>{brand.labour}</p>
        </ExpandableSection>

        <ExpandableSection title="Environmental Practices">
        <p>{brand.environment}</p>
        </ExpandableSection>
    </div>
  );
}

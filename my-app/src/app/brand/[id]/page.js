import ExpandableSection from '../../../components/ExpandableSection';
import brandData from "@/app/data/brandresearch.json";

export default async function BrandPage({ params }) {
    const unwrapped = await params;
    const { id } = unwrapped;
    const numericId = Number(id);

    const brand = brandData.brands.find(b => b.id === numericId);

    if (!brand) {
        return (
        <div style={{ padding: 20 }}>
            <h1>Unknown Brand</h1>
            <p>No data found.</p>
        </div>
        );
    }

    // Labor subsets
    const laborRatings = {
        "Child Labor": brand.ratings["Child Labor"],
        "Forced Labor": brand.ratings["Forced Labor"],
        "Working Conditions": brand.ratings["Working Conditions"],
        "Fair Wages": brand.ratings["Fair Wages"],
        "Other Labor": brand.ratings["Other Labor"]
    };
    // Environment subsets
    const environmentalRatings = {
        "Waste Management": brand.ratings["Waste Management"],
        "Carbon Emissions": brand.ratings["Carbon Emissions"],
        "Material Composition": brand.ratings["Material Composition"],
        "Other Environmental": brand.ratings["Other Environmental"]
    };

    return (
        <div style={{ padding: 20 }}>
            <button
            className="mb-4 p-2 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </a>
            </button>

            <h1>{brand.name}</h1>
        
            <ExpandableSection
                title="Labor Practices"
                score={brand.ratings["Labor Score"]}
                ratings={laborRatings}
                details={brand.details.Labor}
                rubric={brandData.scoring_rubric}
            />


            <ExpandableSection
                title="Environmental Practices"
                score={brand.ratings["Environmental Score"]}
                ratings={environmentalRatings}
                details={brand.details.Environment}
                rubric={brandData.scoring_rubric}
            />
        </div>
    );
}

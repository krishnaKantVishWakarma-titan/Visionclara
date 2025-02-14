import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import termsData from "../Data/Terms.json";

interface DefinitionItem {
  term: string;
  definition: string;
}

interface ContactDetails {
  email: string;
  phone: string;
  address: string;
}

interface BaseSection {
  title: string;
}

interface ItemsSection extends BaseSection {
  items: (string | DefinitionItem)[];
}

interface ContentSection extends BaseSection {
  content: string;
}

interface ContactSection extends BaseSection {
  content: string;
  details: ContactDetails;
}

type Section = ItemsSection | ContentSection | ContactSection;

interface TermsData {
  title: string;
  metadata: {
    lastUpdated: string;
    companyName: string;
  };
  introduction: {
    content: string;
  };
  sections: {
    [key: string]: Section;
  };
}

export function Terms() {
  const terms = termsData as TermsData;

  return (
    <div>
      <Header />
      
      {/* Terms and Conditions Content */}
      <div className="max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl">
          {/* Main Title */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold md:text-4xl dark:text-white">{terms.title}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last Updated: {terms.metadata.lastUpdated}
              </p>
            </div>

            {/* Introduction */}
            <div className="space-y-3">
              <p className="text-lg text-gray-800 dark:text-neutral-200">
                {terms.introduction.content}
              </p>
            </div>

            {/* All Sections */}
            {Object.entries(terms.sections).map(([key, section]) => (
              <div key={key} className="space-y-3">
                <h2 className="text-2xl font-bold dark:text-white">
                  {section.title}
                </h2>

                {/* For sections with items array */}
                {'items' in section && Array.isArray(section.items) && (
                  <div className="space-y-3">
                    {section.items.map((item, index) => (
                      <div key={index}>
                        {typeof item === 'string' ? (
                          <p className="text-lg text-gray-800 dark:text-neutral-200">
                            {item}
                          </p>
                        ) : (
                          // For definition items (like in the definitions section)
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold dark:text-white">
                              {item.term}
                            </h3>
                            <p className="text-lg text-gray-800 dark:text-neutral-200">
                              {item.definition}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* For sections with content */}
                {'content' in section && (
                  <p className="text-lg text-gray-800 dark:text-neutral-200">
                    {section.content}
                  </p>
                )}

                {/* For sections with details (like contact information) */}
                {'details' in section && (
                  <div className="space-y-2">
                    {Object.entries(section.details).map(([detailKey, value]) => (
                      <p key={detailKey} className="text-lg text-gray-800 dark:text-neutral-200">
                        <span className="font-semibold">
                          {detailKey.charAt(0).toUpperCase() + detailKey.slice(1)}
                        </span>: {value}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
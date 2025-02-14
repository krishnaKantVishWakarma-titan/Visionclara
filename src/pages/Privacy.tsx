import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import privacyData from "../Data/Privacy.json";

interface BaseSection {
  title: string;
}

interface SimpleItemsSection extends BaseSection {
  items: string[];
}

interface ComplexItem {
  title: string;
  description: string;
}

interface ComplexItemsSection extends BaseSection {
  content: string;
  items: ComplexItem[];
}

interface ContentSection extends BaseSection {
  content: string;
}

interface ContentWithItemsSection extends BaseSection {
  content: string;
  items: string[];
  contactInfo?: string;
}

interface SubsectionsSection extends BaseSection {
  subsections: {
    [key: string]: {
      title: string;
      content: string;
      items: string[];
    };
  };
}

interface ContactSection extends BaseSection {
  content: string;
  companyInfo: {
    name: string;
    address: string;
    email: string;
    phone: string;
  };
}

type Section = SimpleItemsSection | ComplexItemsSection | ContentSection | ContentWithItemsSection | SubsectionsSection | ContactSection;

interface PrivacyData {
  title: string;
  metadata: {
    effectiveDate: string;
    lastUpdated: string;
  };
  sections: {
    introduction: ContentSection;
    informationWeCollect: SubsectionsSection;
    howWeUseInformation: SimpleItemsSection;
    howWeShareInformation: ComplexItemsSection;
    dataSecurity: ContentSection;
    cookiesAndTracking: ContentSection;
    thirdPartyLinks: ContentSection;
    yourRightsAndChoices: ContentWithItemsSection;
    childrensPrivacy: ContentSection;
    changes: ContentSection;
    contactUs: ContactSection;
  };
}

export function Privacy() {
  const privacy = privacyData as PrivacyData;

  const isComplexItemsSection = (section: Section): section is ComplexItemsSection => {
    return 'items' in section && Array.isArray(section.items) && 
           section.items.length > 0 && typeof section.items[0] === 'object' &&
           'title' in section.items[0] && 'description' in section.items[0];
  };

  const isSimpleItemsSection = (section: Section): section is SimpleItemsSection | ContentWithItemsSection => {
    return 'items' in section && Array.isArray(section.items) && 
           section.items.length > 0 && typeof section.items[0] === 'string';
  };

  const isContactSection = (section: Section): section is ContactSection => {
    return 'companyInfo' in section;
  };

  return (
    <div>
      <Header />
      
      {/* Privacy Policy Content */}
      <div className="max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl">
          {/* Main Title */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold md:text-4xl dark:text-white">{privacy.title}</h1>
              <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <p>Effective Date: {privacy.metadata.effectiveDate}</p>
                <p>Last Updated: {privacy.metadata.lastUpdated}</p>
              </div>
            </div>

            {/* All Sections */}
            {Object.entries(privacy.sections).map(([key, section]) => (
              <div key={key} className="space-y-3">
                <h2 className="text-2xl font-bold dark:text-white">
                  {section.title}
                </h2>

                {/* For sections with content */}
                {'content' in section && (
                  <p className="text-lg text-gray-800 dark:text-neutral-200">
                    {section.content}
                  </p>
                )}

                {/* For sections with simple items */}
                {isSimpleItemsSection(section) && !('subsections' in section) && (
                  <div className="space-y-2">
                    {section.items.map((item, index) => (
                      <p key={index} className="text-lg text-gray-800 dark:text-neutral-200 pl-4">
                        • {item}
                      </p>
                    ))}
                  </div>
                )}

                {/* For sections with complex items (title and description) */}
                {isComplexItemsSection(section) && (
                  <div className="space-y-4">
                    {section.items.map((item, index) => (
                      <div key={index} className="space-y-1">
                        <h3 className="text-xl font-semibold dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-lg text-gray-800 dark:text-neutral-200 pl-4">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* For sections with subsections */}
                {'subsections' in section && (
                  <div className="space-y-6">
                    {Object.entries(section.subsections).map(([subKey, subsection]) => (
                      <div key={subKey} className="space-y-3">
                        <h3 className="text-xl font-semibold dark:text-white">
                          {subsection.title}
                        </h3>
                        <p className="text-lg text-gray-800 dark:text-neutral-200">
                          {subsection.content}
                        </p>
                        {subsection.items && (
                          <div className="space-y-2">
                            {subsection.items.map((item, index) => (
                              <p key={index} className="text-lg text-gray-800 dark:text-neutral-200 pl-4">
                                • {item}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* For contact section with company info */}
                {isContactSection(section) && (
                  <div className="space-y-2">
                    <p className="text-lg text-gray-800 dark:text-neutral-200">{section.content}</p>
                    <div className="space-y-1 mt-4">
                      <p className="text-lg font-semibold dark:text-white">{section.companyInfo.name}</p>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">{section.companyInfo.address}</p>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">Email: {section.companyInfo.email}</p>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">Phone: {section.companyInfo.phone}</p>
                    </div>
                  </div>
                )}

                {/* For sections with additional contact info */}
                {'contactInfo' in section && (
                  <p className="text-lg text-gray-800 dark:text-neutral-200 mt-2">
                    {String(section.contactInfo)}
                  </p>
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
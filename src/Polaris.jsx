import {LegacyCard, Tabs,Page} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import About from './About';
import Contact from './Contact';
import Service from './Service';


 function Polaris() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'all-customers-1',
      content: 'Configration API',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-1',
    },
    {
      id: 'accepts-marketing-1',
      content: 'Student Datalist',
      panelID: 'accepts-marketing-content-1',
    },
    {
      id: 'repeat-customers-1',
      content: 'Data',
      panelID: 'repeat-customers-content-1',
    },
   
  ];

  return (
    <>
    <div className="polaris_design">
      
        <Page>
        <h1>Products</h1>
        <div className="Polaris-Card">
    <LegacyCard>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <LegacyCard.Section>
           {selected == 0 ? <About/> : ""} 
           {selected == 1 ? <Contact /> : ""} 
           {selected == 2 ? <Service/> : ""} 
        </LegacyCard.Section>
      </Tabs>
     
      
    </LegacyCard>
    </div>
    </Page>
    </div>
    </>
  );
}

export default Polaris;
import * as React from 'react';
import { Box, Typography, Tab, Tabs } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box sx={{ maxWidth: 'lg' }}>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab sx={{ alignItems: 'baseline !important' }} label="Digital Turbine" {...a11yProps(0)} />
        <Tab sx={{ alignItems: 'baseline !important' }} label="Booz Allen Hamilton" {...a11yProps(1)} />
        <Tab sx={{ alignItems: 'baseline !important' }} label="The American Chemical Society" {...a11yProps(2)} />
        <Tab sx={{ alignItems: 'baseline !important' }} label="Sensei Enterprises" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="h3">
            Data Engineer at <a href="https://www.digitalturbine.com/" target={'_blank'}>Digital Turbine</a>
        </Typography>
        <Typography variant="subtitle1">
            <time dateTime="2020-03">March 2020</time> - Present
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Tasked with managing all Google Analytics 360 properties and Google Tag Manager integrations (i.e. custom
              events etc) for all telecommunication partners.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Optimized data flows for Google Analytics into BigQuery which includes standardizations on data collection
              and implementing best practices for developing teams to integrate with GA and GTM.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Tasked with writing python and javascript scripts for analytic optimizations which include APIs such as
              Selenium, Google Tag Manager, Google Analytics Reporting/Admin, and more. Specifically, I'm currently
              utilizing GTM and GA4 APIs to build out analytic environments programmatically rather than the UI; this
              would allow for the creation of multiple analytic envs across various partner/clients with only a config
              file.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Currently leading efforts on GA4 migrations which will include setting up and designing data workflows in
              GTM that are in line with GA4 requirements. I've also created independent environments within Google Tag
              Manager, GA4, and Firebase to distinguish test users from live users. Moreover, during this migration, I'm
              tasked with optimizing GA data collection into Big Query by auditing data as it comes in during
              intraday/daily. This optimization will effectively clean up our GA data in our data warehouse which is
              used by our product/sales teams. This is an ongoing project that will effectively migrate all
              telecommunication partners from GA3 to GA4.
            </Typography>
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h3">
            Lead Web Analyst Associate at <a href="https://www.bah.com/" target={'_blank'}>Booz Allen Hamilton</a>
        </Typography>
        <Typography variant="subtitle1">
            <time dateTime="2015-05">May 2015</time> - <time dateTime="2020-03">March 2020</time>
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Conduct metrics data analysis and implement analytics reports on a ad-hoc, monthly and quarterly basis
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Advise client on current trends and best practices in metrics analysis, tools and techniques
            </Typography>
          </li>
          <li>
            <Typography variant="body2">Setup and implement metrics data dashboards using BI tools</Typography>
          </li>
          <li>
            <Typography variant="body2">
              Conduct multivariate testing and provide data analysis across different sites
            </Typography>
          </li>
          <li>
            <Typography variant="body2">Ensure 100% accuracy of analytics tagging across various websites</Typography>
          </li>
          <li>
            <Typography variant="body2">
              Setup and implement automated reports with metrics information from different data sources
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Implement steps to migrate website properties from Google Analytics to Universal Analytics
            </Typography>
          </li>
          <li>
            <Typography variant="body2">Provide recommendations for website improvements</Typography>
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h3">
            Web Analyst Associate at <a href="https://www.acs.org/" target={'_blank'}>The American Chemical Society</a>
        </Typography>
        <Typography variant="subtitle1">
            <time dateTime="2010-12">December 2012</time> - <time dateTime="2015-05">May 2015</time>
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Support the day-to-day operations and administration of the ACS Web Stats System, including ensuring the
              system functions as expected for sales, marketing and support teams. Support Sales Analysis and Support
              team with customer report issue triage and escalate technical problems to IT when necessary.
            </Typography>{' '}
          </li>
          <li>
            <Typography variant="body2">
              Support the Assistant Director, Platform Advertising and Analytics, with scheduled and ad hoc report
              generation, including the monthly Sales and Marketing Web Usage Report, Annual Web Usage Report and
              necessary data for editorial board meetings.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Create and maintain advertising reports for the ACS Web Editions platform and CEN as well as advertising
              reports for ACS managed web ads on external websites (Google Search, YouTube, etc.). Perform ad hoc
              advertising reporting queries as needed. Support the Market Development Manager, Online Advertising with
              forecasting and enhanced ad server reporting as needed.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Test and validate web analytics and reports with each new deployment, product release and/or enhancement
              in each of the reporting systems, including Literatum, Web Analytics, Google Analytics and Dart for
              Publishers (DFP).
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Develop new standard monthly internal reports as necessary, based on feedback from stakeholders within the
              Publications Division.
            </Typography>
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h3">
            Marketing Director at <a href="https://www.senseient.com/" target={'_blank'}>Sensei Enterprises</a>
        </Typography>
        <Typography variant="subtitle1">
            <time dateTime="2010">2010</time>
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Provided day-to-day maintenance, customization and enhancement of Sensei’s website.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">Initiated the re-development of Sensei’s marketing strategy.</Typography>
          </li>
          <li>
            <Typography variant="body2">
              Re-designed marketing portfolio and created advertisements for newspapers and magazine publications.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Implemented social media communications into Sensei’s marketing plan and managed social media properties,
              including daily monitoring, posting, and content development.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Developed HTML marketing e-mail blasts for Sensei’s monthly newsletter “Bytes in Brief.”
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Developed keywords lists, created landing pages and managed PPC advertising campaigns for Sensei and
              Sensei’s clients.
            </Typography>
          </li>
        </ul>
      </TabPanel>
    </Box>
  );
}

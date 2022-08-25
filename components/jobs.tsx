import * as React from 'react';
import { Box, Typography, Tab, Tabs, Container, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function Job() {
  const IsNotMobile = useMediaQuery('(min-width:900px)');
  const [value, setValue] = React.useState(0);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    setIsDesktop(IsNotMobile);
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    if (isDesktop) {
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...other}
        >
          {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
      );
    } else {
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
      );
    }
  }

  function a11yProps(index: number) {
    if (isDesktop) {
      return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
      };
    } else {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
  }

  return (
    <Container sx={{ padding: '100px 0 ' }}>
      <section id="#Experience">
        <Typography variant="h2">Where I've worked</Typography>

        {isDesktop ? (
          <Box sx={{ height: '450px' }}>
            <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', minWidth: '175px', height: '165px' }}
              >
                <Tab label="Digital Turbine" {...a11yProps(0)} />
                <Tab label="Booz Allen Hamilton" {...a11yProps(1)} />
                <Tab label="The American Chemical Society" {...a11yProps(2)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Typography variant="h6" component="h3">
                  Data Engineer at{' '}
                  <Link href="https://www.digitalturbine.com/" target={'_blank'}>
                    Digital Turbine
                  </Link>
                </Typography>
                <Typography variant="subtitle2">
                  <time dateTime="2020-03">March 2020</time> - Present
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body2">
                      Tasked with managing Google Analytics 360 & Google Tag Manager integrations for all partners which
                      include optimzations to data flows for BQ ingestion.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Currently utilizing GTM and GA4 APIs to build out analytic environments programmatically at scale;
                      this would allow for the creation of multiple analytic and tagging environments with only a config
                      file.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Currently leading efforts on GA4 migrations which will include setting up and designing data
                      workflows in GTM that are in line with GA4 requirements. Moreover, I'm tasked with optimizing GA
                      data collection into Big Query by auditing data as it comes in during intraday/daily.
                    </Typography>
                  </li>
                </ul>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography variant="h6" component="h3">
                  Lead Web Analyst at{' '}
                  <Link href="https://www.bah.com/" target={'_blank'}>
                    Booz Allen Hamilton
                  </Link>
                </Typography>
                <Typography variant="subtitle1">
                  <time dateTime="2015-05">May 2015</time> - <time dateTime="2020-03">March 2020</time>
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body2">
                      Conduct metrics data analysis and implement analytics reports on a ad-hoc, monthly and quarterly
                      basis while also providing recommendations for website improvements.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Ensure 100% accuracy of analytics tagging across various websites
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Setup and implement automated reports with metrics from different data sources
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Implement steps to migrate website properties from Google Analytics Legacy to GA3.
                    </Typography>
                  </li>
                </ul>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography variant="h6" component="h3">
                  Web Analyst at{' '}
                  <Link href="https://www.acs.org/" target={'_blank'}>
                    American Chemical Society
                  </Link>
                </Typography>
                <Typography variant="subtitle1">
                  <time dateTime="2010-12">December 2012</time> - <time dateTime="2015-05">May 2015</time>
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body2">
                      Support the Assistant Director, Platform Advertising and Analytics, with scheduled and ad hoc
                      report generation, including the monthly Sales and Marketing Web Usage Report, Annual Web Usage
                      Report and necessary data for editorial board meetings.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Create and maintain advertising reports for the ACS Web Editions platform and CEN as well as
                      advertising reports for ACS managed web ads on external websites. Perform ad-hoc advertising
                      reporting queries as needed. Support the Market Development Manager, Online Advertising with
                      forecasting and enhanced ad server reporting as needed.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Test and validate web analytics and reports with each new deployment, product release and/or
                      enhancement in each of the reporting systems, including Literatum, Web Analytics, Google Analytics
                      and Dart for Publishers (DFP).
                    </Typography>
                  </li>
                </ul>
              </TabPanel>
            </Box>
          </Box>
        ) : (
          <Box sx={{ width: '100%', minHeight: '625px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs variant="scrollable" value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <Tab label="Digital Turbine" {...a11yProps(0)} />
                <Tab label="Booz Allen Hamilton" {...a11yProps(1)} />
                <Tab label="The American Chemical Society" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography variant="h6" component="h3">
                Data Engineer at{' '}
                <Link href="https://www.digitalturbine.com/" target={'_blank'}>
                  Digital Turbine
                </Link>
              </Typography>
              <Typography variant="subtitle2">
                <time dateTime="2020-03">March 2020</time> - Present
              </Typography>
              <ul>
                <li>
                  <Typography variant="body2">
                    Tasked with managing Google Analytics 360 & Google Tag Manager integrations for all partners which
                    include optimzations to data flows for BQ ingestion.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Currently utilizing GTM and GA4 APIs to build out analytic environments programmatically at scale;
                    this would allow for the creation of multiple analytic and tagging environments with only a config
                    file.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Currently leading efforts on GA4 migrations which will include setting up and designing data
                    workflows in GTM that are in line with GA4 requirements. Moreover, I'm tasked with optimizing GA
                    data collection into Big Query by auditing data as it comes in during intraday/daily.
                  </Typography>
                </li>
              </ul>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography variant="h6" component="h3">
                Lead Web Analyst at{' '}
                <Link href="https://www.bah.com/" target={'_blank'}>
                  Booz Allen Hamilton
                </Link>
              </Typography>
              <Typography variant="subtitle1">
                <time dateTime="2015-05">May 2015</time> - <time dateTime="2020-03">March 2020</time>
              </Typography>
              <ul>
                <li>
                  <Typography variant="body2">
                    Conduct metrics data analysis and implement analytics reports on a ad-hoc, monthly and quarterly
                    basis while also providing recommendations for website improvements.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Ensure 100% accuracy of analytics tagging across various websites
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Setup and implement automated reports with metrics from different data sources
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Implement steps to migrate website properties from Google Analytics Legacy to GA3.
                  </Typography>
                </li>
              </ul>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography variant="h6" component="h3">
                Web Analyst at{' '}
                <Link href="https://www.acs.org/" target={'_blank'}>
                  American Chemical Society
                </Link>
              </Typography>
              <Typography variant="subtitle1">
                <time dateTime="2010-12">December 2012</time> - <time dateTime="2015-05">May 2015</time>
              </Typography>
              <ul>
                <li>
                  <Typography variant="body2">
                    Support the Assistant Director, Platform Advertising and Analytics, with scheduled and ad hoc report
                    generation, including the monthly Sales and Marketing Web Usage Report, Annual Web Usage Report and
                    necessary data for editorial board meetings.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Create and maintain advertising reports for the ACS Web Editions platform and CEN as well as
                    advertising reports for ACS managed web ads on external websites. Perform ad-hoc advertising
                    reporting queries as needed. Support the Market Development Manager, Online Advertising with
                    forecasting and enhanced ad server reporting as needed.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Test and validate web analytics and reports with each new deployment, product release and/or
                    enhancement in each of the reporting systems, including Literatum, Web Analytics, Google Analytics
                    and Dart for Publishers (DFP).
                  </Typography>
                </li>
              </ul>
            </TabPanel>
          </Box>
        )}
      </section>
    </Container>
  );
}

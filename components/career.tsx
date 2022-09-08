import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';

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
  }, [IsNotMobile]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const sendDataToGTM = useGTMDispatch()
  const handleTabClick = (e) => sendDataToGTM({ event: 'click_internal', element: 'link', detail: e, category: 'tab', section: 'where_ive_worked' })

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
      <section id="Experience">
        <Divider textAlign="left">
          <Typography variant="h4" component="h2" className="countContent">
            Where I've Worked
          </Typography>
        </Divider>

        {isDesktop ? (
          <Box sx={{ height: '450px' }} paddingTop={4}>
            <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', minWidth: '175px', height: '165px' }}
              >
                <Tab onClick={()=>handleTabClick('dt')} label="Digital Turbine" {...a11yProps(0)} />
                <Tab onClick={()=>handleTabClick('bah')} label="Booz Allen Hamilton" {...a11yProps(1)} />
                <Tab onClick={()=>handleTabClick('acs')} label="The American Chemical Society" {...a11yProps(2)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Typography variant="h4" component="h3">
                  Data Engineer at{' '}
                  <Link href="https://www.digitalturbine.com/" target={'_blank'} rel="noreferrer">
                    Digital Turbine
                  </Link>
                </Typography>
                <Typography variant="subtitle1" component="div">
                  <time dateTime="2020-03">March 2020</time> - Present
                </Typography>
                <ul>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Tasked with managing Google Analytics 360 & Google Tag Manager integrations for all partners which
                      include optimzations to data flows for BQ ingestion.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Currently utilizing GTM and GA4 APIs to build out analytic environments programmatically at scale;
                      this would allow for the creation of multiple analytic and tagging environments with only a config
                      file.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Currently leading efforts on GA4 migrations which will include setting up and designing data
                      workflows in GTM that are in line with GA4 requirements. Moreover, I'm tasked with optimizing GA
                      data collection into Big Query by auditing data as it comes in during intraday/daily.
                    </Typography>
                  </li>
                </ul>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography variant="h4" component="h3">
                  Lead Web Analyst at{' '}
                  <Link href="https://www.bah.com/" target={'_blank'} rel="noreferrer">
                    Booz Allen Hamilton
                  </Link>
                </Typography>
                <Typography variant="subtitle1" component="div">
                  <time dateTime="2015-05">May 2015</time> - <time dateTime="2020-03">March 2020</time>
                </Typography>
                <ul>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Conduct metrics data analysis and implement analytics reports on a ad-hoc, monthly and quarterly
                      basis while also providing recommendations for website improvements.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Ensure 100% accuracy of analytics tagging across various websites
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Setup and implement automated reports with metrics from different data sources
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Implement steps to migrate website properties from Google Analytics Legacy to GA3.
                    </Typography>
                  </li>
                </ul>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography variant="h4" component="h3">
                  Web Analyst at{' '}
                  <Link href="https://www.acs.org/" target={'_blank'} rel="noreferrer">
                    American Chemical Society
                  </Link>
                </Typography>
                <Typography variant="subtitle1" component="div">
                  <time dateTime="2010-12">December 2010</time> - <time dateTime="2015-05">May 2015</time>
                </Typography>
                <ul>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Support the Assistant Director, Platform Advertising and Analytics, with scheduled and ad hoc
                      report generation, including the monthly Sales and Marketing Web Usage Report, Annual Web Usage
                      Report and necessary data for editorial board meetings.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Create and maintain advertising reports for the ACS Web Editions platform and CEN as well as
                      advertising reports for ACS managed web ads on external websites. Perform ad-hoc advertising
                      reporting queries as needed. Support the Market Development Manager, Online Advertising with
                      forecasting and enhanced ad server reporting as needed.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
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
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <Tab label="Digital Turbine" {...a11yProps(0)} />
                <Tab label="Booz Allen Hamilton" {...a11yProps(1)} />
                <Tab label="The American Chemical Society" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography variant="h4" component="h3">
                Data Engineer at <br />
                <Link href="https://www.digitalturbine.com/" target={'_blank'} rel="noreferrer">
                  Digital Turbine
                </Link>
              </Typography>
              <Typography variant="subtitle1" component="div">
                <time dateTime="2020-03">March 2020</time> - Present
              </Typography>
              <ul>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Tasked with managing Google Analytics 360 & Google Tag Manager integrations for all partners which
                    include optimzations to data flows for BQ ingestion.
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Currently utilizing GTM and GA4 APIs to build out analytic environments programmatically at scale;
                    this would allow for the creation of multiple analytic and tagging environments with only a config
                    file.
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Currently leading efforts on GA4 migrations which will include setting up and designing data
                    workflows in GTM that are in line with GA4 requirements. Moreover, I'm tasked with optimizing GA
                    data collection into Big Query by auditing data as it comes in during intraday/daily.
                  </Typography>
                </li>
              </ul>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography variant="h4" component="h3">
                Lead Web Analyst at <br />
                <Link href="https://www.bah.com/" target={'_blank'} rel="noreferrer">
                  Booz Allen Hamilton
                </Link>
              </Typography>
              <Typography variant="subtitle1" component="div">
                <time dateTime="2015-05">May 2015</time> - <time dateTime="2020-03">March 2020</time>
              </Typography>
              <ul>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Conduct metrics data analysis and implement analytics reports on a ad-hoc, monthly and quarterly
                    basis while also providing recommendations for website improvements.
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Ensure 100% accuracy of analytics tagging across various websites
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Setup and implement automated reports with metrics from different data sources
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Implement steps to migrate website properties from Google Analytics Legacy to GA3.
                  </Typography>
                </li>
              </ul>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography variant="h4" component="h3">
                Web Analyst at <br />
                <Link href="https://www.acs.org/" target={'_blank'} rel="noreferrer">
                  American Chemical Society
                </Link>
              </Typography>
              <Typography variant="subtitle1" component="div">
                <time dateTime="2010-12">December 2010</time> - <time dateTime="2015-05">May 2015</time>
              </Typography>
              <ul>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Support the Assistant Director, Platform Advertising and Analytics, with scheduled and ad hoc report
                    generation, including the monthly Sales and Marketing Web Usage Report, Annual Web Usage Report and
                    necessary data for editorial board meetings.
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Create and maintain advertising reports for the ACS Web Editions platform and CEN as well as
                    advertising reports for ACS managed web ads on external websites. Perform ad-hoc advertising
                    reporting queries as needed. Support the Market Development Manager, Online Advertising with
                    forecasting and enhanced ad server reporting as needed.
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle2" component="p">
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
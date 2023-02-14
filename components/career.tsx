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

  const sendDataToGTM = useGTMDispatch();
  const handleTabClick = (e, device) =>
    sendDataToGTM({
      event: 'click_internal',
      element: 'tab',
      detail: e,
      category: 'web2',
      section: 'where_ive_worked',
      device: device,
    });

  const handleLinkClick = (e, device) =>
    sendDataToGTM({
      event: 'click_external',
      element: 'link',
      detail: e,
      category: 'web2',
      sub_category: 'work',
      section: 'where_ive_worked',
      device: device,
    });

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
                <Tab onClick={() => handleTabClick('dt', 'desktop')} label="Digital Turbine" {...a11yProps(0)} />
                <Tab onClick={() => handleTabClick('bah', 'desktop')} label="Booz Allen Hamilton" {...a11yProps(1)} />
                <Tab
                  onClick={() => handleTabClick('acs', 'desktop')}
                  label="The American Chemical Society"
                  {...a11yProps(2)}
                />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Typography variant="h4" component="h3">
                  Data Engineer at{' '}
                  <Link
                    onClick={() => handleLinkClick('dt', 'desktop')}
                    href="https://www.digitalturbine.com/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    Digital Turbine
                  </Link>
                </Typography>
                <Typography variant="subtitle1" component="div">
                  <time dateTime="2020-03">March 2020</time> - Present
                </Typography>
                <ul>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Currently managing GA 360 & GTM integrations for multiple partners while impriving data accuracy by optimizing and cleaning data before ingestion into BQ ETL pipelines.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Leading GA4 migrations for all partners and streamlining data processing with the data layer resulting in massive improvements in data accuracy. 
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Developing internal software using GCP APIs that would reduce implementation for data architecture build-outs.
                    </Typography>
                  </li>
                </ul>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography variant="h4" component="h3">
                  Lead Web Analyst at{' '}
                  <Link
                    onClick={() => handleLinkClick('bah', 'desktop')}
                    href="https://www.bah.com/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    Booz Allen Hamilton
                  </Link>
                </Typography>
                <Typography variant="subtitle1" component="div">
                  <time dateTime="2015-05">May 2015</time> - <time dateTime="2020-03">March 2020</time>
                </Typography>
                <ul>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Led web analytics for multiple federal government websites, resulting in increased website traffic by 13%.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Conducted site/SEO audits, A/B testing, and implemented goal funneling strategies that led to 10% improvement in conversion rates.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Initiated a data warehousing repository to identify trends, providing valuable insights that informed decision making.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Proactively collaborated with the client to ensure the best use of analytics data for their needs.
                    </Typography>
                  </li>
                </ul>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography variant="h4" component="h3">
                  Web Analyst at{' '}
                  <Link
                    onClick={() => handleLinkClick('acs', 'desktop')}
                    href="https://www.acs.org/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    American Chemical Society
                  </Link>
                </Typography>
                <Typography variant="subtitle1" component="div">
                  <time dateTime="2010-12">December 2010</time> - <time dateTime="2015-05">May 2015</time>
                </Typography>
                <ul>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Assisted the Director of Platform Advertising and Analytics in the creation and maintenance of monthly/ annual web usage reports as well as reports for editorial board meetings.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Developed and maintained accurate reports for the ACS Web Platform, ensuring data reliability and consistency. 
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Conducted thorough testing and validation of metrics for new site deployments and enhancements, ensuring data accuracy, resulting in cost savings.
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
                <Tab onClick={() => handleTabClick('dt', 'mobile')} label="Digital Turbine" {...a11yProps(0)} />
                <Tab onClick={() => handleTabClick('bah', 'mobile')} label="Booz Allen Hamilton" {...a11yProps(1)} />
                <Tab
                  onClick={() => handleTabClick('acs', 'mobile')}
                  label="The American Chemical Society"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography variant="h4" component="h3">
                Data Engineer at <br />
                <Link
                  onClick={() => handleLinkClick('dt', 'mobile')}
                  href="https://www.digitalturbine.com/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Digital Turbine
                </Link>
              </Typography>
              <Typography variant="subtitle1" component="div">
                <time dateTime="2020-03">March 2020</time> - Present
              </Typography>
              <ul>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Currently managing GA 360 & GTM integrations for multiple partners while impriving data accuracy by optimizing and cleaning data before ingestion into BQ ETL pipelines.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Leading GA4 migrations for all partners and streamlining data processing with the data layer resulting in massive improvements in data accuracy. 
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Developing internal software using GCP APIs that would reduce implementation for data architecture build-outs.
                    </Typography>
                  </li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography variant="h4" component="h3">
                Lead Web Analyst at <br />
                <Link
                  onClick={() => handleLinkClick('bah', 'mobile')}
                  href="https://www.bah.com/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Booz Allen Hamilton
                </Link>
              </Typography>
              <Typography variant="subtitle1" component="div">
                <time dateTime="2015-05">May 2015</time> - <time dateTime="2020-03">March 2020</time>
              </Typography>
             <ul>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Led web analytics for multiple federal government websites, resulting in increased website traffic by 13%.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Conducted site/SEO audits, A/B testing, and implemented goal funneling strategies that led to 10% improvement in conversion rates.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Initiated a data warehousing repository to identify trends, providing valuable insights that informed decision making.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Proactively collaborated with the client to ensure the best use of analytics data for their needs.
                    </Typography>
                  </li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography variant="h4" component="h3">
                Web Analyst at <br />
                <Link
                  onClick={() => handleLinkClick('acs', 'mobile')}
                  href="https://www.acs.org/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  American Chemical Society
                </Link>
              </Typography>
              <Typography variant="subtitle1" component="div">
                <time dateTime="2010-12">December 2010</time> - <time dateTime="2015-05">May 2015</time>
              </Typography>
             <ul>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Assisted the Director of Platform Advertising and Analytics in the creation and maintenance of monthly/ annual web usage reports as well as reports for editorial board meetings.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Developed and maintained accurate reports for the ACS Web Platform, ensuring data reliability and consistency. 
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Conducted thorough testing and validation of metrics for new site deployments and enhancements, ensuring data accuracy, resulting in cost savings.
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

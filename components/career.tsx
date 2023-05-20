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
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
                display: 'flex',
              }}
            >
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  borderRight: 1,
                  borderColor: 'divider',
                  minWidth: '175px',
                  height: '165px',
                }}
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
                      Managed data architectures and led GA4 analytic migrations, optimizing BigQuery ETL pipelines for
                      enhanced data accuracy and actionable insights.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Demonstrated proficiency in Google Analytics (GA4 & UA), GCP, and BigQuery, with a focus on
                      creating and maintaining BigQuery tables and GA schemas.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Utilized Google APIs, written in Python, to construct scalable data architectures that expedited
                      setup processes and facilitated data-driven decision-making. Ensured the robustness and
                      reliability of these solutions through comprehensive testing using pytest.
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
                      Managed analytics for multiple HHS government websites as part of the Digital Analytics Program
                      (DAP), conducting site/SEO audits, A/B testing, and goal funneling strategies. Ensured 100%
                      accuracy of analytics tagging and set up automated reports.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Initiated data warehousing to inform decision-making, regularly analyzed metrics data, and
                      generated reports. Advised clients on metrics analysis best practices and implemented BI tool data
                      dashboards.
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
                      Assisted the Assistant Director by generating regular and ad hoc reports for various departments,
                      and maintained advertising reports for multiple platforms, aiding in forecasting and enhancing ad
                      server reporting.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2" component="p">
                      Validated web analytics with each new deployment or product enhancement, and developed new
                      standard monthly internal reports, improving reporting systems based on stakeholder feedback.
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
                    Managed data architectures and led GA4 analytic migrations, optimizing BigQuery ETL pipelines for
                    enhanced data accuracy and actionable insights.
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Demonstrated proficiency in Google Analytics (GA4 & UA), GCP, and BigQuery, with a focus on creating
                    and maintaining BigQuery tables and GA schemas.
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Utilized Google APIs, written in Python, to construct scalable data architectures that expedited
                    setup processes and facilitated data-driven decision-making. Ensured the robustness and reliability
                    of these solutions through comprehensive testing using pytest.
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
                    Managed analytics for multiple HHS government websites as part of the Digital Analytics Program
                    (DAP), conducting site/SEO audits, A/B testing, and goal funneling strategies. Ensured 100% accuracy
                    of analytics tagging and set up automated reports.
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Initiated data warehousing to inform decision-making, regularly analyzed metrics data, and generated
                    reports. Advised clients on metrics analysis best practices and implemented BI tool data dashboards.
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
                    Assisted the Assistant Director by generating regular and ad hoc reports for various departments,
                    and maintained advertising reports for multiple platforms, aiding in forecasting and enhancing ad
                    server reporting.
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle2" component="p">
                    Validated web analytics with each new deployment or product enhancement, and developed new standard
                    monthly internal reports, improving reporting systems based on stakeholder feedback.
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

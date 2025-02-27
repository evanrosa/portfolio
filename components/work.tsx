import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function Job() {
  const IsNotMobile = useMediaQuery('(min-width:900px)');
  const [value, setValue] = React.useState(0);
  const [, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    setIsDesktop(IsNotMobile);
  }, [IsNotMobile]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  }

  return (
    <Container sx={{ paddingTop: '60px', paddingBottom: '130px' }}>
      <section id="Work">
        <Typography variant="h4" component="h2" sx={{ paddingBottom: 3, paddingTop: 4 }}>
          💼 Where I've Worked
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="job experience"
              centered
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab label="Digital Turbine" {...a11yProps(0)} />
              <Tab label="Booz Allen Hamilton" {...a11yProps(1)} />
              <Tab label="American Chemical Society" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Typography variant="h4" component="h3">
              Lead Data Engineer at <br />
              <Link href="https://www.digitalturbine.com/" target={'_blank'} rel="noreferrer">
                Digital Turbine
              </Link>
            </Typography>
            <Typography variant="subtitle1" component="div">
              <time dateTime="2020-03">March 2020</time> - <time dateTime="2024-11">November 2024</time>
            </Typography>
            <ul>
              <li>
                Refactored and optimized legacy BigQuery ETL pipelines, reducing processing time and cutting data costs
                by $100K+ while enhancing scalability and reliability (99.99%) across 20+ content products.
              </li>
              <li>
                Built batch data pipelines using Airflow, Spark, SQL, and Python to support 10M daily active users and
                3B+ monthly ad impressions, while experimenting with Flink for real-time streaming performance
                improvements.
              </li>
              <li>
                Integrated API-based data ingestion pipelines, improving ETL efficiency, reducing data processing time
                and data management.
              </li>
              <li>
                Integrated Looker with BigQuery and other data sources to create interactive dashboards, improving data
                accessibility for stakeholders.
              </li>
              <li>
                Maintained Databricks workflows, troubleshooting Spark-based pipeline issues in notebooks to ensure data
                integrity, availability, and 100% uptime.
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
                Managed analytics strategies for HHS and NIH government websites, improving SEO performance and user
                engagement.
              </li>
              <li>
                Developed and maintained Google Analytics & GTM tracking strategies, ensuring 100% accuracy in
                reporting.
              </li>
              <li>
                Implemented metrics dashboards with Tableau and Google Data Studio for real-time web traffic monitoring.
              </li>
              <li>Automated monthly and quarterly analytics reporting, reducing manual effort by 50%.</li>
              <li>
                Built data warehousing solutions, enabling actionable insights into healthcare web traffic trends.
              </li>
              <li>
                Conducted A/B testing and UX analysis, optimizing web experiences and boosting engagement metrics.
              </li>
            </ul>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h4" component="h3">
              Web Analytics Associate at <br />
              <Link href="https://www.acs.org/" target={'_blank'} rel="noreferrer">
                American Chemical Society
              </Link>
            </Typography>
            <Typography variant="subtitle1" component="div">
              <time dateTime="2010-12">December 2010</time> - <time dateTime="2015-05">May 2015</time>
            </Typography>
            <ul>
              <li>
                Managed day-to-day operations of the ACS Web Stats System, ensuring seamless marketing and sales
                analytics.
              </li>
              <li>
                Developed monthly and annual analytics reports, providing strategic insights for editorial and marketing
                teams.
              </li>
              <li>
                Conducted ad performance analysis, optimizing Google Search, YouTube, and external advertising
                campaigns.
              </li>
            </ul>
          </TabPanel>
        </Box>
      </section>
    </Container>
  );
}

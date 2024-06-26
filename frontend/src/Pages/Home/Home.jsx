import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Box, Grid, Stack, Typography, Container, Card, CardContent, CardMedia, CardActionArea, Divider, Tooltip, Chip } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import CommentIcon from '@mui/icons-material/Comment';
import LaunchIcon from '@mui/icons-material/Launch';
import { LinkContext } from '../../ContextProviders/LinkContext';
import { HomeDataContext } from '../../ContextProviders/HomePageContext';
import { CommentCountsContext } from '../../ContextProviders/CommentCountsContext';

import UppercaseTitle from '../../Components/UppercaseTitle';
import FullWidthBox from '../../Components/FullWidthBox';

// import AtAGlance from './AtAGlance';
import About from './About';
import GetInTouch from './GetInTouch';

import jsonData from '../../section_data.json';

import * as Tracking from '../../Utils/Tracking';
import { PreferenceContext } from '../../ContextProviders/PreferenceContext';

function Home({ title }) {
  const { themePreference } = useContext(PreferenceContext);
  const { setCurrentPage, setChartsTitlesList } = useContext(LinkContext);
  const { homeData } = useContext(HomeDataContext);
  const commentCounts = useContext(CommentCountsContext);

  // Update the page's title
  useEffect(() => {
    document.title = title;
  }, [title]);

  // set underline link to home
  useEffect(() => {
    setCurrentPage('home');
    setChartsTitlesList([]);
  }, [setCurrentPage, setChartsTitlesList]);

  const renderTeaserChartOrEmbeddedWebsite = (project) => {
    if (project.chart) return project.chart;
    if (project.embeddedWebsite) {
      return (
        <>
          <Chip
            sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
            size="small"
            label="External Site"
            icon={<LaunchIcon />}
            color="primary"
          />
          <iframe
            title={project.title}
            src={`${project.embeddedWebsite}?themePreference=${themePreference}`}
            style={{
              width: '100%',
              height: '98%',
              border: 'none'
            }}
          />
        </>
      );
    }
    return null;
  };

  return (
    <Box width="100%">
      <FullWidthBox>
        <Container sx={{ pt: 3, pb: 4 }}>
          <UppercaseTitle text="all projects" />

          { // Temporary hide AtAGlance until we have higher analytics
          /* <Box sx={{ pb: 3 }} >
            <AtAGlance
              numberOfActiveDataset={
                (homeData.reduce((count, project) => {
                  return project.isActive ? count + 1 : count;
                }, 0))
              }
            />
          </Box> */}

          <Grid container spacing={3} sx={{ justifyContent: { sm: 'center', md: 'start' } }}>
            {Object.entries(homeData).map(([key, project], index) => (
              <Grid key={index} item xs={12} sm={9} md={6} lg={4}>
                <Card elevation={2}>
                  <CardActionArea
                    component={project.externalWebsite ? 'a' : Link}
                    href={project.externalWebsite && project.externalWebsite}
                    to={project.externalWebsite ? null : `/project/${project.id}`}
                    target={project.externalWebsite ? '_blank' : ''}
                    rel={project.externalWebsite ? 'noopener noreferrer' : ''}
                    disabled={!project.isActive}
                    onClick={() => {
                      if (project.externalWebsite) {
                        Tracking.sendEventAnalytics(Tracking.Events.internalNavigation, {
                          destination_id: `/project/${project.id}`,
                          destination_label: project.id,
                          origin_id: 'home',
                        });
                      } else {
                        Tracking.sendEventAnalytics(Tracking.Events.externalNavigation, {
                          destination_link: project.externalWebsite,
                          origin_id: 'home',
                        });
                      }
                    }}
                  >
                    <CardMedia
                      height="auto"
                      sx={{ aspectRatio: '4/3', pointerEvents: 'none' }}
                    >
                      {renderTeaserChartOrEmbeddedWebsite(project)}
                    </CardMedia>

                    <Divider />
                    <CardContent>
                      <Grid container justifyContent="space-between" alignItems="end">
                        <Grid item xs={10}>
                          <Typography
                            variant="body1"
                            component="div"
                            color="text.primary"
                            fontWeight="500"
                          >
                            {project.title}
                            {
                              project.embeddedWebsite
                              && <LaunchIcon sx={{ fontSize: '1rem', ml: 0.5 }} />
                            }
                          </Typography>
                          <Typography
                            component="div"
                            variant="caption"
                            color="text.secondary"
                            sx={{
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              pr: 1
                            }}
                          >
                            {project.owner}
                          </Typography>
                        </Grid>
                        {
                          project.isActive
                          && (
                            <Grid item xs={2}>
                              <Stack direction="row" spacing={1.5}>
                                <Tooltip title="Number of Charts" enterDelay={0} leaveDelay={200}>
                                  <Stack direction="row" spacing={0.2} alignItems="center">
                                    <BarChartIcon sx={{ fontSize: '0.75rem', color: 'text.secondary' }} />
                                    <Typography variant="caption" color="text.secondary">
                                      {project.chartCounts}
                                    </Typography>
                                  </Stack>
                                </Tooltip>
                                {(commentCounts[key] != null) && (
                                  <Tooltip title="Number of Comments" enterDelay={0} leaveDelay={200}>
                                    <Stack direction="row" spacing={0.2} alignItems="center">
                                      <CommentIcon sx={{ fontSize: '0.75rem', color: 'text.secondary' }} />
                                      <Typography variant="caption" color="text.secondary">
                                        {commentCounts[key]}
                                      </Typography>
                                    </Stack>
                                  </Tooltip>
                                )}
                              </Stack>
                            </Grid>
                          )
                        }
                      </Grid>

                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FullWidthBox>

      <Divider />

      <FullWidthBox id={jsonData.about.id} sx={{ pt: 3, pb: 4 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={5} id={jsonData.about.id}>
              <About />
            </Grid>
            <Grid item md={7} id={jsonData.getInTouch.id}>
              <GetInTouch />
            </Grid>
          </Grid>
        </Container>
      </FullWidthBox>
    </Box>
  );
}

export default Home;

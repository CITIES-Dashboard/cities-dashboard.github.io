import { Box, Table, TableBody, TableCell, TableHead, TableRow, Stack, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const StyledTable = styled(Table)(({ theme, customFontSize }) => ({
  '& th, td': {
    fontSize: customFontSize,
    color: theme.palette.text.secondary
  },
  '& th': {
    fontWeight: 500,
    color: theme.palette.text.primary
  }
}));

function AirQualityIndexTable(props) {
  const { isTableSmall, hideAQIDescription } = props;
  // Air quality index legend
  const theme = useTheme();

  const airQualityIndexCategories = [
    {
      name: 'Good',
      color: theme.palette.chart.optionsColors.aqi[0],
      aqi: '0 - 50',
      rawPM2_5: '0.0 - 12.0',
      description: 'Air quality is satisfactory, and air pollution poses little or no risk',
      suggestion: 'Enjoy the clean air'
    },
    {
      name: 'Moderate',
      color: theme.palette.chart.optionsColors.aqi[1],
      aqi: '51 - 100',
      rawPM2_5: '12.1 - 35.4',
      description: 'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution',
      suggestion: 'Individuals with respiratory issues might need to reduce prolonged outdoor exertion'
    },
    {
      name: 'Unhealthy for Sensitive Groups',
      color: theme.palette.chart.optionsColors.aqi[2],
      aqi: '101 - 150',
      rawPM2_5: '35.5 - 55.4',
      description: 'Members of sensitive groups may experience health effects. The general public is less likely to be affected',
      suggestion: 'Children and individuals with respiratory issues should limit outdoor exertion'
    },
    {
      name: 'Unhealthy',
      color: theme.palette.chart.optionsColors.aqi[3],
      aqi: '151 - 200',
      rawPM2_5: '55.5 - 150.4',
      description: 'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects',
      suggestion: ''
    },
    {
      name: 'Very Unhealthy',
      color: theme.palette.chart.optionsColors.aqi[4],
      aqi: '201 - 300',
      rawPM2_5: '150.5 - 250.4',
      description: 'Health alert: The risk of health effects is increased for everyone',
      suggestion: ''
    },
    {
      name: 'Hazardous',
      color: theme.palette.chart.optionsColors.aqi[5],
      aqi: '300 - 500',
      rawPM2_5: '250.5 - 550.5',
      description: 'Health warning of emergency conditions: everyone is more likely to be affected',
      suggestion: ''
    },
  ];

  return (
    <Box overflow="auto">
      <StyledTable size="small" customFontSize={isTableSmall ? '0.5rem' : '0.6875rem'}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ pr: 0 }}>
              <Box sx={{ width: '1em', height: '1em' }} />
            </TableCell>
            <TableCell sx={{ pl: 1 }}>
              Category
            </TableCell>
            <TableCell align="right">US Air Quality Index</TableCell>
            <TableCell align="right">
              Raw PM2.5 Concentration
              (µg/m
              <sup>3</sup>
              )
            </TableCell>
            {!hideAQIDescription && <TableCell align="left">Description</TableCell>}
            {!hideAQIDescription && <TableCell align="left">CITIESair&apos;s Suggested Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {airQualityIndexCategories.map((element) => (
            <TableRow
              key={element.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ pr: 0 }}>
                <Box sx={{ width: '1em', height: '1em', backgroundColor: element.color }} />
              </TableCell>
              <TableCell sx={{ pl: 1 }}>
                {element.name}
              </TableCell>
              <TableCell align="right">{element.aqi}</TableCell>
              <TableCell align="right">
                {element.rawPM2_5}
              </TableCell>
              {!hideAQIDescription && <TableCell align="left">{element.description}</TableCell>}
              {!hideAQIDescription && <TableCell align="left">{element.suggestion}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
}

export default AirQualityIndexTable;
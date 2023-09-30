import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import parse from 'html-react-parser';
import { useMediaQuery, useTheme } from '@mui/material';
import { replacePlainHTMLWithMuiComponents } from '../Utils/Utils';

function CollapsableSubtitle({ text, wordLimit = 50, reference }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // React to changes in screen width
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // 'sm' means "small and below"

  const words = text.split(' ');

  // If not on mobile or words are within limit, just display the full text
  if (!isMobile || words.length <= wordLimit) {
    return (
      <Box>
        <Typography>{parse(text, { replace: replacePlainHTMLWithMuiComponents })}</Typography>
        {reference
        && (
        <Typography variant="caption" color="text.secondary">
          {parse(reference, { replace: replacePlainHTMLWithMuiComponents })}
        </Typography>
        )}
      </Box>
    );
  }

  let displayText = words.slice(0, wordLimit).join(' ');
  const lastFullStop = displayText.lastIndexOf('.');

  if (lastFullStop !== -1) {
    displayText = displayText.slice(0, lastFullStop + 1);
  }

  return (
    <ClickAwayListener onClickAway={() => setIsExpanded(false)}>
      <Box onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>
        {isExpanded
          ? (
            <>
              <Typography>{parse(text, { replace: replacePlainHTMLWithMuiComponents })}</Typography>
              {reference && <Typography variant="caption" color="text.secondary">{parse(reference, { replace: replacePlainHTMLWithMuiComponents })}</Typography>}
            </>
          )
          : (
            <>
              <Typography display="inline">{parse(displayText, { replace: replacePlainHTMLWithMuiComponents })}</Typography>
              <Typography display="inline" color="#8C8C8C" sx={{ ml: 1 }}>...see more</Typography>
            </>
          )}
      </Box>
    </ClickAwayListener>
  );
}

export default CollapsableSubtitle;

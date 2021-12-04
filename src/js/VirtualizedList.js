
import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Name`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList() {
  return (
    <Box
      sx={{ width: '100%', height: 100, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={200}
        width="100%"
        itemSize={46}
        itemCount={20}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
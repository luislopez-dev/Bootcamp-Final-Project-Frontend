import { PhoneOutlined } from "@mui/icons-material";
import { Card, CardContent, Collapse, List, ListItem, ListItemButton, ListItemIcon, TextField, Typography } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from "@mui/system";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}
  
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const PhoneField = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
    <>
    
      <Card>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <PhoneOutlined color="primary" />
            </ListItemIcon>
            <Typography>Mobile number</Typography>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
          <ExpandMoreIcon />
        </ExpandMore>
          </ListItemButton>            
        </List>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        
        <List>
          <ListItem>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField placeholder="(000) 000-0000" id="input-with-sx" variant="standard" />
            </Box>
          </ListItem>
        </List>

        </CardContent>
      </Collapse>
      </Card>
    </>
    )
}

export default PhoneField;
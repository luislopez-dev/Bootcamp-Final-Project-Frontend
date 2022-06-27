import { CreditCard, PaymentOutlined } from "@mui/icons-material";
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

const PaymentField = () => {

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
              <PaymentOutlined color="primary" />
            </ListItemIcon>
            <Typography>Payment</Typography>
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
        <CreditCard sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Credit Card" variant="standard" />
      </Box>
            </ListItem>
          </List>        
        </CardContent>
      </Collapse>
      </Card>
    </>
    )
}

export default PaymentField;
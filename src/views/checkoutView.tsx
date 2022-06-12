import { Button, Card, Divider, Grid, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import AddressField from "../components/checkout_domain/addressField";
import EmailField from "../components/checkout_domain/emailField";
import PaymentField from "../components/checkout_domain/paymentField";
import PhoneField from "../components/checkout_domain/phoneField";
import PickupTimeField from "../components/checkout_domain/pickupTimeField";

const CheckoutView = () => {

    return (
    <>
      <Grid container>
        <Grid item xs={6} sm={6} md={7}>
          <Card>
           <AddressField />
           <PickupTimeField />
           <PhoneField />
           <EmailField />
           <PaymentField />
          </Card>
        </Grid>

        <Grid container justifyContent="center" item xs={6} sm={6} md={5}>
          <Card>
          <List>
            <ListItem>
             <Button variant="contained" size="large">Place order</Button>
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemText>
              100% satisfaction guarantee. Place your order with peace of mind.
              </ListItemText>
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemText>                
                <strong>Sub Total </strong> $44.55
              </ListItemText>
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemText>
              <strong>Total </strong> $52.55
              </ListItemText>
            </ListItem>      

            <Divider variant="inset" component="li" />

            <ListItem>
              <Button color="primary">
                Add promo code or gift card
              </Button>
            </ListItem>

            <ListItem>
            <ListItemText>
            By placing your order, you agree to be bound by the Instacart Terms of Service and Privacy Policy. Your credit/debit card will be temporarily authorized for $10.96. Your statement will reflect the final order total after order completion. Learn more
            A bag fee may be added to your final total if required by law or the retailer. The fee will be visible on your receipt after delivery.
            Prices may vary from those in store.
            </ListItemText>
            </ListItem>

          </List>
          </Card>
        </Grid>
      </Grid>
    </>
    )
}

export default CheckoutView;
import { Alert, Button, Card, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import AddressField from "../components/checkout/addressField";
import EmailField from "../components/checkout/emailField";
import NameField from "../components/checkout/nameField";
import PaymentField from "../components/checkout/paymentField";
import PhoneField from "../components/checkout/phoneField";

const CheckoutView = () => {

  const cart = useSelector((state:any) => state.counter.cart);

  const subTotal = convertToDecimal(cart.reduce((a:any,b:any) => + a + + (b.price * b.count), 0));
  const delivery = 14.50;
  const serviceFee = 5.95;
  const total = (delivery + serviceFee + subTotal).toFixed(2);

  function convertToDecimal(num:number) {
    return Math.round((num + Number.EPSILON) * 100) / 100
  }

  // const total = (Math.round(( products.reduce((a,b) => + a + + (b.price * b.count), 0) + Number.EPSILON ) * 100 ) / 100) || 0;



    return (
    <>
      <Grid container spacing={15} style={{padding:"50px"}}>
        <Grid item md={7}>
          <Card>
           <AddressField />
           <NameField />
           <PhoneField />
           <EmailField />
           <PaymentField />
          </Card>
        </Grid>

        <Grid justifyContent="center" item md={5}>
          <Card>
          <List>

            <ListItem>
              <ListItemText>        
                <Grid container>
                  <Grid item md={6}>
                  Item subtotal
                  </Grid>
                  <Grid item md={6}>
                  ${subTotal}
                  </Grid>
                </Grid>                       
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
              <Grid container>
                <Grid item md={6}>
                  Delivery
                </Grid>
                <Grid item md={6}>
                  ${delivery}
                </Grid>
                </Grid>   
              </ListItemText>
            </ListItem>      

            <ListItem>
              <ListItemText>
              <Grid container>
                <Grid item md={6}>
                Service fee
                </Grid>
                <Grid item md={6}>
                  ${serviceFee}
                </Grid>
                </Grid>   
              </ListItemText>
            </ListItem>  
                        
            <ListItem>
              <ListItemText>
              <Grid container>
                <Grid item md={6}>
                Total
                </Grid>
                <Grid item md={6}>
                  ${total}
                </Grid>
                </Grid>   
              </ListItemText>
            </ListItem>   

            <Alert severity="info">
            If you forget anything, you can add items until the shopper checks out.
            </Alert>

            <ListItem style={{display:'flex', justifyContent:'center'}}>
             <Button variant="contained" size="large">Place order</Button>
            </ListItem>
            
            <ListItem>
              <Typography style={{fontSize:'10px'}}>
              By placing your order, you agree to be bound by the Web Items Terms of Service and Privacy Policy. Your credit/debit card will be temporarily authorized for $237.06. Your statement will reflect the final order total after order completion. Learn more
              A bag fee may be added to your final total if required by law or the retailer. The fee will be visible on your receipt via email.
              Prices may vary from those in store.
              </Typography>
            </ListItem>

          </List>
          </Card>
        </Grid>
      </Grid>
    </>
    )
}

export default CheckoutView;
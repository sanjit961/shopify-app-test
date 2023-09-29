import React from 'react'
import {Button,Icon,Banner} from "@shopify/polaris";
import {
    SmileyJoyMajor
  } from '@shopify/polaris-icons';

const Query = () => {
  return (
   <>
   <div>
    <div>
        <div style={{ width: "730px", display: "flex", margin:"5px",justifyContent:"center", alignItem:"center" }}>
    <Button primary >Desktop</Button>
    <Button>Mobile</Button>
    </div>
    </div>
    <div style={{ width: "730px", display: "flex", margin:"5px",justifyContent:"center", alignItem:"center"}}>
    <div style={{ width: "530px", display: "flex", margin:"5px",justifyContent:"space-between", alignItem:"center"}}>
    <div ><Icon  source={SmileyJoyMajor}/>
    anyQuestion</div>
    <div><Icon source={SmileyJoyMajor}/>
     anyQuestion
    </div>
    <div><Icon source={SmileyJoyMajor}/>
    anyQuestion</div>
    <div><Icon source={SmileyJoyMajor}/>
      anyQuestion</div>
    </div>
    </div>
   </div>
   <Banner title="Order archived" onDismiss={() => {}}>
      <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
    </Banner>
   </>
  )
}

export default Query
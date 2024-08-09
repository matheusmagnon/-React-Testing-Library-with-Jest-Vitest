import { useState } from "react";
import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import { Button } from "react-bootstrap";

function SummaryForm() {
  const [isChecked, setIsChecked] = useState(false);

  const popover = (props) => (
    <Popover id="button-tooltip" {...props}>
      No ice cream will actually be delivered
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to 
      <OverlayTrigger
      placement="right"
      overlay={popover}
    >  
        <span style={{ color: "blue" }}> Terms and Conditions</span>
    </OverlayTrigger>

    </span>
  );
  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
      <Form.Check
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isChecked}>
        Confirm Order
      </Button>
    </Form>
  );
}

export default SummaryForm;

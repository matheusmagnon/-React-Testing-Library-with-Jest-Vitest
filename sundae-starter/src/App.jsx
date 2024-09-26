import Container  from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetais";

import OrderSummary from "./pages/summary/OrderSummary";
import SummaryForm from "./pages/summary/SummaryForm";
function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
      <OrderSummary />
      <SummaryForm />
    </Container>
  );
}

export default App;

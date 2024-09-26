import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/server";

import { logRoles, render, screen } from "@testing-library/react";
import OrderEntry from "../OrderEntry";

test('handlers error for scoops and toppings routes', async () => {
    server.resetHandlers(
        http.get("http://localhost:3030/scoops", () => {
            return new HttpResponse(null, {status: 500})
        }),
        http.get("http://localhost:3030/toppings", () => {
            return new HttpResponse(null, {status: 500})
        })
    );

    //debug
   const {container}= render(<OrderEntry />);

    const alerts = await screen.findAllByText("An unexpected error occurred. Please try again later.");

    logRoles(container)

    expect(alerts).toHaveLength(2)
})

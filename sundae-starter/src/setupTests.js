import "@testing-library/jest-dom";

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";

// Establish API mocking before all tests
beforeAll(() => server.listen());

//Rset any request handlers that we may add during the tests, so they dont't affect other tests
afterEach(() => server.resetHandlers());

//Clean p after the test are finished 
afterAll(() => server.close());
import React from "react";

import { render } from "@testing-library/react";

import Appointment from "components/Appointment";
import Confirm from "components/Appointment/Confirm";
import Empty from "components/Appointment/Empty";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});

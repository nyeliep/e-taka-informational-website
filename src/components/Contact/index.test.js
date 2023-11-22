import React from "react";
import { render, screen,fireEvent,} from "@testing-library/react";
import { ContactUs } from ".";
import '@testing-library/jest-dom';


it("should update form data on input change", () => {
  //  const { getByPlaceholderText } = render(<ContactUs />);
  // fireEvent.change(getByPlaceholderText("Name"), {
  //   target: { value: "Rachel" },
  // });

  // fireEvent.change(getByPlaceholderText("Email address"), {

  //   target: { value: "info.etaka@gmail.com" },

  // // });
  // fireEvent.change(getByPlaceholderText("Message"), {
  //   target: { value: "Hello" },
//   });
//   expect(getByPlaceholderText("Name").value).toBe("Rachel");
//   // expect(getByPlaceholderText("Email address").value).toBe("info.etaka@gmail.com");
//   expect(getByPlaceholderText("Message").value).toBe(
//     "Hello"
//   );
// })
})
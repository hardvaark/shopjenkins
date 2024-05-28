import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Accueil } from "./Accueil"
import { fetchData } from "@/app/lib/fetchdata" // Mock the fetchData function

jest.mock("@/app/lib/fetchdata")

describe("Accueil component", () => {
  beforeEach(() => {
    // Mock the fetchData function to return a specific age based on the input
    fetchData.mockImplementation((url) => {
      const age = parseInt(url.split("/").pop())
      return Promise.resolve({ age })
    })
  })

  it("should display the age calculation result", async () => {
    render(<Accueil />)

    const inputField = screen.getByLabelText(
      "Quel est votre année de naissance:"
    )
    const submitButton = screen.getByRole("button", { name: "Calculer" })
    const resultDisplay = screen.getByText("Votre âge est :")

    // Enter an age and submit the form
    userEvent.type(inputField, "2000")
    userEvent.click(submitButton)

    // Wait for the asynchronous fetch operation to complete
    await waitFor(() => expect(resultDisplay).toBeInTheDocument())

    // Verify that the result is displayed correctly
    expect(resultDisplay).toHaveTextContent("Votre âge est : 22")
  })

  it("should display different age categories based on the calculated age", async () => {
    // Test different age scenarios and their corresponding messages
    const testCases = [
      {
        ageInput: 2010,
        expectedMessage: "Vous avez 12 ans, vous êtes un enfant ",
      },
      {
        ageInput: 2006,
        expectedMessage: "Vous avez 16 ans, vous êtes un adolescent ",
      },
      {
        ageInput: 1998,
        expectedMessage: "Vous avez 24 ans, vous êtes un jeune ",
      },
      {
        ageInput: 1980,
        expectedMessage: "Vous avez 42 ans, vous êtes adulte ‍♂️",
      },
      { ageInput: 1950, expectedMessage: "Vous avez 72 ans, vous êtes vieux " },
    ]

    for (const testCase of testCases) {
      render(<Accueil />)

      const inputField = screen.getByLabelText(
        "Quel est votre année de naissance:"
      )
      const submitButton = screen.getByRole("button", { name: "Calculer" })
      const resultDisplay = screen.getByText("Votre âge est :")

      userEvent.type(inputField, testCase.ageInput.toString())
      userEvent.click(submitButton)

      await waitFor(() => expect(resultDisplay).toBeInTheDocument())
      expect(resultDisplay).toHaveTextContent(testCase.expectedMessage)
    }
  })

  it("should display an error message if the API call fails", async () => {
    // Mock the fetchData function to throw an error
    fetchData.mockImplementation(() => {
      return Promise.reject(new Error("API call failed"))
    })

    render(<Accueil />)

    const inputField = screen.getByLabelText(
      "Quel est votre année de naissance:"
    )
    const submitButton = screen.getByRole("button", { name: "Calculer" })
    const errorDisplay = screen.getByRole("alert")

    userEvent.type(inputField, "2000")
    userEvent.click(submitButton)

    await waitFor(() => expect(errorDisplay).toBeInTheDocument())
    expect(errorDisplay).toHaveTextContent("API call failed")
  })
})

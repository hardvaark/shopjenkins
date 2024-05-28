import React from "react"
import { render, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Accueil from "./accueil" // Adjust the path as needed

jest.mock("@/app/lib/fetchdata", () => ({
  fetchData: jest.fn(),
}))

describe("Accueil component", () => {
  test("renders correctly", () => {
    const { getByText, getByLabelText } = render(<Accueil />)

    expect(getByText(/Quel est votre âge ? 📆/i)).toBeInTheDocument()
    expect(
      getByLabelText(/Quel est votre année de naissance:/i)
    ).toBeInTheDocument()
    expect(getByText(/Calculer/i)).toBeInTheDocument()
  })

  test("calculates age correctly", async () => {
    const { getByLabelText, getByText } = render(<Accueil />)
    const input = getByLabelText(/Quel est votre année de naissance:/i)
    const submitButton = getByText(/Calculer/i)

    fireEvent.change(input, { target: { value: "1990" } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(
        getByText(/Vous avez 34 ans, vous êtes adulte 🧔🏻‍♂️/i)
      ).toBeInTheDocument()
    })
  })

  // You can write additional tests for edge cases or error handling
})

// test("it should be true that true is true", () => {
//   expect(true).toBe(true)
// })

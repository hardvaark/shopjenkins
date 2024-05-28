"use client"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { fetchData } from "@/app/lib/fetchdata"

export default function Accueil() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // State
  const [result, setResult] = useState(0) // State for form data
  const [error, setError] = useState("")

  // Compute age
  const onSubmit = async (data) => {
    //console.log(data)

    try {
      const apiData = await fetchData(
        `http://localhost:9000/age/${data.age.toString()}`
      ) // Replace with your API endpoint
      setResult(apiData)
      setError(null)
    } catch (error) {
      setError(error.message)
    }

    console.log(result)
  }

  return (
    <>
      <div id="app-content">
        <h1>Quel est votre âge ? 📆 </h1>
        <div id="form-box">
          <form id="calcForm" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="age">Quel est votre année de naissance:</label>
            <br />
            <input
              type="number"
              id="age"
              name="num1"
              required=""
              {...register("age")}
            />{" "}
            <br />
            <button type="submit">Calculer</button>
            <div id="result">
              Votre âge est :{" "}
              {(result < 13 &&
                `Vous avez ${result} ans, vous êtes un enfant 👶🏻`) ||
                (result < 18 &&
                  `Vous avez ${result} ans, vous êtes un adolescent 🧒🏻`) ||
                (result < 26 &&
                  `Vous avez ${result} ans, vous êtes un jeune 👩🏻`) ||
                (result < 45 &&
                  `Vous avez ${result} ans, vous êtes adulte 🧔🏻‍♂️`) ||
                (result >= 45 && `Vous avez ${result} ans, vous êtes vieux 👴🏼`)}
            </div>
          </form>
        </div>
        <div id="merci">Merci d'avoir suivi cette présentation 🤝</div>
      </div>
    </>
  )
}

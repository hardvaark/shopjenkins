"use client"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

export default function Accueil() {
  const [result, setResult] = useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // State
  const [data, setData] = useState(0) // State for form data
  const [error, setError] = useState("")
  const [everyClick, setEveryClick] = useState(0)

  // Compute age
  const onSubmit = (data) => {
    console.log(data)
    const fetchDataFromApi = async () => {
      try {
        const apiData = await fetchData("http://localhost:9000/age/2000") // Replace with your API endpoint
        setData(apiData)
        console.log(apiData)
      } catch (error) {
        setError(error.message)
      }
    }

    //fetchDataFromApi()
    //console.log(data)
    //setFormData(data.age)
    //console.log(formData)
  }

  useEffect(() => {}, [everyClick])

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
            <div id="result">Votre âge est :</div>
          </form>
        </div>
      </div>
    </>
  )
}

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
  const [formData, setFormData] = useState({ term1: "", term2: "" }) // State for form data
  const [everyClick, setEveryClick] = useState(0)

  // Compute function
  const onSubmit = (data) => {
    //console.log(data)
    setFormData({ ...formData, term1: data.term1, term2: data.term2 })
    console.log(formData)
  }

  useEffect(() => {}, [everyClick])

  return (
    <>
      <div id="app-content">
        <h1>Calculatrice simple</h1>
        <div id="form-box">
          <form id="calcForm" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="num1">Terme 1:</label>
            <input
              type="number"
              id="num1"
              name="num1"
              required=""
              {...register("term1")}
            />
            <label htmlFor="operator">Opérateur:</label>
            <select
              id="operator"
              name="operator"
              required=""
              {...register("operation")}
            >
              <option value="add">+</option>
              <option value="substraction">-</option>
              <option value="division">/</option>
              <option value="multiplication">*</option>
            </select>
            <label htmlFor="num2">Terme 2:</label>
            <input
              type="number"
              id="num2"
              name="num2"
              required=""
              {...register("term2")}
            />
            <button type="submit">Calculer</button>
            <div id="result">
              Résultat: <span id="resultValue" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

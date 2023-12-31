"use client";
import React, { useState } from "react";

export default function CreateRoles() {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/admin/createRole",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container flex items-center justify-center w-full h-screen flex-col">
      <div className="w-96 h-fit rounded-lg p-10 shadow-lg">
        <h2 className="text-xl w-full text-center">Create Role</h2>
        <form>
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Role name
            </label>
            <input
              type="name"
              id="name"
              value={formData.name}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="new Role"
              required
              onChange={handleSubmit}
            />
          </div>
          <div className=" flex w-full justify-between">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSubmit}
            >
              Crear
            </button>
            <button
              type="button"
              class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800"
              onClick={handleSubmit}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

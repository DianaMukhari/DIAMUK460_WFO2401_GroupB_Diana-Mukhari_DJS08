import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./src/Home"
import About from "./src/About"
import Vans from "./src/Vans/Vans"
import VanDetail from "./src/Vans/VanDetail"
import Login from "./src/Login"
import Dashboard from "./src/pages/Dashboard"
import Income from "./src/pages/Income"
import Reviews from "./src/pages/Reviews"
import HostVans from "./src/pages/HostVans"
import HostVanDetail from "./src/pages/HostVanDetails"
import HostVanInfo from "./src/pages/HostVanInfo"
import HostVanPricing from "./src/pages/HostVanPricing"
import HostVanPhotos from "./src/pages/HostVanPhotos"
import NotFound from "./src/NotFound"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import AuthRequired from "./components/AuthRequired"

import "./server"

function App() {
  const authenticated = false
   

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route
            path="login"
            element={<Login />}
          />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
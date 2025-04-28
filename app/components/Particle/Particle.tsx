'use client'
import { useEffect } from 'react'
import './Particle.scss'
export default function Particle() {
  useEffect(() => {
    const containerSnow = document.querySelector('#particle-container')
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.classList.add('particle')

      particle.style.left = `${Math.random() * 100}vw`
      particle.style.top = `${Math.random() * 100}vh`

      containerSnow?.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 5000)
    }
    setInterval(createParticle, 200)
  }, [])
  return (
    <div id="particle-container">
      <p></p>
    </div>
  )
}
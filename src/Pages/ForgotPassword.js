import React, { useRef, useState } from "react"
import { Form, /*Button,*/ Card, Alert } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button'

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
    <center>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <br/>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <br/>
            <Button
              type="submit"
              halfWidth
              variant="contained"
              style= {{ backgroundColor: 'red'}}
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Reset Password
            </Button>
          </Form>
          <br/>
          <div className="w-100 text-center mt-3">
            <Link to="/SignIn" variant="body2" underline='none' style= {{ color: 'red'}}>Login</Link>
          </div>
          <br/>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/SignUp" variant="body2" underline='none' style= {{ color: 'red'}}>Sign Up</Link>
      </div>
      </center>
    </>
  )
}
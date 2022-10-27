import React, { useRef, useState } from "react"
import { Form, /*Button,*/ Card, Alert } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Button from '@mui/material/Button'

export default function UpdatePassword() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    // if (emailRef.current.value !== currentUser.email) {
    //   promises.push(updateEmail(emailRef.current.value))
    // }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        navigate("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
    <center>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <br/>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email: </Form.Label>
              <Form.Label>{currentUser.email}</Form.Label>
                {/* type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              /> */}
            </Form.Group>
            <br/>
            <Form.Group id="password">
              <Form.Label>Current Password </Form.Label>
              <Form.Control
                type="password"
                //ref={passwordRef}
                placeholder="Enter Password"
              />
            </Form.Group>
            <br/>
            <Form.Group id="password">
              <Form.Label>New Password </Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Enter  New Password"
              />
            </Form.Group>
            <br/>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Button
              type="submit"
              halfWidth
              variant="contained"
              style= {{ backgroundColor: 'red'}}
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/Profile" variant="body2" underline='none' style= {{ color: 'red'}}>Cancel</Link>
      </div>
      </center>
    </>
  )
}

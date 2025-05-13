'use client'

import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactPage = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values) => {
      setSubmitStatus('loading')
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })

        if (!response.ok) {
          throw new Error('Failed to send message')
        }

        setSubmitStatus('success')
        formik.resetForm()
      } catch (error) {
        setSubmitStatus('error')
      }
    },
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...formik.getFieldProps('name')}
                  className="input-field"
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                  className="input-field"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...formik.getFieldProps('subject')}
                  className="input-field"
                />
                {formik.touched.subject && formik.errors.subject && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...formik.getFieldProps('message')}
                  className="input-field"
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                )}
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="btn-primary w-full"
              >
                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-center">
                  Thank you for your message. We will get back to you soon!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 text-center">
                  Sorry, there was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Email: anandcomputer29@gmail.com
                </li>
                <li>Phone: </li>
                <li>Address: Dewas, Madhya Pradesh,455001</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 1:00 PM</li>
                <li>Sunday: if urgent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage 
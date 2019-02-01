import { configure } from '@storybook/react'

const req = require.context('../src', true, /\.stories\.tsx$/)

configure(function loadStories() { req.keys().forEach(req) }, module)

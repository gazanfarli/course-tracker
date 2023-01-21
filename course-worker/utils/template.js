const {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('./airbase')

const defineResponse = async request => {
  if (request.method === 'GET') {
    return await getCourses(request)
  }
  if (request.method === 'POST') {
    return await addCourse(request)
  }
  if (request.method === 'PUT') {
    return await updateCourse(request)
  }
  if (request.method === 'DELETE') {
    return await deleteCourse(request)
  }
}

module.exports = { defineResponse }

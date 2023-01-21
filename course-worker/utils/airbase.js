const getCourses = async request => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            'Content-type': 'application/json',
          },
        },
      )
      const courses = await response.json()
      const formattedCourses = courses.records.map(course => ({
        id: course.id,
        ...course.fields,
      }))
      return formattedCourses
    } catch (err) {
        console.log(err)
    }
  }
  
  const addCourse = async request => {
    const { name, link, tags } = await request.json()
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          method: 'POST',
          body: JSON.stringify({
            records: [
              {
                fields: {
                  name: name,
                  link: link,
                  tags: tags,
                },
              },
            ],
          }),
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            'Content-type': 'application/json',
          },
        },
      )
      const data = await response.json()
      return { data }
    } catch (err) {
      console.log(err);
    }
  }
  
  const updateCourse = async request => {
    const { id, ...fields } = await request.json()
    try {
      await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            fields,
          }),
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            'Content-type': 'application/json',
          },
        },
      )
    } catch (err) {
      console.log(err);
    }
    return {}
  }
  
  const deleteCourse = async request => {
    const { id } = await request.json()
  
    try {
      await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          },
        },
      )
    } catch (err) {
      console.log(err);
    }
  }
  
  module.exports = {
    getCourses,
    addCourse,
    updateCourse,
    deleteCourse,
  }
const { defineResponse } = require('./utils/template')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * @param {Request} request
 */

async function handleRequest(request) {
  const res = await defineResponse(request)
  const body = JSON.stringify(res)
  return new Response(body, {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
    },
  })
}
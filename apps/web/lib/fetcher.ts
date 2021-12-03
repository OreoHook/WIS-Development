/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from 'isomorphic-unfetch'

export  async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}
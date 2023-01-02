// @vitest-environment happy-dom

import { assert, expect, test } from 'vitest'
import { SearchGroup } from '../src/search_group'

const createGroup = (op: string) => {
  const searchGroup = new SearchGroup
  searchGroup.op = "and"
  return searchGroup
}

const createInput = (op: string, name: string) => {
  const input = document.createElement('input')
  input.setAttribute('is', 'search-input')
  input.setAttribute('op', 'eq')
  input.setAttribute('name', 'price')
  return input
}

test('op getter', () => {
  const searchGroup = createGroup("and")
  expect(searchGroup.op).toBe("and")
})

test('get child input params', () => {
  const searchGroup = createGroup("and")
  const input = createInput('eq', 'price')
  searchGroup.appendChild(input)

  expect(searchGroup.inputs).toStrictEqual([input])
})

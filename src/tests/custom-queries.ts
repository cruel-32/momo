/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  buildQueries,
  Matcher,
  MatcherOptions,
  queryHelpers,
} from '@testing-library/react';

// The queryAllByAttribute is a shortcut for attribute-based matchers
// You can also use document.querySelector or a combination of existing
// testing library utilities to find matching nodes for your query
const queryAllByName = (
  container: HTMLElement,
  id: Matcher,
  options?: MatcherOptions | undefined,
) => queryHelpers.queryAllByAttribute('name', container, id, options);

const getMultipleError = (c: any, name: any) =>
  `Found multiple elements with the name attribute of: ${name}`;
const getMissingError = (c: any, name: any) =>
  `Unable to find an element with the name attribute of: ${name}`;

const [queryByName, getAllByName, getByName, findAllByName, findByName] = buildQueries(
  queryAllByName,
  getMultipleError,
  getMissingError,
);

export {
  findAllByName,
  findByName,
  getAllByName,
  getByName,
  queryAllByName,
  queryByName,
};

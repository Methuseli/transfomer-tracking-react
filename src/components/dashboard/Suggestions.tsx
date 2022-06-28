import React from 'react'
import Container from "../common/Container";
import SuggestionsTable from './SuggestionsTable'


export default function Suggestions() {
  return <Container content={<SuggestionsTable />} />;
}
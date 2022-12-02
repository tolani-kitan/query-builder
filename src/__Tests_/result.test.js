import { render, waitFor, screen } from "@testing-library/react";
import Results from "../components/Results";
import axios from "axios";

jest.mock("axios");

const dummyResults = [
{
  authorString: "Terwee CB, Roorda LD.",
  citedByCount: 0,
  doi: "10.1080/07853890.2022.2149849",
  firstIndexDate: "2022-11-26",
  firstPublicationDate: "2023-12-01",
  id: "36426680",
  issue: "1",
  journalIssn: "0785-3890; 1365-2060; ",
  journalTitle: "Ann Med",
  journalVolume: "55",
  pageInfo: "1-11",
  pmcid: "PMC9704075",
  pmid: "36426680",
  pubType: "research-article; journal article",
  pubYear: "2023",
  source: "MED",
  title: "Country-specific reference values for PROMIS<sup>®</sup> pain"
},
{
  authorString: "Shi G, Feng J, Jian LY, Fan XY.",
  citedByCount: 3,
  doi: "10.4103/1673-5374.353494",
  firstIndexDate: "2022-10-07",
  firstPublicationDate: "2023-04-01",
  id: "36204855",
  issue: "1",
  journalIssn: "1673-5374; 1876-7958; ",
  journalTitle: "Neural Regen Res",
  journalVolume: "18",
  pageInfo: "863-868",
  pmcid: "PMC9700107",
  pmid: "36204855",
  pubType: "research-article; journal article",
  pubYear: "2023",
  source: "MED",
  title: "DNA hypomethylation promotes learning and memory recovery in a rat model of cerebral ischemia/reperfusion injury."
},
{
  authorString: "Terwee CB, Roorda LD.",
  citedByCount: 0,
  doi: "10.1080/07853890.2022.2149849",
  firstIndexDate: "2022-11-26",
  firstPublicationDate: "2023-12-01",
  id: "36426680",
  issue: "1",
  journalIssn: "0785-3890; 1365-2060; ",
  journalTitle: "Ann Med",
  journalVolume: "55",
  pageInfo: "1-11",
  pmcid: "PMC9704075",
  pmid: "36426680",
  pubType: "research-article; journal article",
  pubYear: "2023",
  source: "MED",
  title: "Country-specific reference values for PROMIS<sup>®</sup> pain"
},
];

test("results list", async () => {
  axios.get.mockResolvedValue({ data: dummyResults });
  render(<Results />);

  const resultList = await waitFor(() => screen.findAllByTestId("result"));

  expect(resultList).toHaveLength(3);
});
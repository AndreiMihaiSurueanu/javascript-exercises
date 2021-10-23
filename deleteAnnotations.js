const piiSamples = {
  type: "piiSamples",
  meta: {
    offset: 0,
    limit: 0,
    total_count: 4,
    has_more: false,
  },
  status: 200,
  piiSamples: [
    {
      name: "Request for materials",
      annotationEntities: [
        {
          id: 0,
          name: "Name",
          number: 51,
        },
        {
          id: 1,
          name: "Address",
          number: 51,
        },
        {
          id: 2,
          name: "Estimate",
          number: 2,
        },
      ],
      status: "Annotated",
      modified_on: new Date("2021-09-12T18:00:00.000Z").getTime() / 1000,
    },
    {
      name: "Proposal for Smithco",
      annotationEntities: [
        {
          id: 0,
          name: "Name",
          number: 51,
        },
        {
          id: 1,
          name: "Address",
          number: 51,
        },
        {
          id: 2,
          name: "Employee",
          number: 101,
        },
        {
          id: 3,
          name: "Estimate",
          number: 2,
        },
        {
          id: 4,
          name: "1",
          number: 1,
        },
        {
          id: 5,
          name: "2",
          number: 1,
        },
        {
          id: 6,
          name: "3",
          number: 1,
        },
        {
          id: 7,
          name: "4",
          number: 1,
        },
      ],
      status: "Annotated",
      modified_on: new Date("2021-09-12T18:00:00.000Z").getTime() / 1000,
    },
    {
      name: "Stephen's annual review",
      annotationEntities: [],
      status: "Annotation required",
      modified_on: new Date("2021-09-12T18:00:00.000Z").getTime() / 1000,
    },
    {
      name: "Donation thank you",
      annotationEntities: [
        {
          id: 0,
          name: "Customer",
          number: 1,
        },
        {
          id: 1,
          name: "Estimate",
          number: 3,
        },
      ],
      status: "Annotated",
      modified_on: new Date("2021-09-12T18:00:00.000Z").getTime() / 1000,
    },
  ],
};

const piiEntities = {
  type: "piiEntities",
  meta: {
    offset: 0,
    limit: 0,
    total_count: 6,
    has_more: false,
  },
  status: 200,
  piiEntities: [
    {
      name: "Name",
      annotations: 102,
      locked: true,
    },
    {
      name: "Location",
      annotations: 0,
      locked: true,
    },
    {
      name: "Address",
      annotations: 102,
      locked: true,
    },
    {
      name: "Customer",
      annotations: 1,
      locked: true,
    },
    {
      name: "Employee",
      annotations: 101,
      locked: true,
    },
    {
      name: "Estimate",
      annotations: 7,
      locked: false,
    },
  ],
};

function deleteSamples(piiSample) {
  return piiEntities.piiEntities.map((piiEntity) => {
    piiSample.annotationEntities.forEach((annotationEntity) => {
      if (annotationEntity.name === piiEntity.name) {
        piiEntity.annotations -= annotationEntity.number;
      }
    });
	return piiEntity
  });
}

console.log(
	)
	deleteSamples(piiSamples.piiSamples[0])


console.log(piiEntities)

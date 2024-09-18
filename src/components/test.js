import React, { useState } from "react";

const data = [
  {
    id: "1",
    title: "Title 1",
    content: "Content 1",
    link: "",
    children: [],
  },
  {
    id: "2",
    title: "Title 2",
    content: "Content 2",
    link: "",
    children: [
      {
        id: "2.1",
        title: "Title 2.1",
        content: "Content 2.1",
        link: "",
        children: [
          {
            id: "2.1.1",
            title: "Title 2.1.1",
            content: "Content 2.1.1",
            children: [],
          },
          {
            id: "2.1.2",
            title: "Title 2.1.2",
            content: "Content 2.1.2",
            children: [
              {
                id: "2.1.2.1",
                title: "Title 2.1.2.1",
                content: "Content 2.1.2.1",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "2.2",
        title: "Title 2.2",
        content: "Content 2.2",
        children: [
          {
            id: "2.2.1",
            title: "Title 2.2.1",
            content: "Content 2.2.1",
            children: [],
          },
          {
            id: "2.2.2",
            title: "Title 2.2.2",
            content: "Content 2.2.2",
            children: [],
          },
        ],
      },
    ],
  },
];

function Test() {
  const [title, setTitle] = useState("");

  function findTitleById(id) {
    function searchData(data, id) {
      for (const item of data) {
        if (item.id === id) {
          return item.title;
        }
        if (item.children.length > 0) {
          const result = searchData(item.children, id);
          if (result) {
            return result;
          }
        }
      }
      return null;
    }

    const result = searchData(data, id);
    setTitle(result ? result : "ID not found");
  }

  return (
    <div>
      <button onClick={() => findTitleById("2.2")}>
        Find Title for ID 2.1
      </button>
      <h1>Title: {title}</h1>
    </div>
  );
}

export default Test;

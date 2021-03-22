import React from "react"
import { ItemMeta } from "../types/itemMeta"
import { Link } from "gatsby"

export const ListItem = (item : ItemMeta) => (
  <div
    className="container mx-auto mb-8"
  >
    <div
      className="flex flex-row justify-between pb-2"
    >
      <Link
        to={ item.path() }
      >
        <h2
          className="text-navy-700 my-auto"
        >{ item.title }</h2>
      </Link>
      <p className="text-navy-300 my-auto">{ item.humanReadableCreated() }</p>
    </div>
    <div className="flex flex-row space-x-2">
      {
        item.tags.map((tagName) => (
          // TODO: tagでの絞り込みに対応後，Linkにする
          // <Link
          <div
            className="rounded bg-gray-200 text-gray-500 px-2"
            // to={ `/tag/${tagName}` }
          >
           { `${tagName}` }
          </div>
          // </Link>
        ))
      }
    </div>
  </div>
)


import React from "react"
import { ItemMeta } from "../types/itemMeta"
import { Link } from "gatsby"
import dayjs from "dayjs"

export const ListItem = ({ title, created, tag, slug }: ItemMeta) => (
  <div
    className="container mx-auto mb-8"
  >
    <div
      className="flex flex-row justify-between pb-2"
    >
      <Link
        to={ `/${slug}` }
      >
        <h2
          className="text-navy-700 my-auto"
        >{ title }</h2>
      </Link>
      <p className="text-navy-300 my-auto">{ dayjs(created).format("YYYY-MM-DD") }</p>
    </div>
    <div className="flex flex-row space-x-2">
      {
        tag.map((tagName) => (
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


import React from "react"
import { ItemMeta } from "../types/itemMeta"
import { Link } from "gatsby"
import dayjs from "dayjs"

export const ListItem = ({ title, created, updated, tag, slug }: ItemMeta) => (
  <div
    className="container mx-auto mb-8 p-6 rounded-md shadow-md bg-white"
  >
    <Link
      to={ `/${slug}` }
    >
      <h2
        className="text-navy-700"
      >{ title }</h2>
    </Link>
    <div
      className="flex flex-row space-x-4"
    >
      <p className="text-navy-300">作成日: { dayjs(created).format("YYYY-MM-DD") }</p>
      <p className="text-navy-300">最終更新日: { dayjs(updated).format("YYYY-MM-DD") }</p>
    </div>
    <div className="flex flex-row space-x-2">
      {
        tag.map((tagName) => (
          <Link
            className="rounded bg-gray-200 text-gray-500 px-2"
            to={ `/tag/${tagName}` }
          >
           { `#${tagName}` }
          </Link>
        ))
      }
    </div>
  </div>
)


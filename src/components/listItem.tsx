import React from "react"
import { ItemMeta } from "../types/itemMeta"
import { Link } from "gatsby"
import dayjs from "dayjs"

export const ListItem = ({ title, created, updated, tag, slug }: ItemMeta) => (
  <div
    className="container mx-auto bg-gray-50"
  >
    <Link
      to={ `/${slug}` }
    >
      <h2>{ title }</h2>
    </Link>
    <p>作成日: { dayjs(created).format("YYYY-MM-DD") }</p>
    <p>最終更新日: { dayjs(updated).format("YYYY-MM-DD") }</p>
    <div>
      {
        tag.map((tagName) => (
          <Link
          to={ `/tag/${tagName}` }
          >
           { `#${tagName}` }
          </Link>
        ))
      }
    </div>
  </div>
)


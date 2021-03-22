import dayjs from "dayjs"

const dateFormat = "YYYY-MM-DD"

function datable_to_date(obj: string | Date): Date {
  if (typeof obj === "string") {
    return new Date(obj)
  } else {
    return obj
  }
}

export class ItemMeta {
  title: string;
  created: Date;
  updated: Date;
  tags: Array<string>;
  slug: string;

  constructor(title: string, created: string | Date, updated: string | Date, tags: Array<string>, slug: string) {
    this.title = title
    this.created = datable_to_date(created)
    this.updated = datable_to_date(updated)
    this.tags = tags
    this.slug = slug
  }

  path(): string {
    return `/articles/${this.slug}`
  }

  humanReadableCreated(): string {
    return dayjs(this.created).format(dateFormat)
  }

  humanReadableUpdated(): string {
    return dayjs(this.updated).format(dateFormat)
  }
}

export default ItemMeta

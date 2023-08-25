

import houses from "./index.json"


export const getAllHouses = () => {

  return {
    data: houses,
    houseMap: houses.reduce((a, c, i) => {
      a[c.id] = c
      a[c.id].index = i

      return a
    }, {})
  }
}